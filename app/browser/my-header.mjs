if (typeof process !== 'undefined') {
  global.HTMLElement = function () { return {} }
  global.customElements = { define: function(){} }
}

// import BaseElement from '@enhance/base-element'
class BaseElement extends HTMLElement {
  constructor() {
    super()
    this.store = {}
    this.context = {}
    this.instanceID = this.getAttribute('id') ||
        self.crypto.randomUUID()
  }

  get state() {
    const attrs = this.attributes.length
      ? this.attrsToObject(this.attributes)
      : {}

    return {
      attrs,
      context: this.context,
      instanceID: this.instanceID,
      store: this.store
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      const fun = `${name}Changed`
      if (this[fun]) {
        this[fun](newValue)
      }
    }
  }

  attrsToObject(attrs = []) {
    const attrsObj = {}
    for (let d = attrs.length - 1; d >= 0; d--) {
      let attr = attrs[d]
      attrsObj[attr.nodeName] = attr.nodeValue
    }
    return attrsObj
  }

  html(strings, ...values) {
    const collect = []
    for (let i = 0; i < strings.length - 1; i++) {
      collect.push(strings[i], values[i])
    }
    collect.push(strings[strings.length - 1])
    return collect.join('')
  }
}

// import TemplateMixin from '@enhance/template-mixin'
const TemplateMixin = (superclass) => class extends superclass {
  constructor() {
    super()
    if (!this.render || !this.html || !this.state) {
      throw new Error('TemplateMixin must extend Enhance BaseElement')
    }
    const templateName = `${this.tagName.toLowerCase()}-template`
    const template = document.getElementById(templateName)
    const html = this.html || function html() {}
    const state = this.state || {}
    if (template) {
      this.template = template
    }
    else {
      this.template = document.createElement('template')
      this.template.innerHTML = this.render({ html, state })
      this.template.setAttribute('id', templateName)
      document.body.appendChild(this.template)
    }
  }
}

// Mixin specifically for reusing SFCs as Custom Elements in the browser
const CustomElementMixin = (superclass) => class extends superclass {
  constructor() {
    super()
    // Removes style tags as they are already inserted into the head by SSR
    // TODO: If only added dynamically in the browser we need to insert the style tag after running the style transform on it. As well as handle deduplication.
    let tagName = customElements.getName(this.constructor)
    this.template.content.querySelectorAll('style')
      .forEach((tag) => {
        const rules = this.rulesForCssText(tag.textContent)
        console.log(rules)

        const sheet = new CSSStyleSheet();
        for (let rule of rules) {
          let selectors = rule.selectorText.split(',')
          let selectorText = selectors.map(selector => {
            if (selector.startsWith(':host')) {
              return selector.replace(':host', tagName)
            } else {
              return `${tagName} ${selector}`
            }
          }).join(',')
          sheet.insertRule(rule.cssText.replace(rule.selectorText, selectorText))
        }
        console.log(sheet)
        document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet]

        this.template.content.removeChild(tag)
      }
      )
      // Removes script tags as they are already appended to the body by SSR
      // TODO: If only added dynamically in the browser we need to insert the script tag after running the script transform on it. As well as handle deduplication.
    this.template.content.querySelectorAll('script')
      .forEach((tag) => { this.template.content.removeChild(tag) })

    // If the Custom Element was already expanded by SSR it will have children so do not replaceChildren
    if (!this.children.length) {
      // If this Custom Element was added dynamically with JavaScript then use the template contents to expand the element
      this.replaceChildren(this.template.content.cloneNode(true))
    }
  }

  rulesForCssText(styleContent) {
    const doc = document.implementation.createHTMLDocument("")
    const styleElement = document.createElement("style")

    styleElement.textContent = styleContent
    doc.body.appendChild(styleElement)

    return styleElement.sheet.cssRules
  }
}

class MyHeader extends CustomElementMixin(TemplateMixin(BaseElement)) {
  constructor() {
    super()
    this.heading = ''
    this.header = this.querySelector('h1')
  }

  render({ html, state  }) {
    console.log('client render got called')
    const { attrs={} } = state
    const { heading='default' } = attrs
    return html`
      <style>
        :host {
          color: red;
        }
        p, div {
          color: purple;
        }
      </style>
      <h1>${heading}</h1>
      <p>holy shit</p>
    `
  }

  static get observedAttributes() {
    return [ 'heading' ]
  }

  headingChanged(value) {
    this.header.textContent = value
  }
}

export const render = MyHeader.prototype.render;

customElements.define('my-header', MyHeader)

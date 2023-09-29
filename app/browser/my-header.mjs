import CustomElement from '../poc/custom-element.mjs'

class MyHeader extends CustomElement {
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
        @media screen and (min-width: 48em) {
          p {
            color: orange;
          }
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

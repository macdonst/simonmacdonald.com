export default function Element ({ html, state }) {
  const { attrs } = state
  const { href } = attrs
  return html`
  <style>
    :host a {
        color: var(--primary-600)
    }
    :host a:visited {
        color: var(--primary-500)
    }
  </style>
  <a href="${href}" class="no-underline">
        <slot></slot>
  </a>`
}

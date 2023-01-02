export default function Element ({ html }) {
  return html`
  <style>
    :host main {
        max-width: 1020px;
        padding: 96px 32px;
    }
    @media only screen and (max-width: 767px) {
        :host main {
            padding: 32px;
        }
    }
    @media only screen and (max-width: 640px) {
        :host main {
            padding: 40px 20px;
        }
    }
  </style>
  <main class="m-auto">
    <slot></slot>
  </main>`
}


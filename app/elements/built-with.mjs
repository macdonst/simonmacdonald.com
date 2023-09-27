export default function BuiltWith({ html, state }) {
  const { attrs } = state
  const { size = 'medium' } = attrs
  const sizes = {
    'xsmall': -2,
    'small': -1,
    'medium': 0,
    'large': 1,
    'xlarge': 2
  }

  return html`
  <style>
    :host a {
      box-shadow: 4px 4px 1px 0 #ededf0;
      background-image: linear-gradient(152deg, #AD6EF9, #7327CE);
      color: white;
    }
    :host img {
      height: 0.95em;
      inset-block-start: -1px;
    }
  </style>
  <a href="https://enhance.dev"
     class="whitespace-no-wrap pb${-3 + sizes[size]} pi${0 + sizes[size]} text${0 + sizes[size]} font-semibold cursor-pointer radius0 no-underline inline-flex align-items-center font-sans">
    Built with&nbsp;<img class="relative" src="/_public/favicon.svg"/>&nbsp;Enhance
  </a>`
}

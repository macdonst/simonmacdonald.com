export default function Element ({ html }) {
  return html`
  <div class="text-center">
    <slot name="image"></slot>
    <div class="p0">
        <slot name="title"></slot>
        <slot name="desc"></slot>
        <slot name="link"></slot>
    </div>
  </div>`
}


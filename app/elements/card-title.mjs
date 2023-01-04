export default function Element ({ html }) {
  return html`
    <h2 class="font-sans uppercase tracking3 mb-2">
        <slot></slot>
    </h2>`
}

export default function TextContainer({ html }) {
  return html`
    <style>
      :host {
        display: block;
        max-inline-size: 84ch;
      }
      :host pre code {
        display: block;
        max-width: 100%;
        min-width: 100px;
        font-size: 1rem;
        padding: 0.7rem 0.9rem;
        color: var(--hl-color);
        background-color: var(--hl-bg);
        white-space: pre;
        tab-size: 2;
        -webkit-overflow-scrolling: touch;
        overflow-x: auto;
      }
    </style>
    <slot></slot>
  `
}

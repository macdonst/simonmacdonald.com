export default function Element ({ html }) {
  return html`
<style>
  :host footer {
    background-color: var(--secondary-300);
  }
</style>
<footer class="w-full p0">
  <div class="flex justify-center gap-1">
    <wc-social-link network="github" handle="macdonst"></wc-social-link>
    <wc-social-link network="twitter" handle="macdonst"></wc-social-link>
    <wc-social-link network="linkedin" handle="simonmacdonald"></wc-social-link>
  </div>
</footer>
<script type="module" src="/_public/bundles/wc-social-link.mjs"></script>`
}


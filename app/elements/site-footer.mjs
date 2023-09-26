export default function SiteFooter({ html, state }) {
  const { store } = state
  const { author } = store
  return html`
    <style>
      text-container {
        border-color: #ccc;
      }
    </style>
    <footer class='pbe6'>
      <site-container>
        <text-container class='mi-auto text-center border-solid border-bs1 pbs3'>
          <social-links github="macdonst" mastodon="macdonst" instagram="macdonst" linkedin="simonmacdonald" rss="/blog/rss"></social-links>
          <p class='text-1'>
            &copy; ${new Date().getFullYear()} ${author.name}</span>
          </p>
          <p class='text-1'>
            <built-with size="xsmall"></built-with>
          </p>
        </text-container>
      </site-container>
    </footer>
  `
}

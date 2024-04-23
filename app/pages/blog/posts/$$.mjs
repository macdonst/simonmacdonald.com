/** @type {import('@enhance/types').EnhanceElemFn} */

function isNakedDay() {
  const now = new Date();
  const year = now.getFullYear();
  const start = new Date(year, 3, 24, -14, 0, 0).getTime() / 1000;
  const end = new Date(year, 3, 24, 36, 0, 0).getTime() / 1000;
  const z = now.getTimezoneOffset() * 60;
  const currentTime = now.getTime() / 1000 - z;

  return currentTime >= start && currentTime <= end;
}

export default function ({ html, state }) {
  const { store } = state
  const { post, mentions } = store
  const { frontmatter } = post
  const { description = '', published = '', title = '' } = frontmatter

  return html`
      <style>
        h1, .date {
          text-align: var(--align-heading);
        }
      </style>
      <nav-bar class='pb4 sticky inset-bs-0 z1'></nav-bar>
      <my-h-card class="hidden"></my-h-card>
      <site-container>
          <resume-container class="mi-auto">
            <article class="h-entry font-body leading4 mi-auto pb0 pb4-lg">
                <h1 class="p-name font-heading font-bold mbe0 text4 tracking-1 leading1">${title}</h1>
                <p class='date dt-published mbe4'>${published}</p>
                <section slot="e-content doc">
                  <read-it-to-me>
                    ${post.html}</section>
                  </read-it-to-me>
                <section class="p-summary hidden">${description}</section>
                <my-h-card class="hidden"></my-h-card>
              </article>
            ${mentions?.length ? '<webmentions-list></webmentions-list>' : ''}
          </resume-container>
        </site-container>
      <site-footer></site-footer>
      ${isNakedDay() ? '' : '<script type="module" src="/_public/browser/read-it-to-me.mjs"></script>' }
  `
}

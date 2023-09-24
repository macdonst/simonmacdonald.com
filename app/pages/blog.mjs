/** @type {import('@enhance/types').EnhanceElemFn} */
export default function ({ html, state }) {
  const { store } = state
  const { limit, offset, total } = store

  return html`
      <nav-bar class='pb4 sticky inset-bs-0 z1'></nav-bar>
      <my-h-card class="hidden"></my-h-card>
      <site-container>
        <main>
          <resume-container class="mi-auto">
            <blog-posts></blog-posts>
          </resume-container>
          <blog-pagination
            limit="${limit}"
            offset="${offset}"
            total="${total}"
            class="pb3 pb5-lg"
          ></blog-pagination>
        </main>
      </site-container>
      <site-footer></site-footer>
    `
}

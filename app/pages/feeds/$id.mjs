// View documentation at: https://enhance.dev/docs/learn/starter-project/pages
/**
  * @type {import('@enhance/types').EnhanceElemFn}
  */
export default function Html ({ html, state }) {
  const { store } = state
  const feed = store.feed || {}
  const problems = store.problems || {}

  return html`<enhance-page-container>
  <enhance-form
  action="/feeds/${feed.key}"
  method="POST">
  <div class="${problems.form ? 'block' : 'hidden'}">
    <p>Found some problems!</p>
    <ul>${problems.form}</ul>
  </div>
  <enhance-fieldset legend="Feed">
  <enhance-text-input label="Name" type="text" id="name" name="name" value="${feed?.name}" errors="${problems?.name?.errors}"></enhance-text-input>
  <enhance-text-input label="Link" type="url" id="link" name="link" value="${feed?.link}" errors="${problems?.link?.errors}"></enhance-text-input>
  <enhance-text-input label="Description" type="text" id="description" name="description" value="${feed?.description}" errors="${problems?.description?.errors}"></enhance-text-input>
  <input type="hidden" id="key" name="key" value="${feed?.key}" />
  <enhance-submit-button style="float: right"><span slot="label">Save</span></enhance-submit-button>
  </enhance-fieldset>
</enhance-form>
</enhance-page-container>`
}

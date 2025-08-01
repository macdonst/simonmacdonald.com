export default function FeedList({ html, state }) {
  const { store={} } = state
  const { feeds=[] } = store

  return html`${feeds.map(item => `<article class="mb2">
<div class="mb0">
  <p class="pb-2"><strong class="capitalize">name: </strong>${item?.name || ''}</p>
  <p class="pb-2"><strong class="capitalize">link: </strong>${item?.link || ''}</p>
  <p class="pb-2"><strong class="capitalize">description: </strong>${item?.description || ''}</p>
  <p class="pb-2"><strong class="capitalize">key: </strong>${item?.key || ''}</p>
</div>
<p class="mb-1">
  <enhance-link href="/feeds/${item.key}">Edit this feed</enhance-link>
</p>
<form action="/feeds/${item.key}/delete" method="POST" class="mb-1">
  <enhance-submit-button><span slot="label">Delete this feed</span></enhance-submit-button>
</form>
</article>`).join('\n')}
`
}

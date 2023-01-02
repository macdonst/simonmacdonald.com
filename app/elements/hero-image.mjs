export default function Element ({ html, state }) {
  const { attrs } = state
  const { portrait, landscape, title, subtitle, alt = ''} = attrs
  return html`
  <style>
    .wrapper {
      min-height: 320px;
    }
    .centered {
      color: var(--light);
      z-index: 3;
    }
  </style>
<div class="wrapper relative overflow-hidden w-full">
  <picture class="absolute top0 right0 bottom0 left0">
    <source media="(max-width: 799px)" srcset="${portrait}" />
    <source media="(min-width: 800px)" srcset="${landscape}" />
    <img src="${portrait}" alt="${alt}" />
  </picture>
  <div class="centered text-center flex flex-col h-full w-full justify-center items-center absolute left0 top0 p0">
    ${subtitle && `<p class="italic text0 text1-lg font-normal mt0 mb0">${subtitle}</p>`}
    ${title && `<p><strong class="uppercase font-sans font-bold tracking2-lg text2 text4-lg">${title}</strong></p>`}
  </div>
</div>`
}


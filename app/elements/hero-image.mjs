export default function Element ({ html, state }) {
  const { attrs } = state
  const { img, title, subtitle, alt = '', focalpoint = '50,50', mark = false} = attrs
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
  <enhance-image class="absolute top0 right0 bottom0 left0"
    src="${img}"
    alt="${alt}"
    defaultwidth='640'
    variant1='(min-width: 90em) 2500 700'
    variant2='(min-width: 40em) 1440 700'
    focalpoint="${focalpoint}"
    loading='lazy'
    ${mark ? `mark` : ``}
  ></enhance-image>
  <div class="centered text-center flex flex-col h-full w-full justify-center items-center absolute left0 top0 p0">
    ${subtitle && `<p class="italic text0 text1-lg font-normal mt0 mb0">${subtitle}</p>`}
    ${title && `<p><strong class="uppercase font-sans font-bold tracking2-lg text2 text4-lg">${title}</strong></p>`}
  </div>
</div>`
}


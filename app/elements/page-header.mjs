export default function BeginNav({ html }) {
  return html`
    <style scope="global">
      /* Prevent document body scrolling when mobile nav menu open */
      body:has(.mobileMenuToggle:checked) {
        overflow: hidden;
      }

      @media screen and (min-width: 64em) {
        body:has(.mobileMenuToggle:checked) {
          overflow: unset;
        }
      }
    </style>
    <style>
      header {
        z-index: 4;
      }

      header,
      nav {
        color: var(--light);
      }

      img {
        height: 2rem;
        aspect-ratio: 295.96 / 88.05;
      }

      .mobileMenuToggle {
        right: 1rem;
        top: 1rem;
        appearance: none;
        cursor: pointer;
        width: 32px;
        height: 32px;
      }

      .mobileMenuToggle:after {
        content: url('/_public/icons/icon-menu.svg');
      }

      .mobileMenuToggle:checked:after {
        content: url('/_public/icons/icon-close.svg');
      }

      nav {
        opacity: 1;
        height: calc(100vh - var(--nav-height));
        top: -100vh;
        line-height: 1.333rem;
      }

      .mobileMenuToggle:checked + nav {
        opacity: 1;
        top: var(--nav-height);
      }

      @media screen and (min-width: 64em) {
        /* reset */
        nav {
          opacity: 1;
          height: auto;
        }
      }

      /* TODO: Replace with Enhance Styles class */
      .mt-auto {
        margin-top: auto;
      }
    </style>

    <header class="font-sans font-medium fixed top0 left0 right0">
      <begin-container class="flex-lg items-center justify-between w-full">
        <div class="p0 uppercase text1">
          <a href="/">Simon MacDonald</a>
        </div>
        <input
          id="toggle"
          type="checkbox"
          name="mobileMenuToggle"
          class="absolute hidden-lg mobileMenuToggle"
          aria-label="Toggle site navigation"
          autocomplete="off"
        />
        <nav class="absolute left0 right0 static-lg flex flex-col flex-row-lg pr0">
          <ul
            class="pt4 pt-none-lg pb4 pb-none-lg list-none text-center text0 text-1-lg flex flex-col flex-row-lg gap2 gap1-lg uppercase"
          >
            <li><a href="/blog">Blog</a></li>
            <li><a href="/speaking">Speaking</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
      </begin-container>
    </header>
  `
}

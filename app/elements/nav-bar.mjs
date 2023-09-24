export default function NavBar({ html, state }) {
  const { store } = state
  const { author } = store
  return html`
    <style scope="global">
      /* Prevent document body scrolling when mobile nav menu open */
      body:has(.mobileMenuToggle:checked) {
        overflow: hidden;
      }

      @media screen and (min-width: 48em) {
        body:has(.mobileMenuToggle:checked) {
          overflow: unset;
        }
      }
    </style>
    <style>
      :host {
        display: block;
        position: relative;
      }

      input {
        z-index: 4;
      }

      .backdrop {
        backdrop-filter: blur(2px);
        background: hsla(0deg 0% 100% / 0.9);
        --mask-image: linear-gradient(to bottom, black 50%, transparent);
        mask-image: var(--mask-image);
        -webkit-mask-image: var(--mask-image);
        inset-block-end: -20%;
      }

      img {
        border-radius: 0.25em;
        height: 2.25em;
        width: auto;
      }

      .mobileMenuToggle {
        right: 1rem;
        top: var(--space-4);
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
        opacity: 0;
        height: calc(100vh);
        top: -100vh;
        line-height: 1.333rem;
      }

      .mobileMenuToggle:checked + nav {
        opacity: 1;
        top: 0;
        background-color: var(--dark);
        color: var(--light);
      }

      @media screen and (min-width: 48em) {
        /* reset */
        nav {
          opacity: 1;
          height: auto;
        }

      }
    </style>
    <site-container>
      <header class='flex flex-col flex-row-lg align-items-center justify-content-between gap0 leading1'>
        <a href='/' class='no-underline flex align-items-center gap0'>
          <img src='/_public/avatar.jpg' alt='Avatar for Simon MacDonald' />
          <h1 class='font-semibold tracking-1'>
            ${author.name}<br />
            <span class='font-normal'>${author.title}</span>
          </h1>
        </a>
        <input
          id="toggle"
          type="checkbox"
          name="mobileMenuToggle"
          class="absolute hidden-lg mobileMenuToggle"
          aria-label="Toggle site navigation"
          autocomplete="off"
        />
        <nav class="absolute inset-i-0 static-lg flex flex-col flex-row-lg">
          <ul
            class="
              pb4
              pb-none-lg
              list-none
              text-center
              flex
              flex-col
              flex-row-lg
              align-items-center
              gap2
              gap1-lg
              uppercase tracking1 font-semibold text-1
            "
          >
          <li><a href='/'>Home</a></li>
          <li><a href='/blog'>Blog</a></li>
          <li><a href='/resume'>Resumé</a></li>
          <li><a href='/sandman'>Sandman</a></li>
          <li><a href='/linktree'>Links</a></li>
        </ul>
      </nav>
      <div class='backdrop absolute inset-0 z-1'></div>
    </header>
    </site-container>
  `
}

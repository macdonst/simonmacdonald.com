---
title: Opening Dialogs with the Invoker API
description: Replacing some custom JavaScript with the Invoker API.
published: "July 26, 2026"
---

It's been awhile since I've done any frontend work as my current role keeps me busy with backend node development. I had some free time this weekend I decided to update the dependencies on this old website of mine. Since I was in here I decided to see if I could trim some more JavaScript from the front end, not that there is a ton of JS loaded by any of these pages.

One spot that I identified as possible area for deletion was on the <a href="./sandman">Sandman Gallery</a> page. Each image when clicked opens the full size image in a dialog. I needed to use JavaScript to open the `<dialog>` element at the time. Starting in <a href="https://caniuse.com/wf-invoker-commands">December of 2025</a>, all modern browsers ship with the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API">Invoker Command API</a>. So I figured it was okay to replace my 672 byte polyfill with the native web API.

Let me tell you the code changes were:

![supereasy, barely an inconvenience](/_public/images/supereasy.gif)

Here's the original code with my polyfill:

```html
<a href='${image}' data-instance='${instanceID}' class='block overflow-hidden'>
    <img src='${thumbnail}' alt='${alt}' class='object-cover object-c' />
</a>
<h2 class="text-1 font-bold pbs-1">${alt}</h3>
<dialog data-instance='${instanceID}' class='m-auto overflow-visible'>
```

The relevant parts of the polyfill were:

- Find all anchor tags in the **light-box** web component
- Register click listeners on those anchors that open the dialog.

```javascript
/* globals document */
const triggers = document.querySelectorAll('light-box a')

triggers.forEach(trigger => {
  trigger.addEventListener('click', event => {
    // Prevent link firing so we can open the lightbox's modal instead
    event.preventDefault()
    const instanceID = trigger.dataset.instance
    document.querySelector(`dialog[data-instance='${instanceID}']`).showModal()
  })
})
```

By switching to the Invoker Command API I was able to ditch my polyfill and change the structure of my HTML to look like:

```html
<button command="show-modal" commandfor="${instanceID}" class='block overflow-hidden'>
    <img src='${thumbnail}' alt='${alt}' class='object-cover object-c' />
</button>
<h2 class="text-1 font-bold pbs-1">${alt}</h3>
<dialog id='${instanceID}' class='m-auto overflow-visible'>
```

- The anchor tag becomes a button
- Added the **command** attribute to tell the button we want it to **show-modal**
- Also added the **commandfor** attribute to indicate what DOM element the button should act upon
- Finally, instead of giving the dialog a **data-instance** we give it an **id**.

That's it. Easy squeezy, lemon peasy.

Now this wasn't a huge code saving but it is one less JavaScript file that the browser needs to download and evaluate. Overall this makes my site leaner and faster and lets me spend my JavaScript budget on writing my own <a href="/blog/posts/2024-02-01-read-it-to-me-component">Speech to Text component</a>. This, of course, barely scratches the surface of what you can do with the Invoker Command API and more for information read the MDN entry or watch <a href="https://www.keithcirkel.co.uk/">Keith Cirkel</a> talk <a href="https://londonwebstandards.org/talks/everything-you-need-to-know-about-invoker-commands/">Everything you need to know about Invoker Commands</a> from <a href="https://londonwebstandards.org/">London Web Standards</a>.

---
title: Read It To Me Component
description: "I love HTML Web Components but that doesn't mean we should never use the Shadow DOM. One component that greatly benefits from the Shadow DOM is the read it to me component I introduce in this post."
published: "February 1, 2024"
---

My day job includes working on the open source project [Enhance](https://enhance.dev/). With Enhance we focus on writing HTML Web Components that lean on progressive enhancement and the Light DOM.

I love HTML Web Components but that doesn't mean we should never use the Shadow DOM. Previously I've written posts [Shadow DOM: Not by Default](https://begin.com/blog/posts/2023-08-18-shadow-dom-not-by-default) and [Head Toward the Light DOM](https://begin.com/blog/posts/2023-11-10-head-toward-the-light-dom) that may make you think I'm a never Shadow DOM'er. However, some components are tailor made to use the Shadow DOM. Especially when the components capabilities are only possible with JavaScript. If there is a problem with JavaScript then the component should just get out of the way.

One component that greatly benefits from the Shadow DOM is the [read it to me](https://github.com/macdonst/read-it-to-me) component I'll be introducing in this post.

In what seems like a previous lifetime I used to work on a speech recognition project and I've always been fascinated with speech recognition. As as I get older and my eyes betray me by deteriorating at a rapid pace I find myself turing more to audio to absorb information in the form of audio books and podcasts.

So I decided to write a web component that allows developers to quickly include the ability to enable have the browser read content out to the user. In fact you can give it a try right now but looking for the purple play (▶️) button at the top of this post.

Since the component uses the `SpeechSynthesis` API which is only available via JavaScript I decided to put the UI for this component in the shadow DOM. This way, if something goes wrong with JavaScript you still see the content which you are slotting into the component but the Play/Pause and Stop buttons won't be shown. Go ahead and turn JavaScript off in the browser and you'll notice the buttons just disappear.

## Installation

Install `read-it-to-me` NPM package:

```bash
npm i read-it-to-me
```

or add a script tag to the package via Unpkg or Snowpack.

```html
// Unpkg
<script type="module" src="https://unpkg.com/read-it-to-me/read-it-to-me.js?module=true"></script>
// Snowpack
<script type="module" src="https://cdn.skypack.dev/read-it-to-me"></script>
```

## Usage

Wrap your content in the `read-it-to-me` web component.

```html
<read-it-to-me>
    <p>Read it to me!</p>
</read-it-to-me>
```

## Attributes

You can control the speech synthesis utterance by setting the following attributes on the component.

- **pitch** - A float representing the pitch value. It can range between 0 (lowest) and 2 (highest), with 1 being the default pitch for the current platform or voice.
- **rate** - A float representing the rate value. It can range between 0.1 (lowest) and 10 (highest), with 1 being the default rate for the current platform or voice, which should correspond to a normal speaking rate.
- **lang** - A string representing a BCP 47 language tag, with the default of `en-US`.

## CSS Custom Properties

For styling the following CSS custom properties are exposed for you to override.

- **--ritm-color** - background color of button, default #AD6EF9
- **--ritm-active** - color of active button text, black
- **--ritm-text** - color of button text, default white
- **--ritm-top** - margin block start value for player controls, default 0em

## Next Steps

Please give the package a try and report any [bugs](https://github.com/macdonst/read-it-to-me/issues) you run into.

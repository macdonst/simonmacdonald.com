---
title: Detect Missing Adblocker Component
description: Nudging folks to install an Adblocker in order to protect themselves
published: "May 2, 2024"
---

Last week it was my partner's birthday and I went through extensive efforts in order to prevent the advertising industry from ruining any surprise. I've learned from previous experience that purchasing presents from our home network is a sure fire way for a bunch of ads about that present to be served up to my spouse.

My current op-sec for gift shopping includes a VPN, a separate profile in my web browser, and never, EVER, buying any gifts at home. Eschewing the comfort of my home setup to buy things from my phone while out and about.

So when I was reading my Mastodon feed and came across this post from [Beko Pharm](https://social.tchncs.de/@bekopharm) I was very intrigued.

[![beko pharm](/_public/images/beko-pharm.jpg)](https://mastodon.online/@bekopharm@social.tchncs.de/112360046539772867)

I love this idea of gently nudging folks to install an adblocker so I decided to add it to my site. The work below is based off of [Stefan Bohacek](https://stefanbohacek.online/@stefan)'s [detect-missing-adblocker](https://github.com/stefanbohacek/detect-missing-adblocker) WordPress plugin. If you like what I've done you should really [support Stefan](https://stefanbohacek.com/support-my-work/) as I'm just standing on his shoulders here. The biggest difference is I wrapped it in an [Enhance](https://enhance.dev/) style web component.

Now, if you visit my site without an adblocker you should see a floating banner at the top of the page extolling you to install and adblocker for your own good.

![ad block banner](/_public/images/ad-block-banner.png)

When you click the `Close` link the component will set a cookie so you don't see the banner on each subsequent page on my website.

## Installation

Install `detect-missing-adblocker` NPM package:

```bash
npm i detect-missing-adblocker
```

or add a script and link tag to the package via Unpkg.

```html
// Unpkg
<script type="module" src="https://unpkg.com/detect-missing-adblocker@latest/dist/detect-missing-adblocker.js?module=true"></script>
<link rel="stylesheet" href="https://unpkg.com/detect-missing-adblocker@latest/nativeads.js.css">
```

## Usage

Wrap your content in the `detect-missing-adblocker` web component.

```html
<detect-missing-adblock>
  <span slot="title">🦠 Ad-blocker not detected</span>
  <span slot="message">This site doesn't contain ads but consider installing a browser extension that blocks ads and other malicious scripts in your browser to protect your privacy and security.
  <p><a href="https://stefanbohacek.com/project/detect-missing-adblocker-wordpress-plugin/#resources" target="_blank">Learn more.</a></p>
  </span>
</detect-missing-adblock>
```

Obviously, you can customize the banner on your own site by passing in different markup for the `title` and `message` slots.


## Next Steps

Please give the package a try and report any [bugs](https://github.com/macdonst/detect-missing-adblocker/issues) you run into.

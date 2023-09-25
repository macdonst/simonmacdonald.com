---
title: State of the Browser 2023 Trip Report
description: Over the weekend I made the pilgrimage from Ottawa to London to attend the 2023 version of State of the Browser.
published: "September 25, 2023"
---

Thanks to my friend [Henri Helvetica](https://webperf.social/@henrihelvetica) I learned about the [State of the Browser conference](https://2023.stateofthebrowser.com/). Henri spoke at the 2022 event and correctly surmised that I would enjoy myself there as the [London Web Standards group](https://londonwebstandards.org/) are my type of people. So I bought a in-person ticket to the event and got myself over to London to take it all in.

Unfortunately, my trip was much shorter than originally planned due to reasons that I won't explain because they are boring and not germane to the post. However, I'm very glad I decided to take the event in-person because I was treated with a day full of 5 star banger presentations.

![State of the Browser](/_public/images/sotb.jpg)

The day started off with [Dave Letorey](https://mastodon.social/@dletorey) welcoming us all to the conference and making the salient point that:

> ‘Earlier this year, Musk said “I’m going to make Twitter the everything app.” He’s wrong, the browser is the everything app.'
>
> Dave Letorey

At that point I was ready to run through a wall if Dave asked me to.

Then he went on to describe the conference badges as _save icons_.

![save icons](/_public/images/save-icons.png)

For those of us old enough to have used a 3.5" floppy disk, Dave quizzed us on how much storage space the disk provides.

> `1.44 MB and if your homepage doesn't fit on one of these you are doing it wrong`.
>
> Dave Letorey

Did I check the weight of my homepage before including this quote, yes, yes I did. I'm happy to report it is under 200 kb.

Then we got into the talks which were all extremely high quality. Here's a few brief thoughts on each of them.

## The Talks

**Web Standards: Does Anyone Actually Care?** - [Michael Lorek](https://indieweb.social/@mlorek)

- We should be [validating](https://validator.w3.org/) our web pages. Most websites do not validate. My own homepage doesn't validate and I'm going to dig in and fix those errors.
- There are over 1.1 billion websites on the internet but just over 200 million are active. A startling high percentage 43% are built with WordPress.
- There is inadequate teaching of HTML in our industry. I couldn't agree more on this point.

**It all means nothing in the end** - [Amy Hupe](https://social.design.systems/@Amy_Hupe)

- With apologies to all the other speakers, Amy's talk was the standout of the day. I highly recommend watching her talk on burnout as we've all been or will get there at some point in our lives.
- The talk is hilarious.
- Amy is available for [hire](https://amyhupe.co.uk/contact/).

**Accessibility Is Easy … Except for When It Isn’t** - [Ian Lloyd](https://mastodon.social/@lloydi)

![State of the Browser](/_public/images/sotb-ian.jpg)

- Ian did a great talk on a11y positing that the best way to be accessible is to use native HTML elements instead of building your own from scratch. I agree 100% and this is one of the reasons that I'm upset with Apple for blocking Web Components from extending anything other than HTMLElement.
- He also mentioned some interesting blog posts on how to style [select](https://adrianroselli.com/2021/03/under-engineered-select-menus.html) and [multi-select](https://adrianroselli.com/2022/05/under-engineered-multi-selects.html) components.

**Stop using JS for that: Moving features to CSS and HTML** - [Kilian Valkhof](https://mastodon.social/@Kilian)

- Killian re-iterated [The Rule of Least Power](https://en.wikipedia.org/wiki/Rule_of_least_power) when it comes to implementing applications on the web. Frequently, we reach for JavaScript when there is an appropriate HTML or CSS solution.
- Many examples were provided of ways you can reduce your JavaScript footprint.

**The Blue PWAnet** - [Diego González](https://toot.cafe/@diekus)

- Diego channelled his best David Attenborough to give us an update on where we are at with Progressive Web Applications.

**Cache Rules Everything** - [Harry Roberts](https://webperf.social/@csswizardry)

- Harry provided a master class on caching.
- It all comes down to two headers, `cache-control` and `etag`.
- Slides are [available](https://speakerdeck.com/csswizardry/cache-rules-everything) and I plan on going over them again just to make sure we are not making any caching mistakes.

**Exploring the Potential of the Web Speech API in Karaoke** - [Ana Rodrigues](https://mastodon.social/@ohhelloana)

- Ana builds a karaoke machine in the browser using the web speech API.
- I respect her willingness to sing to the tune of _Twinkle, Twinkle Little Star_ live on stage in front of an audience. I've never been that brave.
- As a former speech recognition engineer I really loved this talk and wish the web would make more progress in this area.
- She also recommended everyone watch [Léonie Watson](https://front-end.social/@tink) talk on [Designing voice interfaces](https://www.youtube.com/watch?v=6X23I9yHqd4) which I have to +1.

**What Are Accessibility Overlays?** -[Heydon Pickering](https://front-end.social/@heydon)

- The final part of the talks was the world premier of Heydon's latest web short.
- [What Are Accessibility Overlays?](https://briefs.video/videos/what-are-accessibility-overlays/)

## The Pub

No London conference would be complete without a trip to the pub afterwards. I had the chance to meet and talk to a bunch of folks including (but not limited to) [Katie Fenn](https://front-end.social/@katiefenn), [Nick F](https://mastodon.social/@nickautomatic), [Sophie Koonin](https://social.lol/@sophie) and [Alistair Shepherd](https://mastodon.scot/@accudio). Special thanks to Alistair for my new favourite laptop sticker.

![laptop sticker](/_public/images/sotb-sticker.jpg)

## The Takeaway

Would I recommend attending a future _State of the Browser_?

Yes, a thousand times yes.

Now, I just have to think of what I can submit for a presentation topic for next year.

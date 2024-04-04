---
title: The Case for Slack
description: Most companies to agile wrong. My case for more slack in the system.
published: "April 4, 2024"
---

Let me know if this scenario seems familiar to you. The end of the sprint is coming up fast and you realize there is no way you'll get everything done either because one of the sprint tasks assigned to you was underestimated or some unplanned work got dumped onto your plate.

This doesn't sound like the place you work at? Congratulations, you must have some really excellent engineering discipline. However, at most of the places I've worked with company sizes from 10 to 400,000 employees the above scenario was, sadly, very repeatable.

[![Slack in the system](/_public/images/slack-in-the-system.png)](https://x.com/tacertain/status/1608220257948434432)

## Mistakes in Sprint Planning

My argument for why this happens is that we don't leave enough slack in the system when sprint planning. Most places that I've worked at include loading up developers with tasks so that every moment of their sprint is accounted for.

Using a metaphor borrowed from [Steven Covey](https://www.youtube.com/watch?v=pHR4RpxD6m0) let's think of a developers capacity to get things done as a bucket. We'll fill up the bucket with the developers big tasks (rocks), medium tasks (pebbles) and small tasks (sand). At the end of planning scrum masters pat themselves on the back when everyone's bucket's looks like this:

![full bucket](/_public/images/full-bucket.png)

Great job, high fives all around. Our devs are fully allocated, we are going to get so much done this sprint. Unfortunately, you've just set yourself up for failure. I mean, I don't know you life but pobody's nerfect.

Things always go wrong during a sprint. Some common things that can derail your developers progress include:

- Under estimated tasks
- Unplanned work
- Life (sick kid, family member, pets, etc.)

I guarantee that at least one of these things will happen during your sprint causing you to push tasks to the next sprint.

![overfull bucket](/_public/images/overfull-bucket.png)

### Unplanned Work

As an aside, the way you are supposed to handle unplanned work when running a scrum is to add it to the backlog so it can be properly estimated. However, who hasn't had their boss ~~twist their arm~~ politely ask to add a task to a sprint because it is super important. This has the unfortunate effect of over subscribing the developer and causing them to push other work to the next sprint.

## The case for leaving slack in the system

My recommendation when doing sprint planning is to leave some slack in the system. That means when assigning tasks during sprint planning do not fill each developers bucket all the way to the top. This will leave space to react to issues that pop up during the sprint like a task taking longer than expected or some unplanned work from on high.

![partially full bucket](/_public/images/partial-bucket.png)

Now you may be thinking, _"What if everything goes right? Will my lazy devs take the rest of the sprint off?"_ No, of course not. As long as you have a properly [groomed backlog](https://www.atlassian.com/agile/scrum/backlogs) developers can pull smaller tasks off the backlog in order to fill up their bucket.

![full bucket](/_public/images/full-bucket.png)

The real benefit to your system is these smaller tasks tend to be things like adding tests, refactoring or dealing with other [technical debt](https://en.wikipedia.org/wiki/Technical_debt). Normally these tasks don't get assigned during sprint planning since it is harder to justify why they are important to product owners. Leaving slack in your system allows devs to work on these technical debt issues which can only improve the resliency of your product.

Let me know what you think by reaching out to me on [Mastodon](https://mastodon.online/@macdonst).

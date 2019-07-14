---
path: "/post-thirteen"
date: "2019-07-13"
title: "Another day, another app revision"
author: "Me"
---

I spent most of today working on a podcast site for a client. Normally my process for building an app, consists of some user story concepts, some chicken scratch wireframes in my old Five Star notebook. Take that to microsoft paint...just kidding I use Adobe XD now. Mock it up as some boxes and on we go.

<br/>

Major mistake on my part here not to do that. I underestimated the complexity of managing client expectations and overestimated my ability to intepret their concept to actual design. What I really mean is they sent me a bunch of popular podcast websites to model after. I noticed that all the websites have 3 things in common, a single column layout, an audio player with latest the latest episode and a blog.

<br/>

I thought "oh it's gonna be simple". And, I made a version 1.0, with the blog and I didn't have the media files ready, but the placeholder was there. I showed that to the client and well they didn't need a blog. There goes a couple hours of my precious weekend coding time.

<br/>

Definitelly a major error on my part to not gather requirements and user stories before getting to coding. I know this too! I guess I was expecting the client to be a little more demanding about what they wanted and I guess I should have asked. But cutting corners in the beginning leads to a shaky foundation. Cliche, I know. But, it's a vindictive lesson to overlook.

<br/>

Well, I scrapped the original project and remade it. It's still using GatsbyJS and a starter template for the scaffolding. So, a lot of the complex stuff is setup for me. The starter is also using the Bulma CSS Framework. I personally try to always write my styles from scratch, but in this case I needed to check in with some progress. There's nothing the CSS framework is doing that I don't already know, it's just quicker. Man, I've got excuses galore in this post. :sweat_smile:

<br/>

Most of the work I did, includes:
- setting up the routing
- writing the graphql queries
- implementing the custom styles and assets (oh yea, I finally got the assets from his designer)
- integrating the podcast player
- setting up the RSS feed

<br/>

Took me way longer than I was hoping. I was hoping to learn some VueJS today and add that to my skills list. I'm trying to at least have an idea of the ***Big Three*** frameworks: React, Vue, Angular. Well, there's still time in the day.
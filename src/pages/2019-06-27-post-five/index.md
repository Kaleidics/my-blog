---
path: "/post-five"
date: "2019-06-27"
title: "freeCodeCamp Introductions App"
author: "Me"
---

So, today I worked on an introduction app for my freeCodeCamp meetup.

<br/>

Mostly that consisted of just me looking back at my [movie app's back-end code](https://github.com/Kaleidics/movie-backend) and trying to figure out what I did there.

<br/>

The basic idea for this app is a CRUD backend with user authentication without the Updating and the Deleting. Users go to the website and submit info like: name, title, interests and updates the introduction's `div`. Authentication is setup, but I'm not sure how I want to implement guest posts. Having a user need to register/login is another barrier to use. So, right now I'm planning to auto log a user to a dedicated pre-made guest account. So all user introductions would belong to the guest account. Obviously, I would have to prevent a user's ability to update or delete their posts or they'd have access to everyone's as well. I'll have to figure this out...

<br/>

For the most part, the [API](https://github.com/Kaleidics/fCC-introduction-backend) is done. Just gotta write out the front-end. No more time today though. Probably finish it at the meetup.
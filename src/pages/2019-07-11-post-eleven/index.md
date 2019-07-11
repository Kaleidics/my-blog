---
path: "/post-eleven"
date: "2019-07-11"
title: "Later that night...so does stuff just randomly break after a while???"
author: "Me"
---

I was hoping to get some work done on my fCC introductions app. I was building out the forms for authentication.

<br/>

I got to the login form submission and suddenly, my backend - my API endpoint suddenly starts giving me `400 Bad Request`.

What???

I built out all the CRUD and authentication functionality a couple weeks ago and tested all the routes with postman. Back then everything worked as expected:

- `/users/register` persists a user to the database :heavy_check_mark:
- `/intro/all` gives me all the posts :heavy_check_mark:
- `/auth/login` checks the POST credientials against the database and return a token :heavy_check_mark:

<br/>

No commits and two weeks later I'm getting a `400` for the `/auth/login`?

<br/>

I setup this project connected to only a remote DB on mLab, and not locally. I figured I would get something like this up fast (I guess not) and I didn't to bother setting up a local instance.

<br/>

But the first thing I did to debug was nuke my mLab DB. I cleared the documents and the indexes. Nope didn't work.

<br/>

I thought maybe I configured the routing wrong. So I created another route on the same `/auth` module.

<br/>

```
router.get("/here/:message", (req, res) => {
    res.json(`we got your ${req.params.message}`);
});
```
<br/>

Made the GET request on postman. I was hoping it would fail to be honest because that would mean I did screw up the routing, easy fix. But sure enough the GET request worked and the server got my `message`.

<br/>

At this point I'm thinking it's got to be the `Passport` library that I am using. The `/login` route uses a `localauth` middleware to handle the crediential checking. I think because of `Passport's` blackbox architecture, you can't really peer into what's happening, which makes it really hard to debug. So when it breaks, it just says something went south. Well, back to it I guess.
---
path: "/post-twelve"
date: "2019-07-12"
title: "AHA! It was Passport's fault, but also mine kinda..."
author: "Me"
---

Ok, I figured out the whole `400 Bad Request` from last time. I was convinced I had unchanged the API and yet it was still failing.
But, you know what I decided to check the [commit history](https://github.com/Kaleidics/fCC-introduction-backend/commit/92a7cc2bdfac2ad7575a7b5cb199f9349552b372) anyways and I DID change the schema.
I changed it the schema from:

<br/>

```
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
```

<br/>

to

```
const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
```

<br/>

So, the idea was the modern form uses emails instead of usernames for signing in. Atleast, that's what I've noticed. So, I decided to change the schema.

But, of course that wasn't the only problem. From the [Passport Github](https://github.com/jaredhanson/passport-local#available-options), it doesn't look like the library supports the naming of a schema property as `email`. They expect the crediential to be named `username`. Which is no problem at all, except it set me back yesterday. 

<br/>

***

<blockquote className="blockquote">
          <strong>
            <q>By default, LocalStrategy expects to find credentials in parameters named username and password. If your site prefers to name these fields differently, options are available to change the defaults.</q>
          </strong>
</blockquote>

<br/>

```
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'passwd',
    session: false
  },
  function(username, password, done) {
    // ...
  }
));
```
***
<br/>

Just had to change it from `email` back to `username`. Then, on the front end form, I already set the input field to be `email` and `required`. So all is good.
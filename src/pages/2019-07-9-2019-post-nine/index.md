---
path: "/post-nine"
date: "2019-07-10"
title: "What the heck are circular dependencies?"
author: "Me"
---

So, long day, get home, have some time to work on my fCC Introductions app. And, BAM! `TypeError: Class extends value undefined is not a constructor or null
` :dizzy_face:

<br/>

Did a few google searches and it looks like it has something to do with circular dependencies? Except, I'm pretty sure my file structure and imports are hierarchical. I even changed all my components to class components, just to check if for some reason I needed to nest class components in class components.

<br/>

And... of course just as I am writing about how I'm stuck I see that I am trying to execute the class with `class Signup extends React.Component()`. AHHH!! Basically it's supposed to be `React.Component`.

I'm starting to hate React with all its boilerplate-ty-ness. The last time I spent over an hour debugging because I was importing a named class instead of the default class after having changed the component to connect to a redux store. 

<br/>

So basically, I did `import { SomeComponent } `. Instead of `import SomeComponent`. When you're staring at these tiny letters all day, it's so easy to miss these little details. Well, I'ma add this one to the list of "are you sure there isn't a typo?" :clipboard:

<br/>

I swear the `()` and `{}` errors in JavaScript is like the missing  `;` joke in C++, except the compiler probably actually gives you proper error tracking. Here it just blows up your terminal with errors and makes you think your misusing the framework terribly.
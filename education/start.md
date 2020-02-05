---
title: A fresh new project
description: How to start a new project, important "Claims" that define things
---

Hello fellow Bornfighter!


Every once in a while a new project gets born. 

Recently there has been a lot of changes to our workflow, changes to the tools we use, the technology stack. Questions like how to start and how and where to deploy and on which environment, and so on.

All these questions are legitimate and hopefully this blog post answers the most important and frequent ones. Consider this as an extended FAQ.

## Claim #1: All projects exist in their own separate repository

Our current GitHub payment model supports up to 125 repositories. We are currently using 50, but don’t feel pressured by this. When we get to 125 we will progressively increase this limit until eventually it will be financially better to adopt a unlimited repo payment model.

You shouldn't worry about what github payment model we are using and who to ask. 

Open a fresh repo for a fresh project.

This doesn’t mean that you should port all legacy projects that were in a mono-repo architecture to this new single-repo architecture, oh no that would be too much trouble. 
But you are of course free to do so if you really really want to.

This also doesn’t mean that every project should be it’s own repository. 
It is quite possible that we will still have a single, catch-all mono-repo for quick and small projects. 
These topics are all up for discussion and you are welcome to contribute with your ideas and experience.

But for the most part:

> You can safely assume that every new project that needs it’s own repository can always get it’s own private repository

## Claim #2: New projects use Symfony 4

The time has finally come! Ladies and gents, the moment we all anticipated and secretly desired is here.

    We are abandoning Yii2 as our primary development framework and going with Symfony 4 for new projects.

What does this mean in practice?

* There is no more yapp-framework/middlework
* New projects will be their own single composer project, with their own dependencies, scripts, deployment, etc.
* Every new project that is created should be created as a Symfony project, please see https://symfony.com/blog/symfony-4-a-new-way-to-develop-applications and https://symfony.com/doc/current/best_practices/creating-the-project.html or our education  on Symfony by Tomo Šala, who covers the subject of setting up your project in Symfony.
* Basically it boils down to running


```
composer create-project symfony/website-skeleton my-project
```

Every project will have it’s Jenkins hooks set up nicely and properly. This way every PR gets a free review from Jenkins.

Ok, so what does this NOT mean?

* This does NOT mean that you are required to migrate existing Yii2 projects to Symfony
* You are of course allowed to, but you must be able to guarantee that the migration is bug free (friendly hint: you will never be able to satisfy this guarantee, so don’t even try)

## Claim #3: Vendor folder is ignored from version control

The reasons for this decision are known to everyone by now, but you need catching up check https://getcomposer.org/doc/faqs/should-i-commit-the-dependencies-in-my-vendor-directory.md 

There are of course use-cases when it is applicable, but we have surpassed them and it’s time for a change.

## Claim #4: All the changes we are doing affect only future projects

No one in the right mind would waste time migrating old projects to this new worldview.
 
Sure they are old, legacy and fujpuj – but they kinda work and that’s most important. 

Changes to them are infrequent and we can live with the technical dept they have accumulated. Just let them die out slowly.

#### Please do not waste time applying these new methods to old projects. You are not required to.

## Claim #5: Yapp repository is deprecated

A lot of times I hear fear and doubt that this will not be applicable to “yapp” repository. 

Please listen closely:

> Yapp repository and the way we did things before is deprecated. None of these changes affect yapp projects in any way. They literally don’t touch them.

## Claim #6: What you use for local development is irrelevant and totally up to you

You can use docker if you wish to, or you can brew install every service you need. Heck, you can even compile the services from source if it tickles your fancy.

You should also be able to have the liberty to choose your own domain when developing. Forcing .loc or a specific domain name is considered bad practice.

Projects should be created in such a way that this is never coupled, and always leave free choice to the developer how to develop

## Claim #7: Remember not to push to master

Even if you need a emergency hotfix, go through a PR. No human needs to review it (but if they have the time to, that would be awesome), but Jenkins will at least run codeception tests and static analysis to catch any stupid syntax errors.

If you are pushing to master, you are basically avoiding Jenkins safety net, and remember Jenkins is here to help you. It is for this reason that you will not be able to push to master, so don’t panic.



## In conclusion

The list is a bit long, and some of you will think: “Oh, but I already know all of this”. That’s ok, but if at least one person learns something new then the list was successful.

There are for sure more misconceptions that need to be addressed by claims, and if you can remember any please open an issue and the list will be updated

Link to original [blog post](https://deghq.com/wordpress/devedu/when-starting-a-new-project/)🔒

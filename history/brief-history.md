---
title: History
description:  Where we were, where are we now?
---
# Bornfight dev history
This is a ~~short~~ story dedicated to the whole story of who we are, how we got to where we are, and how we evolved through the years.

## How it all started
It was the year 2009, and 2 very interesting individuals [Tomislav](https://www.linkedin.com/in/tomislavgrubisic/) and [Daniel](https://www.linkedin.com/in/ackermanndaniel/), that had forum for gathering students in one place, as a community, needed to get the word out about an event they are organising.
When it came to advertisement in those days, it was not an easy (nor inexpensive) task.

In comes facebook, facebook pages, and the likes.

They tried to see if they could use it to promote the event. The results were magnificent to say the least. With a very small budget, you were able to reach thousands of people, and target them by using the information they have on facebook, meaning you could get just the right crowd.

At that moment, they saw the potential of how this could work in the future, and started their entrepreneurial quest.

## iSTUDIO
[iSTUDIO](http://web.archive.org/web/20101110033651/http://www.istudio.hr/), the company was formed, that would later produce many more companies, has come to life. 

At first, it was based on community management and finding the right way to place companies and clients on the platform, but very soon, the need for custom little apps, sweepstakes and all other kinds of different facebook applications focusing marketing purposes came to life.

Everyone wanted a facebook app, everyone NEEDED a facebook app. We were there to be the one that will produce one for them.


In the early days, they hired [Tony](https://www.linkedin.com/in/tonymrakovcic/) as someone who will get entangled into the SDK and API of facebook, learn how it works, and be able to produce high quality facebook application for different needs and types of clients.
One app grew to two, two to five, and we were on a role with both experience and insight as to how the inner workings of facebook based development functions.


This was all done in php/mysql, and a lot of facebook based SDK stuff, think fql, tabs, facebook publishing api, and a lot of other, now mostly dead or deprecated dev tools facebook had to offer :)

Keep in mind, this is 2009, PHP frameworks were barely a thing. Most of our development was one off frameworkless design.

One day, we got a request for like 3-4 apps at once. Being a team of 1-2, it was very hard to copy paste developer these kinds of thing. We started to investigate on what framework we could use to help us out.
Nothing really stood out, since we had almost 100% of our projects using a really specific flow, and a bunch of features in literally every app (think fb login, auth over tokens, most requests through POST, tabs that are generated fbml, etc) that are not supported well with frameworks.

## Say hello to App Framework!

We decided to postpone a few apps for a while, at that time meaning instead of the launch date being monday, it was going to be 2 mondays away. So it wasn't that bad for the projects.
In this week or two, we decided to make ourselves a little custom framework we could use for our type of projects.
The initial 2 week version supported the basic, most used stuff in our every day life, but grew to a serious fast track app building framework, in which for a new social network app, you could create a new project with a load of functionality in a matter of minutes.

Some of the things every app when you created it had out of the box just so you get a feeling:

Facebook login

Friends lists

Interapp reasoning ("I see you played one of our games with your mate Dave, invite him here and get 5 coins"

A internal sdk for FQL (Facebook Query langage, yes, that was a thing - you could do "select user_id from like where user_id in {not_my_friends_ids} and post_id = {my_posd}, it was fun)

Internal SDK for FBML (facebook markup language, this one is even older)

Close friends algorithm

Some workarounds around common fB SDK problems

A developer based setup so it's easy to work with multiple apps at once

Pre made templates for people, users, and flows needed

Integrated stats and graphs

Pre made templates for database structures

Anti-cheat implementations (this was a big issue back then, maybe is now too)

a lot of other things...

Of course, as with most custom in house frameworks at the time, the biggest pain point was onboarding new people, the lack of documentation, the lack of automatic tests, and of course the pain of having to maintain it and fix all the little bugs and quircks around it.
But, we pushed through it, and made the most of it.


We used this framework for about 4 years, and I believe we it was a good run :)


It was obvious it was time to move on. 

Our projects started to look more like websites, and less like facebook apps, and we started to feel that we are getting hindered by the fact that it is mainly developed for making facebook apps fast.
We felt it was clearly the time to switch to something bigger, more evolved, and something that is developed outside of our little team.

## In comes Yii
We get this question a lot - "How come you chose Yii??" , and it's not a difficult one. At the time we had a team member that was very proficient in Yii, had made a lot of projects using it, and was able and ready to teach us how it works from start to finish.
That sounded like a good enough start to using something that is not our custom pile of code. It was a transition, I must say, new patterns, new bugs, new mindsets, but we managed and were steadily on our way to new methods of developing projects.
Since we are still developing facebook apps (maybe not at the pace from the start, but about 30% of our project were based off facebook and social media) we developed a small middlework that could use all of our plugins that hacked around facebook's features.

The middlework was called [iframework](https://github.com/bornfight/iframework/) 🔒, and it is actually still in our organization as a repo. Since it is very hard to pinpoint if it could be open today, it is a private repo, maybe this will change in the future, for now - sorry non-Bornfight readers :)


Yii is nice framework, it served our needs at the time, and in a year or 2, Yii2 ,a complete rewrite came along, which we grabbed instantly and made a new transition, from yii2 to Yii2. That wasn't so hard snice a big part of the mindset the framework uses stayed the same, and only the syntax of stuff, and "where stuff lives" changed a biit.
At this moment we are up to about 10ish members of our team, onboarding is much easier due to the fact that we are using something new and open sourced and things are looking good. Projects are going, dev is moving fast.

## Degordian is born
iSTUDIO rebranded at about this point in time, and became something bigger, focusing on global clients and trying to move a bit away from development based on supporting marketing. We wanted bigger, intriguing, focused projects where we could develop as developers and as a team.
At this moment we outgrew Yii1 and switched almost completely to Yii2, producing our third middlework, [yapp-framework](https://github.com/bornfight/yapp-framework) 🔒 (looking back we were really terrible with names)! Still closed, yeah :)

The main point of this framework was a bit different. 

Since we had a lot of little projects instead of 5 big ones, and by a lot, think about 10-20ish monthly, we needed something that could move fast, without hassling developers, being easy to integrate with design and frontend, and just be reliable when you need it.
The idea was to save both time, disk usage, time to first line of non boilerplate code, and deployment flow time to an absolute minimum. 
Deploys were happening hundreds of times a day, new projects were starting every few days, so things like that needed to be easy, useful and fast.
Yapp-Framework was designed just for that.

The idea was simple, have all the boilerplate code dislocated to a specific location, and all other apps/project "extend" from it.

They use all the same libraries and dependencies (composer deps were baked into git, not the perfect solution but it seemed like a good idea at the time, and actually kind of worked)

They use the core.

You can update ALL your apps core code with one deploy. This is both good and bad, it was mostly good for our use case.

You can have a development setup, which can be simply shared by developers. This was done by convention but still, it worked.

You can have a lot of code and app generators to get you quickly started on your way to a new project.

All the apps followed the few simple rules that we defined, and it is very easy to find your way in someone else's code.

#### The pain points were :
We needed to have an "update framework day" where we updated dependencies.

All the apps were severely coupled to the framework, and when their lifecycle reaches the "we need to make this outside the fw" it becomes a project of its own.

A bit of a problem with docs as usual, but not that bad, since we had the main documentation for this, but not the quirks.

Shared dev environment - everyone needed to make a static.loc domain locally, a yapp.loc locally, and a few other things like that. Since the middlework used this internally, you had to get it set up the way it wanted, this was well documented, but still we always had a bit of a hard time with that.

Shared repo - Due to fast paced projects and the shear volume of them, we decided to go with a mono repo setup, meaning, every project was in the same repo, and located it its own folder. This was practical at first, since projects didnt have the need for their own dependencies, but after a while became a problem to manage.


Yapp-Framework was probably the most used in our development history. 

We still have a few projects that are active on that framework, but most of them were extracted separate repos through the years, and are now living the glorious life of package management and continuous integration and deployment with all the perks :)
Somewhere on here, are projects started to get even more complicated, we started moving from websites and small products, to big products, platform development, some startup mvps, a few mobile apps here and there, and that kind of stuff.

Things were getting much more serious and we were always hiring new people.
The problem with this kind of custom middlework stuff is that people are rarely intuitively attracted to it.
It takes a while to learn, there is no way you can know it before you come to the company, you have to educate your new people thoroughly.

The other thing is since Yii2 is not the most popular framework in town, some people use it, some never heard of it, some are distracted in a "Why use something no one uses" way.
I get that, but still, when trying to build a successful team one must always try to mitigate these things, and solve your pain points. This was one of them at the time.


About around this time, we got a big new project, that had to be ported to a new environment, rewritten completely from scratch. Due to the speed requirements, the asynchronicity and the volume of users in real time (it was about 5 million users, going for 10 million), we made a decision that PHP was maybe not the tool for the job.
We decided to start learning nodejs which seemed like the right fit for the job. [Couchbase](https://www.couchbase.com/) as the database, and [rabbitMQ](https://www.rabbitmq.com/) as the message handler.
It was a great decision and the system stood on its own two feet. The actual process of deeply learning a new language was also a big win, to see all the new ideas, new trains of thought and new approaches to problems was a bit eye opening. Just to mention, we were all fairly involved in some frontend javascript, and had a few people that were backend js ready. So that helped a bit too.
This was great in a lot of ways, we had a new type of project we could do, we had anew language and ecosystem in our tool belt, and people were motivated with the fact that the dev team was not that closed when it comes to what to use to solve a problem.

Because, in the end, I feel we are all just solving problems, and using programming languages, and frameworks, and libraries and apis, as tools. 


Time went by, new projects came in, a lot of different projects came in. 

We started deeply dabbling with javascript, started using typescript, can't live without it now. Used kafka on a project, saw the immense magnitude that can be done by that beast.
Made a whole part of a [crypto currency platform](https://www.bornfight.com/work/digital-assets-power-play/) around it. We actually got a huge project that is focused [museum app interactive development](https://ascc.bornfight.com/), which mostly uses nodejs for communicating with sensors and other computers.
Our scale and number of mobile applications grew quickly, and our mobile team grew fast.

We had to start to think in API first terms, clients that consume stuff, and that things needed to be tested, linted, code reviewed and automatically deployed.

If you're interested, here's a [list of some of the most notable projects](https://www.bornfight.com/work/) :)

Basically, things started to escalate quickly. And there was a feeling our PHP life isn't keeping up.

## Bornfight has arrived

We have long shifted from development that is supporting marketing purposes at this point. Internally we had made the switch a long time ago, but the "front facing" part we didn't really pay attention to.
People were still perceiving us a "Marketing agency", which we definitely were at one point, but now this simply is not the case. We needed to change this, as we are tying to constantly grow, and this would surely affect the interest of people, especially if the perception is completely false.

We decided to rebrand ourselves. 

To create a new brand name, a new philosophy, a new website of course and completely leave behind our marketing legacy.

We started to communicate stuff we're good at, that people didn't even know we do, stuff like mobile development, API platforms, data crunchers and stuff like that. Basically fully custom software development.
Do we make presentational websites ([that win a lot of rewards](https://www.awwwards.com/Bornfight/))? Of course we do, we have a dedicated Wordpress team that mostly handles those kinds of project. 
They develop their own themes, follow WP standards, and try to implement everything the best way possible.

Do we have small projects? Of course we do.

Do we have legacy projects? Yes we do, we are not ashamed of a old project that was once on the peak of its abilities, but time flew by.

But do we strive to make new, big, motivating project, using all the new shenanigans? This is our goal!

And for this in comes the new PHP framework we chose when we decided to leave Yii2 behind, good ol' [Symfony](https://github.com/symfony/symfony).

All new projects had a cutoff (as we did in the past), after which is it forbidden to make a new project on the deprecated framework. In this case Yii2.
The same goes for onboarding people. We stop activelly educating about the framework we left behind, and start active educations about the new framework we switched to.

Symfony was a mouth full at first :)
It definitely has an interesting learning curve, which was a lot at the start. We could have done things differently, both in terms of education, and organization, but we prevailed :)
We now use Symfony for every new project, and it works for us. Mostly because of the lifecycle of the type of projects we have today. Long lasting, tested, ever growing, and it has to be easy to onboard new developers.


## We are at today
We'll try to keep you posted :)

 

















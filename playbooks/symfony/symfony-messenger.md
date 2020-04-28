---
title: When to use a Symfony Messenger component 🚚
description: A brief guideline on when to use a Symfony Messenger component
---

Symfony Messenger is a very powerful component that allows you to implement some level of concurrency in your
PHP/Symfony projects that are usually non-concurrent.

More info about it can be found in
[official documentation.](https://symfony.com/doc/current/components/messenger.html) A really nice tutorial can be
found on [Symfonycasts.](https://symfonycasts.com/screencast/messenger) And we also have an internal education
recorded from Week #48 (if you don't know where to find it, contact your nearest team-lead).  
If you are wondering how to notify the client when concurrent job has been finished, take a look at  
the [Mercure protocol and Symfony Mercure component](https://symfony.com/doc/current/mercure.html)

### When to use the Messenger component?

If you are here because you want to know should you use the Messenger component, go through the cases below, and if
your case matches any of it, you have the green light ✅.

#### There are two general cases when you might want to use Messenger component:

1. You would like to have your scripts running concurrently.
    1. Your software is sending requests to the 3rd party API and you don't want to wait for the response.
    2. Your software is doing some heavy-duty processing, and you'd hate to leave the client waiting for the
       response.
2. You would like to have the finest of the synchronicity possible.
    1. Your software is sending requests to the 3rd party API, but you have no control over the order in which the
       requests are being sent - i.e. one request might still be waiting for the response, in the meantime, another
       request has already received its response

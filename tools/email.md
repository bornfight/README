---
title: Email
description: Tools and services used that are somehow related to sending and receiving email
---

We use [Postmark](http://postmarkapp.com/) for our "from-code" email sending.

To use it on a new project, create a new server on [this link](https://account.postmarkapp.com/servers) named like
the project(eg. Blackbox) and generate an API token so you can use it in your app. Add the token to your env file.

For development purposes you can freely use the
["apps.interaktivni-studio.com"](https://account.postmarkapp.com/servers/29060/credentials) server.

To be able to use a "from" address, you must first verify it by adding a "sender signature"
[here](https://account.postmarkapp.com/signature_domains)

If you need the ability for someone to receive a simple email now and again, that is on a new domain or does not
have an email service by default (eg. info@blackbox.com) you can follow
[these instructions](https://deghq.com/wordpress/devedu/simple-email-routing-info-emails-and-similar/) that use
mailgun as a provider to do so.

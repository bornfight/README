---
title: Estimates
description: Things to think about when estimating a project/feature
---

# Some ideas what to think about when estimating features and projects

## Set the project into one of these types        
Simple WP<br>
Complex WP<br>
Custom project from scratch, web based (website, complex dashboardy product)<br>
Custom project from scratch - non web based (data cruncher, api only)<br>
Something new and exciting we never did before?<br>

## Users:
Can users log in?<br>
Do they have different roles?<br>
Do roles have very specific features or complexities? (eg admins that cannot see everything, different login pages, etc )<br>
Can users register by themselves, what is the flow?<br>
Can users register with social connect features (fb, twitter, github, google, etc)<br>
Can the user change their settings/profile?<br>
Are there different types of public users? (student/teacher, merchant/buyer, etc)<br>
How many users do you expect, on a weekly or monthly basis?<br>
Is there a public user list? (online users, top list, etc)<br>
Are the users grouped in some way (groups, invites, lists of "users that have done action x"<br>
Do users have some kinds of relationships? (friends, selected people, itd)<br>

## WordPress:
Do we have multiple admin types?<br>
Do we need to make a plugin that doesn't exist?<br>
Does the project need to have an API?(will mobile consume it for instance)<br>
Are we buying a theme?<br>
Does the project have an actual blog?<br>
Can we use plugins we use on other projects?<br>
Is the project going to be hosted on our infrastructure?<br>

## Search:
Do we have a search feature?<br>
What is searched?<br>
Can you filter the results<br>
Can  you paginate the results<br>
Do the results depend on location? (closest etc)<br>

## User generated content:
Is there any user generated content that will be available to the public? (image/video/text uploads)<br>
Do users have profiles?<br>
What needs to have an email notification?<br>
Does any content need to be approved first?<br>
Does content have additional entities attached to it (comments, likes, stars, tags, favorites, etc)<br>
Do users interact? (chat/top lists/messages)<br>
Can users create things that are later dependant on each other and need to do something time based?(calendar events, weekly reports, etc)<br>
Do we collect data? (careers page, sweepstakes, contests), what is collected?<br>
Can users add something location based? (add restaurant, info about store, etc)<br>
Is there anything that changes, that is tied to a logged out user? (favorites, what page you came from, read articles)<br>
Do we process images, video, etc?<br>

## Ecommerce:
Is there a concept of a "buyable item"? Something users can choose and purchase? <br>
How many different items exist?<br>
Can you customise an item? (color, size, etc)<br>
Are there things that edit the price? (promos, vouchers, etc)<br>
What payment system will be used?<br>
Are we using an external checkout/cart or is it on site? (shopify, woo, etc)<br>
Is there a "warehouse" concept, that requires to sync with actual availability of items in the store?<br>

## Data:
Do we gather information from another website?<br>
Do we need to consume someone else's API?<br>
Do we need to send info we have to an external service? (for processing, for publishing, someones internal system, etc)<br>
Does the project need an API that will be consumed?<br>
Is the project multilingual?<br>
Does the admin panel need to show any stats or aggregated information?<br>
Are there static pages that do not have to be CMS based?<br>
Is there any live data? (streaming, live charts, online users, etc)<br>
Does the project have a notification system?<br>
Is there anything that happens on a time basis? (every monday, every odd morning, once a month, etc)<br>
Is any data hidden or shown based on some restriction? (age, location, time, etc)<br>
Is data in the project compared to each other? (prices, stats, history, etc)<br>
Do we need to save historical data? (graphs, revisions, historical data, etc)<br>
Is there a concept of progress?(40% of profile activated, finish your setup, etc)<br>
Is there an enormous form involved? Is it multi-step?<br>
Is there any specific weird validation on any field?<br>
Is there a gallery, or similar view collection that needs to be aggregated?<br>
Is there an undo feature?
What fields have auto suggestions for values?
    
## Notifications:
Is there a big notification system?<br>
Does a specific user get a notification? Or just admins?<br>
Can notificatonis be grouped? (user a, b and c have liked your comment)<br>
Is there a push feature to web or mobile?<br>
Is a push triggered by a manual action (admin publish)<br>
Is a push triggered on any user action? (comment, like, etc)<br>
Is a push triggered from any other context? (time, number of something, random, etc)<br>
    
## Reports:
Does the project have any kind of reports?<br>
Who are they sent to?<br>
When are they sent?<br>
Are there any condition for sending the report?<br>
What is the report format? (xls, pdf, csv, jpg)<br>

## Misc:

Does the project display ads?<br>
Does it have an external ad display system?<br>
Does it have multiple domains/subdomains?<br>
Does  the user see anything different depending on where he came from? (utm, ads, cookies, etc)<br>
Are there "related" lists? (similar content, recommended, etc)<br>
Is the content rated in any way? Does it affect sorting?<br>
Is there any kind of special sort type? (admin sort, time based sort, etc)<br>
Is there any special alert mechanism? (50k users just read x, send an email, etc)<br>
Is there an anomaly detection system? (a lot of people purchasing from country x, alert admin)<br>
Is there any downloadable content? Are download stats required?<br>
Is there any system in the project, that already exists or is very similar and can be used? (mailchimp, firebase, etc)<br>
    

## Migrations:
Does the project already exist? Link please. <br>
Do we need to migrate existing data?<br>
Are we migrating systems the same?<br>
What data needs to bbe migrated? <br>
What data does not need to be migrated? <br>
What data can be manually inserted?<br>
What data has to be programmatically inserted?<br>
What links have to be the same? (seo, etc)<br>
Is there any special logic behind redirecting any old->new links?<br>
    
    

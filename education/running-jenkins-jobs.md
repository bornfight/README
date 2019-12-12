---
title: Running Jenkins Jobs and Deployment
description: How to trigger builds manually 
---
###  Running Jenkins Jobs and Deployment

Most Jenkins jobs run automatically, as a result of a Github webhook notifying our Jenkins server that there has been some change to the repository. These changes can be “new commit has been pushed”, “new PR has been opened”, “new branch has been pushed”, and similar. 

The idea is, “if new code gets pushed to origin (Github), run the jobs again”.

But what if you wish to trigger a build, and not push anything new to Github? How to run builds on demand?

Until we switched to Declarative Jenkins Pipeline (the Jenkinsfile found in the repository root), this could have only been done by writing a Github comment “rerun tests”. This was a limitation of an old legacy Jenkins Github plugin we were using. This generated lots and lots of email notification noise, but there was no other way.

Luckily, sometimes last year a new Jenkins Github plugin arrived and we ditched this old Jenkins Github plugin, and started using a new one. This new plugin gave us much much more possibilities.

Now in order to rerun a Jenkins job, you need not to write comments in PR sections, all you need to do is run the job in the Jenkins UI. Here is a step by step tutorial.

* Step 1: Log into [Jenkins](https://jenkins.deghq.com)🔒 using your @bornfight gsuite account.

* Step 2: Find your project in the main dashboard view.

* Step 3: Inside your project folder, there could be a number of jobs – but the one you are most probably looking for is named “CI”. On projects that have separated backend and frontend repositories, Jenkins will have “Backend-CI” and “Frontend-CI”. There are all just folders that hold your project jobs. Some smaller projects do not have this intermittent folder and they lead you straight to the project jobs that you are looking for.

* Step 4: Here you see a list of all branches and Pull Requests. Branches which are currently part of a pull request will not be visible here (to reduce clutter), but they are visible in the Pull Requests tab.

* Step 5: Either select the branch you wish to build, or find your Pull Request in the Pull Requests tab. This will trigger the build and automatically notify Github about the new build status. If it passed all tests, Github will allow your PR to get merged. Hurrey!

So this is how to manually rerun jobs.  [Jenkins](https://jenkins.deghq.com)🔒 is your one stop shop for all your building needs.
But what about deployment? How to do deploys?

Well, if your project has an integration (or sometimes called development) environment – then your project gets automatically deployed whenever you merge changes into master branch. This is called Continuous Deployment. If for any reason a deployment has failed and you wish to rerun it, you now know how to do this through Jenkins UI (there is no need to you to push new code to master to trigger a build).
And other environments?
 
Like staging or production?

Well, these kinds of deployments are not done automatically. They are deployed through Github releases and tags. This is called Continuous Delivery.

* Step 1: First you need to tag a new release on github. Version numbering convention is a topic for a different blog post. We can go for SemVer or use Sprint numbering (sprint #1 can be v0.1.x, sprint 2 v0.2.x, product release is v1.0.0, etc).

* Step 2: When you publish the release on Github, you need to find your project again on Jenkins UI (see first part of blog post on how).

* Step 3: Click on Tags tab (next to Branches, Pull Requests)

* Step 4: Find the latest tag you added, and click Run

* Step 5: Sadly, due to a Jenkins bug – you need to stop the First build. Much like the first pancake, it has to go in the bin.

* Step 6: Refresh the page and rerun the build. This time Jenkins will ask you where do you wish to deploy the tag. And you select either staging or production, depending on what you want.

If all goes well, you will see the build status result on Slack, channel [#internal-jenkins](https://app.slack.com/client/T8X55NL6M/CBWKPS5QW/thread/C8XQT249K-1573484297.001200)🔒 and on the Build monitor on the TV next to Rudi. We are working on a way to reduce steps 5 and 6 into a single step, but progress is slow as we are dependant on Jenkins developers to first fix the issue.

Hopefully this clears things up a bit, please leave a comment, smash that subscribe and let me know if this post helped you out, or left you with even more questions marks over your head than you started with.

Until next time, this has been your friendly local quality assurance.

This is another is a series of Jenkins devedu blogs posts to help you with your daily development. You can find other related articles by using the [search bar for Jenkins](https://deghq.com/wordpress/devedu/?s=jenkins)🔒 

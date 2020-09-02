---
title: Frontend
description: Tools used in frontend development
---

## Component hierarchy diagram

The diagram represents a sort of "blueprint" that shows us all the components and relationships between them. I found it helpful when they were spread out by screens because it was much easier to see what has been already done. It should also be as simple as it can be (without redundant information like props) to ensure it's updated easily.

![Component hierarchy diagram](https://i.imgur.com/5WIn9h4.png)

This is an example of a "Home" screen for an app. We have a _wireframe-y_ component composition and we can actually see the relationships between them.

#### Reasoning behind it
The idea of having a component hierarchy diagram should help us out when multiple developers are working on a single project. Admittedly, it is a bit more work and planning upfront, but it should allow even new developers to be quickly onboarded in the codebase. At least from the architectural side of things. It's very important that it's defined when the project is in the planning phase. After we're aware of what the app should do (and we have a wireframe to back it up), we're in a position to create the component hierarchy diagram.

#### Refactor is necessary!
The blueprint shouldn't be blindly followed, but used as a guide when architecting your app. If there is a chance for a better naming/composition, feel free to do it, but make sure the change is reflected in the diagram. It is of utmost importance the diagram is always up to date.

#### Placement and creating the diagram
The best place to have a reference to this would be in the README of the project we're currently working on, so it can be easily viewed. Since it is only useful to frontend devs, it's not necessary to have it in a more "public" place. To create the diagram i used [diagrams.net](https://diagrams.net).

#### Automation
I have thought about automating at least a part of this, but it's difficult to achieve this. The diagram should be created in the planning phase, when no code has been written. Any diagram generation from an existing codebase wouldn't make sense since it would generate an incomplete diagram until the very end of the project.

Having two diagrams at the same time, one being the current state and the other one being the final state, made no sense at all because it would still require you to update the final state manually.

So if no other ideas pop up, no automation will be present for this.

#### Additional notes
Some discussion happened on [an article](https://dev.to/bornfightcompany/component-diagram-for-frontend-apps-2037) related to this, to ensure we weren't taking this too far and to confirm it makes sense.

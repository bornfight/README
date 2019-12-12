---
title: Metaphors and examples to explain abstract concepts
description: Real-world examples as metaphors and as bi-directional links to explain concepts
---
## Metaphors and examples to explain abstract concepts
In software engineering and computer science there are many complex and abstract concepts which are difficult to understand and even harder to explain.

To help me understand and explain these concepts, I use real-world examples as metaphors and as bi-directional links to explain concepts between abstract and real world domains.

Real world examples are concrete and can be easily visualised in the mind. You can explain intent and motivation in real world examples, you can rationalise and debate decisions. This helps to engage the person you are talking to into already starting to understand the concept, while still not talking about it. This is an important first step.

The algorithm I use would be:
1. The requirement is to explain an abstract concept (for example: a framework)
2. Ask yourself, what are the core concepts behind this idea? (why do we use frameworks, what problems do they solve, how is one created, etc. etc.)
3. Find some real world example that solves or answers the same questions as point #2
4. Explain the real world concept, this must be something the listener is familiar with
5. Explain the links between the metaphor and the real world example

The quality of the metaphor is a measure of how good the bi-directional link holds up.
For a bad example, if you say “A framework is like frozen pizza because frozen pizza allows you to rapidly solve your hunger issues” this is not a very good metaphor, because there are many counter-examples as to why frozen pizzas and framework have zero things in common. And only a small subset of frameworks are used to solve issues rapidly. This is a bad metaphor.

Today I was out foraging mushrooms and I got a great idea for another metaphor. 

My foraging team was composed of myself and two more foragers. One forager was greatly more senior that the other two and he proposed a breadth based search strategy. Each of us scattered to a couple of meters apart and started searched. This way we covered most ground, but could unintentionally leave some mushrooms behind, because if as a single individual do not see the mushrooms – no one else will. This strategy proved very good, because mushrooms proved to be clustered around. Once you found a single mushroom, you could be certain that within the same meter or two there would be more.

My strategy was that we checked depth-first in a single-column. This way if one person did not spot a mushroom, the second or third person would be a safety net. This strategy sounds good, but would not give good results since you would cover less ground in the limited time you have, and the risk of not spotting a mushroom proved to be very small, and no point in managing small (unlikely) risks.

The gist is that abstract concepts and real world examples can have the same underlying idea that solves a problem. If you manage to extract what this common denominator is you can easily help to understand or to explain abstract concepts.

Software testing and quality assurance are like this, and now I will explain the bi-directional links. 

When doing software testing, you are always time-boxed, because you are always on a budget. 

Within this time-box you are trying to maximise your gain, the quantity and quality of bugs found. One strategy is to focus heavily on a small subset of the product, one which you believe to be of great risk of bugs or which is of high business value. This is like foraging in depth. The other strategy would be to do a general sweep of the product. 

This will result in lower yields, but a better overall product health.

Things get interesting when you have multiple testers included in the test run. 

Testers are human (believe it or not!) and have their unique personalities when doing testing. If two testers are or similar personalities, sills, traits or other qualities – then their testing yield will always be a “depth-first search”.
 
 The first tester can scan the entire product, but when the second tester scans he can find things similar to the first tester (things he perhaps missed). But the second tester will rarely find radically new bugs. This is why having a wide-testing team is very healthy when doing testing. This way every tester will cover some portion of the bug-hunting field with his specific skills. One tester might be very well versed into security, the other might have a very good eye for design principles and details, etc. etc. 
 
 This way you will have a good bug “breadth-first” searching strategy, just like in my metaphor

Link to original [blog post](https://deghq.com/wordpress/devedu/metaphors-and-examples-to-explain-abstract-concepts/)🔒

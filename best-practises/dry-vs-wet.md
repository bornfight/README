---
title: DRY vs WET
description: On reusing code and determining right time for abstraction.
---

[DRY(Don't repeat yourself) principle](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) is a principle of
software development aimed at reducing repetition of software patterns, replacing it with abstractions or using
data normalization to avoid redundancy. **(source: Wikipedia)**

Oftentimes, this principle helps us in achieving maintainable and readable code. A contrary to this principle is
WET(Write Everything Twice), which describes code that is repeated without abstraction.

We could instinctively adhere to DRY principle and try to abstract everything as we go. This has some potential
pitfalls. Abstracting code too early may lead to harder to maintain code because we may not know all the
requirements at the beginning of writing a feature.

In general, copying code in the early stages of implementing a feature could be beneficial. It may reveal us
certain details about the feature that we may not consider while abstracting too early.

When considering abstractions, we may follow a small checklist which can help us in detecting if code is a
candidate for abstraction.

# Checklist for determining candidate for abstraction

-   is code repeated for 2 or 3 times in a similar way?
-   can we test it better by abstracting it?
-   can we write a feature faster if it's abstracted?

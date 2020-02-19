---
title: Styling patterns
description: Patterns for creating scalable, maintainable and consistent architecture
---

1. Avoid using (S)CSS in non-presentational components
    - if you need to override some styles, expand or modify the presentational component
2. Create small components that encapsulate their styles
3. Create styling modifiers as props, avoid using global css classes

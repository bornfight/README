---
title: Automated testing
description: Methodologies for integrating tests as a part of the development cycle
---

## Tools

- unit tests -> [Jest](https://jestjs.io/)
- integration/e2e -> [Cypress](https://www.cypress.io/)

**Setup**

- setup depends on the type of project, but for create-react-app & vue-cli these things are preconfigured

## Principles

### TDD

- write tests first, but **one by one**
- testing is often impossible if we take the Top Down approach (implement, then test)
- unit testing should help you develop something, this is not really important for QA / test

### How to determine what to test

**Reasons for not testing:**

1. time constraint
2. not needed (manually tested, simpler project/feature)
3. lack of importance
4. lack of knowing what to test / how to test
5. hard to setup

**Solutions:**

1. include a buffer into estimation
   - **prerequisites**:
     - knowledge of how much time the testing will take
     - knowing what to test
     - effective and out of the box setup (vue-cli, create-react-app, tsdx)
2. define what is important to test upfront
   - **prerequisites**:
     - knowledge of different test types (unit, integration, e2e)
     - defining modules for extraction (libraries) which would benefit other projects. in this context testing is
       more valuable
3. everyone in the company/team knows the value of testing
   - tests can increase code correctness
   - tests can make you help deliver good features faster
   - tests improve and encourage collaboration
4. internal educations / workshops and practice
   - testing is **hard**
   - good testing is even harder, **but**! after some time testing comes second nature and it actually helps you
     deliver particular feature faster and more correct
   - talk to colleagues if you need help in terms of setting up tests / defining what to test
5. set-up boilerplate for testing
   - react, vue have their own
   - prefer [tsdx](https://github.com/jaredpalmer/tsdx) if creating a library

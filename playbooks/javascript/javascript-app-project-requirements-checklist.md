---
title: JavaScript app project requirements checklist
description: A checklist for setting up JavaScript wep app projects by Bornfight standards.
---

-   [ ] TypeScript

    -   e.g. https://github.com/reduxjs/cra-template-redux-typescript

-   [ ] Separation between presentational and business layer

    -   not all components need to be connected to stores, backend API or some other service
    -   by making components "data source agnostic", reusability is greatly increased
    -   prefer
        [feature-based architecture](https://reactjs.org/docs/faq-structure.html#grouping-by-features-or-routes)
        with emphasis on separating the business/presentational layers, if the project allows it

-   [ ] Using a standardized way of accessing the API
    -   [rest-hooks](https://resthooks.io/) is a great example of this principle as it encourages a predictable and
        readable structure for API calls
    -   for some projects, using explicit fetch calls may be sufficient, but if you're dealing with a lot of
        resources and relationships, having an abstraction over backend API can be helpful
-   [ ] Having a common user input strategy
    -   forms, select tags, validations, error states all fall into this category
    -   UI component libraries such as antd provide a solution for this out of the box
    -   if you're creating an app without a UI library, consider putting a bit more emphasis on standardizing these
        elements for better UX
-   [ ] Automated unit, integration and e2e testing

    -   Cypress for integration and e2e testing of components
    -   Jest for unit testing of logic

-   [ ] Code coverage reporting integrated to PRs

    -   e.g. https://codeclimate.com/ or https://codecov.io/

-   [ ] CI/CD Environment
    -   automatic build of different environments (dev, staging, prod)
    -   recommended stages:

        -   build
        -   lint
        -   unit tests (Jest)
        -   integration tests (Cypress)
-   [ ] Storybook

    -   https://storybook.js.org/
    -   great way to collaborate with designers and discuss functionality
    -   serves as a "living style guide" for your app

-   [ ] ESLint

    -   most of the bootstrap tools such as create-react-app pre-install linters for you, but if you're on a legacy
        codebase, they might not be applied
    -   they can help you catch bugs, but they can also be used in defining code style for your team — this can
        help in reducing mental load when developing upon a feature that you've inherited from your colleague
    -   [Bornfight ESLint config](https://github.com/bornfight/eslint-config)

-   [ ] Prettier

    -   code formatter that you set up only once, and never think about it again — very useful when working in a
        team
    -   [Bornfight Prettier config](https://github.com/bornfight/prettier)

-   [ ] Structured version control strategy
    -   using a branching model such as gitflow
    -   linting commit messages - [commitlint](https://commitlint.js.org/#/)
        -   useful in creating a changelog and finding bugs as the project develops
        -   [angular's commit message rules](https://github.com/angular/angular/blob/master/CONTRIBUTING.md) are
            often applicable to any software project, and commitlint can help you in keeping those messages
            consistent with the ruleset
-   [ ] Automatic changelog
    -   generated per release
    -   https://github.com/CookPete/auto-changelog

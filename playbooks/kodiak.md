---
title: Kodiak
description: A guide for creating an environment for automating pull requests with kodiak
---

# Motivation

Code review is a process we follow to keep the code clean and consistent, improve our mentoring skills and help
each other improve our skill set.

To make this process easier and faster, **Kodiak** can be used for automating its parts.

# Kodiak

-   https://kodiakhq.com/
-   tool for automating pull requests
    -   notable features:
        -   Auto Update - Keep your PRs up to date with master automatically.
        -   Auto Merge - Add the automerge label or configure Kodiak to auto merge without a label once CI and
            Approvals pass.

### Setup for a project

The official [installation guide](https://kodiakhq.com/#quickstart) is short, but in summary, this is the setup in
a nutshell:

1. Install Kodiak in a selected repository
    - [installation URL](https://github.com/organizations/bornfight/settings/installations)
2. [set up branch protection](https://help.github.com/en/github/administering-a-repository/configuring-protected-branches)
   for the main branch on the repository
3. add `.kodiak.toml` with configuration appropriate for your project

### Example `.kodiak.toml` config

-   handles dependabot automatically
-   does not require automerge label
    -   it's **highly recommended** to have
        ["required reviewers"](https://help.github.com/en/github/administering-a-repository/enabling-required-reviews-for-pull-requests)
        set up for a branch if you want to omit the automerge label

```
# Minimal config. version is the only required field.
version = 1

[merge]
# automatically merges PRs that pass all the build criteria
require_automerge_label = false

[approve]
auto_approve_usernames = ["dependabot-preview"]
```

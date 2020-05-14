---
title: Code reviews
description: How our code review process works 
---

Reviewing other people's code is a responsibility of every developer. Instead of viewing it as a hassle, it should be looked upon as a necessary process in order to keep the code clean and consistent.
It is also an opportunity to learn something new, improve your mentoring skills and help someone else improve their skillset.

Rules on..

## How a Code Review process should look like

..are written below.

### Terms:
 - PR - Pull Request.
 - PR Creator - a person who initiated the PR.
 - Reviewer - a person assigned to do a PR code review.

### Rules:
1. Every PR has to be reviewed, with the exception of fix/hotfix PR-s that can be merged by the code owner on his own responsibility. Merging a hotfix requires writing a desription on why it was necessary to merge it without review.
2. When creating a PR, you should select **EXACTLY ONE** person as a reviewer. This way, a person selected as a reviewer knows he/she is the only one responsible for reviewing this PR. This person has to be someone who is working at the moment (not on vacation).
If there is someone else who should see this PR, he/she should be assigned as Assignee on this PR. An Assignee is just an "interested party", someone who can review, but doesn't have to and has zero responsibility for a PR.
	Reviewer Priority list:
	1. Most senior developer on the project (excluding you).
	2. Anyone else on the project.
	3. Anyone else. (predetermined as a backup)
3. After a reviewer is selected, responsibility for this PR is transfered to him/her. Reviewer has options to:
	1. Do a Code Review and Approve PR.
	2. Do a Code Review and Request Changes on the PR.
	3. Return a response that he/she will be able to do Code Review some time later (say when).
	4. Return a response that he/she wont be able to do a Code Review.
4. After a reviewer has responded (3a,3b,3c,3d), the PR creator has to do one of the following:
	1. (3.1) Merge PR.
	2. (3.2) Make changes.
	3. (3.3,3.4) find someone else for the Code Review.
5. Repeat 3. and 4. untill the PR is merged.

### Important Notes:
 - A Code Review shouldn't in any way distract a developer from doing his current task. Ideally, a Code Review is done after a meeting, lunch or finishing a task or your own PR.
 - Take your time doing Code Review. Minimum time spent on Code Review should be around 10 minutes.
 - A Code Review should be done until the end of the next working day.
 - If there is a larger PR, notify your project manager that it will take you longer to review.
 - In order for Code review to be as efficient as possible, try to break functionalities into smaller PR-s. A PR should consist of no more than 20 files.
 - If a reviewer is someone not currently working on your project, write a detailed description of what is the purpose of this PR.
 - Try to split commits into smaller quantifiable functionalities. This way, PR can be reviewed by commit, or even merged partially by commits. Also, this way we can keep trace of the project development.

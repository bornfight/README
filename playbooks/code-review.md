---
title: Code Review
description: How our code review process works 
---

Code review is the activity of systematically examining computer source code with the intent of finding mistakes created
or overlooked in the development process, and thus improving the overall quality of the software.[<sup>[1]</sup>](https://samuelmullen.com/articles/effective_code_reviews/)

### Benefits
Here are some highlighted benefits to organisations and individuals who are practicing code reviews
* Knowledge transfer
* Learning
* Improved code and product quality
* Stronger code consistency across the overall codebase
* Fewer defects
* Adherence to coding standards

There are many more indirect benefits to having a healthy feedback culture (and code/peer reviews are part of this). 
Because of these reasons, we at Bornfight believe code reviews are a very important part of the software development process.

#### Reviewing other people's code is the responsibility of every developer

### Glossary
 - PR - Pull Request.
 - PR creator - the person who created the PR and requested the code review.
 - Reviewer - the person responsible to review the PR.
 - Assignee - any interested person who wishes to review the PR, but has no responsibility to the PR creator or to the PR.

### Definition of "ready for review"
Your PR is ready for review iff the following is true
* There are no merge conflicts
* CI has passed the build
* There is no WIP in the PR title

### Rules
1. Every PR should be reviewed, except for hotfix PR-s that can be merged by the code owner on his own responsibility. Merging a hotfix requires writing a desription on why it was necessary to merge it without review. 
2. When creating a PR, you must select **EXACTLY ONE** person as a reviewer. This way, the person selected as a reviewer knows he/she is the only one responsible for reviewing this PR. This person has to be someone who is currently availlable (not on vacation, sick leave, etc.).
If there is someone else who should see this PR, he/she may be assigned as an Assignee on this PR. An Assignee is just an "interested party", someone who may review, but doesn't have to and has zero responsibility for a PR.
	Reviewer Priority list:
    1. Code owner mentioned in CODEOWNERS (when applicable/CODEOWNERS file is present).
	2. The most senior developer on the project (excluding yourself).
	3. Anyone else on the project.
	4. Anyone else, use [slack #development-codereview](https://bornfight.slack.com/archives/C013098CQ92) 🔒 to find a reviewer
3. After a reviewer is selected, responsibility for this PR is transfered to him/her. Reviewer has options to:
	* a) Do a code review and Approve PR.
	* b) Do a code review and Request Changes on the PR.
	* c) Return a response that he/she will be able to do code review some time later (say when).
	* d) Return a response that he/she won't be able to do a code review.
4. After a reviewer has completed step 3, the PR creator has to do one of the following, depending on the response (3a,3b,3c,3d):
	* (3.a) Merge PR.
	* (3.b) Agree on, or question the suggested changes. Provide examples and arguments which support your position.
	* (3.c, 3.d) find someone else for the code review.
5. Repeat 3. and 4. untill the PR is merged.

### Helpful notes
 - Keep pull requests short. They should not have to take a long time to review, and therefore should not include a lot of code.
 - Try to break functionalities into smaller PRs. You should prefer multiple PRs as opposed to one giant PR which includes all the changes. [<sup>[2]</sup>](https://github.com/bornfight/README/pull/38/files#r422118361)
 - A code review shouldn't distract anyone from doing his or her current task. Ideally, a code review is done after a meeting, lunch or finishing a task or your own PR.
 - Take your time doing code review. Minimum time spent on code review should be around 10 minutes.
 - A code review should be done until the end of the next working day.
 - If there is a larger PR, notify your project manager that it will take you longer to review.
 - If a reviewer is someone not currently working on your project, write a detailed description of what is the purpose of this PR.
 - Try to split commits into smaller quantifiable functionalities. This way, PR can be reviewed by commit, or even merged partially by commits. Also, this way we can keep trace of the project development.

### How to do a good code review
* This will be covered in a separate document and linked here, or merged, when complete. Tracked in #60

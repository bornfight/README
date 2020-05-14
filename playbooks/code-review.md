---
title: Code reviews
description: How our code review process works 
---

Code review is the activity of systematically examining computer source code with the intent of finding mistakes created
or overlooked in the development process, and thus improving the overall quality of the software. 
[Source](https://samuelmullen.com/articles/effective_code_reviews/)

### Benefits
Here are some highlighted benefits to organisations and individuals who are practicing code reviews
* Knowledge transfer
* Learning
* Improved code and product quality
* Stronger code consistency across the overall codebase
* Fewer defects
* Adherence to coding standards

There are many more indirect benefits to having a healthy feedback culture (and code reviews are part of this). 
Because of these reasons, we at Bornfight believe code reviews are a very important part of the software development process.

#### Reviewing other people's code is the responsibility of every developer

## How a Code Review process looks like

### Terms:
 - PR - Pull Request.
 - PR Creator - the person who created the PR and requested the code review.
 - Reviewer - the person responsible to code review the PR.
 - Assignee - any interested person who wishes to code review the PR, but has no responsibility to the PR Creator or to the PR.
 
The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [RFC 2119](http://tools.ietf.org/html/rfc2119).

### Rules:
1. Every PR should be reviewed, except for hotfix PR-s that can be merged by the code owner on his own responsibility. Merging a hotfix requires writing a desription on why it was necessary to merge it without review. 
2. When creating a PR, you must select **EXACTLY ONE** person as a reviewer. This way, the person selected as a reviewer knows he/she is the only one responsible for reviewing this PR. This person has to be someone who is currently availlable (not on vacation, sick leave, etc.).
If there is someone else who should see this PR, he/she may be assigned as an Assignee on this PR. An Assignee is just an "interested party", someone who may review, but doesn't have to and has zero responsibility for a PR.
	Reviewer Priority list:
    1. Code owner mentioned in CODEOWNERS (when applicable/CODEOWNERS file is present).
	2. The most senior developer on the project (excluding yourself).
	3. Anyone else on the project.
	4. Anyone else. (predetermined as a backup)
3. After a reviewer is selected, responsibility for this PR is transfered to him/her. Reviewer has options to:
	1. Do a Code Review and Approve PR.
	2. Do a Code Review and Request Changes on the PR.
	3. Return a response that he/she will be able to do Code Review some time later (say when).
	4. Return a response that he/she won't be able to do a Code Review.
4. After a reviewer has responded and completed point 3., the PR creator has to do one of the following:
	1. (3.1) Merge PR.
	2. (3.2) Make changes.
	3. (3.3, 3.4) find someone else for the Code Review.
5. Repeat 3. and 4. untill the PR is merged.

### Important Notes:
 - A Code Review shouldn't in any way distract a developer from doing his current task. Ideally, a Code Review is done after a meeting, lunch or finishing a task or your own PR.
 - Take your time doing Code Review. Minimum time spent on Code Review should be around 10 minutes.
 - A Code Review should be done until the end of the next working day.
 - If there is a larger PR, notify your project manager that it will take you longer to review.
 - In order for Code review to be as efficient as possible, try to break functionalities into smaller PR-s. A PR should consist of no more than 20 files.
 - If a reviewer is someone not currently working on your project, write a detailed description of what is the purpose of this PR.
 - Try to split commits into smaller quantifiable functionalities. This way, PR can be reviewed by commit, or even merged partially by commits. Also, this way we can keep trace of the project development.

### How to do a good code review
* This will be covered in a separate document and linked here, or merged, when complete. Tracked in #60

---
title: Executable documentation
description: What if your code and your documentation would be the same thing?
---

Let’s face it, nobody **loves** writing documentation (I guess unless you are a technical documentation writer guy). Even less, people do not enjoy having to  *maintain* documentation.

So if documentation is tiresome to write and painful to maintain, it means that documentation is often scarce and outdated. And the only thing worse than having no documentation is having *untruthful* documentation.

Can we do better?

It turns out we can!

### What if your code and your documentation would be the same thing?
What if code could generate documentation, and what if documentation could execute behaviour?

Welcome to the world of executable documentation, sometimes also called executable specification in agile.

A basic example you are already familiar with is generated source-code documentation, where the documentation comes directly from your code. Most of Yii2 Docs comes from source code annotations.

But there are stronger examples. 

“Getting started” type of documentation is an excellent example.
 
Instead of having a large list of things you need to do to get started (install this, put that there, etc.), why not document the requirements in some way which is both readable and executable.

For this we will again be using Ansible. 

Documenting your requirements in terms of YAML playbooks makes it easy to read and there are some Ansible documentation generators which can generate human-readable documentation based on your playbook.
This way the requirements are documented, always up to date and the documentations is what gets executed. Maintaining this is a breeze, since you are “forced” into keeping it up to date. There is no other way to add new changes, other than updating the documentation.
This way documentation is always in sync with the requirements.

But there are more examples. 


BDD promotes executable features and scenarios by using Gherkin, an “English-like” language which can get executed as test-code. The benefit here is that you have business requirements expressed and documented in English and backed by automated acceptance tests. The link is again a bijection, changing the requirements changes  the documentation (and the test), and changing the test can only mean that the business requirement (feature or story) changed as well. You are always in sync and documented.

Swagger docs generators are also one example, but a less complete one. From experience the generated documentation is never a true representation of the code – and this is still something which needs more research and work to be truly viable. That is why we should use Dredd as a second-level safety net!

The last example is of the highest level, executable documentation for your application infrastructure. 

This is called Cloudformation and is a YAML template which completely describes your application infrastructure.
The information about your load balancers, server instances, network attached storages, firewall settings and all other provisions are no longer magical, or in some outdated word doc, they are executable YAML. Failure to “maintain” and update the documentation results in failure of your application infrastructure. You are again forced to maintain your documentation as the only source of truth. From there,  you can generate automatically infrastructure architecture diagrams with the use of tools like https://infviz.io/

And that is the story of executable documentation.

You should always aspire towards executable documentation.
If you *can* document some requirement in an executable manner, you *should* favor this strategy above all others.

Can you think of any more examples of executable documentation?
Link to original [blog post](https://deghq.com/wordpress/devedu/executable-documentation/)🔒

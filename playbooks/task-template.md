---
title: Task template
description: When you create a new task, what should it contain?
---

### Title / what to do (mandatory):
- Explain the core of the feature in just a few words
- e.g. *Send data to the 3rd party service using XML request*

### Description in detail (mandatory):
- Explain in detail what needs to be implemented
- e.g. "Models from our app need to be mapped to XML (a parser could be useful or it can be done manually)..."

### Things to keep in mind (optional):
- Validation
- Relationship with other parts of the app
- Optimizations
- Other potential issues

### Resources (optional):
- Zeplin
- An example of implementation (e.g. some other project or Stackoverflow)
- An article related to the topic
- API tokens/keys which are necessary for implementation
- Content docs (e.g. text within email)

### Estimation (mandatory/optional):
- Research needs to be done about this
- We have input field for storypoints in Jira, but we don't use that measure all the time (maybe we need standardization?)

### Final output / Acceptance criteria (mandatory?)
- This category might seem like it could be useful or needed, but everything should be clear from previous paragraphs. If it's not clear, it means that task creator/delegator needs to improve/modify existing text.

## JIRA EXAMPLE

### Summary : 
Send model's data to the 3rd party service.

### Description: 
Since the client has another application that will be using data produced in our app, we have to implement
integration with their API. The data that should be sent is in `users`, `users_data`, `transactions` tables in our database. 
The exact parameters and their description can be found in the API documentation.

[Things to keep in mind]:
- Make request&response logger, so you can pinpoint the potential issues and resend data that haven't been successfully sent due to API downtime.

[Resources]:
- 3rd party API documentation: https://example.com/api/docs
- API authentication certificate: In attachment
- About SOAP protocol: https://www.w3schools.com/xml/xml_soap.asp
- XML parser: https://www.w3schools.com/php/php_xml_simplexml_read.asp
- SOAP client: https://www.php.net/manual/en/class.soapclient.php

[Estimation]: 20 hours

[Final output / Acceptance criteria]:
3rd party API always eventually receives the data produced by our app, whether the API is down or up and running.


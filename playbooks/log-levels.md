---
title: Log levels
description: How to identify what log level to use
---

Here you can find rules and explanations for when to use which log level.

There are two log level use cases:

## Input/Output information

### LOG (aka. info)

-   Notifying when a message enters or leaves the component
-   Should log when a message enters the component:
-   example: `Incoming request to: HomeController`

-   Should log when a message leaves the component
-   example: `Saving a record to the DB`

### VERBOSE

-   Notifying when a message enters or leaves the component + data that is entering or leaving
-   Should log when a message enters the component:
-   example:
    `{ message: 'Incoming request to: HomeController', request: Request { url: 'http://localhost:8001/random.php', redirectCounter: 0 } }`

-   Should log when a message leaves the component:
-   example:
    `{ message: 'Saving a record to the DB', record: Record { url: 'http://localhost:8001/random.php', redirectCounter: 0 } }`

-   implementation for both should look something like:

`this.logger.log("Saving a record to the DB"); this.logger.verbose({message: "Saving a record to the DB", record: Record});`

## Application logic information

### ERROR

-   Notifying when errors/exceptions occur
-   example: `Crawl Failed for http://localhost:8000/fail.php with error: “Connection refused”!`
-   implementation should look something like:
    `this.logger.error("Crawl Failed for ${crawlRequest.url} with error: ${err.message}", …);`

### WARN

-   Notifying when application is ending a request processing
-   example: `The request body is missing!`
-   implementation should look something like:
    `if (request.body === undefined) { this.logger.warn("The request body is missing!"); throw new Error("The request body is missing!"); }`

### DEBUG

-   Notifying about processing status
-   Should be added where it makes sense
-   example:
    `{ message: 'Starting to crawl http://localhost:8001/random.php with params:', config: { headers: { 'User-Agent': null }, } }`
-   implementation should look something like:
    `this.logger.debug({message: "Starting to crawl ${crawlRequest.url} with params:", config: config});`

---
title: Software Development Contract - internal
description:
    This document is designed to explain in what manner will software dev. dept. members contribute to a project.
---

## Functional specification

-   An official document as an absolute requirement for development to start
-   It provides an answer to:
    -   Which software functionalities are to be developed?
-   By using it:
    -   Differences between client expectations, and our implementation can be greatly decreased
    -   The chances of misunderstanding between people involved in a project can be decreased
    -   There is a “single source of truth” for reference in case of misunderstanding
    -   A change request is easier to define
    -   Efficiency increases because we can predict potential problems from the very start of software development
    -   A need for back-and-forth communication between the client and our side is decreased
-   Because of the aforementioned reasons, the functional specification is a “must-have”
-   The author of the functional specification should be the PO (The project owner), that has full support from all
    Technical Project Leads involved in the project (i.e. Design Tech. Lead, Frontend Tech. Lead, Backend Tech.
    Lead...)
-   Example:
    -   🔒
        [Example App functional specification](https://docs.google.com/document/d/1Tj-T56SVzhAdRu5w00p5Ie5n5CyeLjtsTRigBL3_blM/edit#)

## Functional specification break down to task level

-   All software functionalities noted in the functional specification should be transcripted into work tasks
    (Jira, Teamwork...)
-   These tasks should be permanently available and transparent
-   One software functionality should represent one _feature task_
-   Feature task should be broken down into feature subtasks
    -   They should be created by project Tech Lead per department involved in the development
    -   They have to be approved and confirmed by PO
-   Feature tasks and subtasks should be described following BDD principles, so all participants can understand
    them
    -   example:
        [How Behavior Driven Development increases project quality](https://www.bornfight.com/blog/behavior-driven-development-how-to-find-bugs-before-coding-starts/)
-   Feature subtasks can be broken down into even smaller tasks called technical or implementation tasks
-   All task-relevant discussion and communication should be done in task comments
-   Every task and subtask should be described using scenarios which can be used as acceptance criteria

### How to break down a functionality

#### Example software feature “Clients”

-   Functionality: Insert a new client

    -   Actors: client, user, tablet application
    -   Requirements:
        -   I, as a user, have a new client, and I want to store his information. This functionality is used in two
            cases. I can add a new client after the offer is already made or I can add a new client without
            creating any offers.
    -   Steps:
        1. I select the action “create a new client”, either from edit offer screen or from the client list.
        2. I enter client information.
            - Name
            - Address
            - Contact information
            - Company information
            - Other information
        3. I save a new client.
        4. I return to the previous menu (edit offer or client list)
    -   Result: A new client information is successfully inserted into the application.
    -   Offline: Yes

-   Feature task (created by PO) \***required**:

    -   Title:
        -   Feature: Create a new client
    -   Description:
        -   In order to create a new client
        -   As a mobile user, I need to be able to
        -   Insert and save information details about the client
    -   Scenario: Create a new client from the client list
        -   GIVEN that the mobile user is on the client list in the application
        -   AND he has all the necessary information about the new client
        -   WHEN he selects “create a new client”
        -   AND inserts all the client information in the required fields
        -   AND saves the new client
        -   THEN the new client information should be seen in the client list

-   Backend Feature subtask (created by Tech. Lead) \***required**

    -   Title:
        -   Save a new client to the DB
    -   Description:
        -   I, as a mobile user, create a new client.
        -   There are two use cases:
            1. I save a new client by adding it to an existing offer
            2. I save a new client without adding it to an existing offer
        -   The client has attributes: Name, Address, Contact information, Company information, other information

-   Backend Feature technical task (created by Tech. Lead) \***optional**
    -   Title:
        -   Create a new REST entity named “Client” and update “Offer” entity
    -   Description:
        -   Create a new Doctrine entity named “Client”:
            -   Attributes are:
                -   Name;
                -   Address;
                -   Contact information (email, ?phone number);
                -   ?Company information (OIB);
                -   ?other information (this should be text with a max of 255 chars);
            -   Enable GET, POST, PUT and DELETE endpoints for it.
        -   Update Offer entity:
            -   Add ManyToOne relation to Offer entity which is optional.
            -   Automatically relate a client with an offer if, upon creation, the “offer” field is received.
        -   If an Offer is related to the Client, make sure that the Client is exposed while returning an Offer.
        -   Add validation while creating or updating.

## Project organization and individual roles

### Project Management

-   Product owner - internal (if the client doesn’t provide its own PO)
    -   This role should be really similar to the Product Owner role in Agile/SCRUM methodology
    -   The person performing this role should be considered as a bridge between a client and project team and
        represent clients interest in the best manner (functional specification should be considered as a client’s
        best interest)
    -   Other responsibilities can be found in
        [How Behavior Driven Development increases project quality](https://www.bornfight.com/blog/behavior-driven-development-how-to-find-bugs-before-coding-starts/)
        article
    -   What can you expect from the person performing this role:
        -   To take responsibility for the end project delivery
        -   To be responsible for functional specification creation and for a functional specification to feature
            task break-down
    -   What you can’t expect from the person performing this role:
        -   To take responsibility for software delivery
        -   To solve software related problems

### Software Development project team

-   Technical Lead
    -   Is familiar with the project requirements and software implementation and infrastructure
    -   Exclusively responsible for software delivery
    -   Senior-level or Middle-level developers
    -   Is in charge of task break down
    -   _This role brings with it an increased level of responsibility for the software delivery in a predicted
        deadline_
    -   What can you expect from the person performing this role:
        -   To take responsibility for software delivery
        -   To be familiar with software business logic in detail
        -   To know answers to all of your questions about software requirements, business logic or technical
            implementation details
        -   To assist in functional specification creation
        -   To do mayor estimates
        -   To break down feature tasks into the subtasks
        -   To conceptualize software architecture and in need, implement it
        -   To support makers on the project (provide answers about business logic, help with implementation...)
        -   To solve software related problems
        -   To be a code owner of the software until that ownership is transferred or code is obsoleted
    -   What you can’t expect from the person performing this role:
        -   To take responsibility for the end project delivery
        -   To be in charge of direct client communication
        -   To take care of the project budget
        -   To be completely responsible for functional specification creation and for a software feature to task
            break-down
        -   To guide project makers through every step of the feature implementation
-   Maker
    -   All seniority levels
    -   A person that is in charge of implementing features based on feature tasks and subtasks
    -   Has a lot less responsibility for software delivery
    -   What can you expect from the person performing this role:
        -   To do feature implementation based on the tasks and subtasks
        -   To estimate feature implementation
        -   To communicate its road-block, impediments or requests help
        -   To have a responsibility towards the Tech. Lead for feature implementation
    -   What you can’t expect from the person performing this role:
        -   Complete independence while doing its work
        -   To take responsibility for software delivery
        -   To be familiar with software business logic in detail

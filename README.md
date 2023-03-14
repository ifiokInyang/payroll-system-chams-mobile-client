# Getting Started with Payroll Management System App

## Available Scripts
AFTER CLONING THE REPO, CHECKOUT TO crudFixes branch by RUNNING

## `git checkout crudFixes` 
In the project directory AND IN THE crudFixes branch, you can run:
## "yarn" 

to install dependencies.

### `yarn start`

Runs the app in the development mode.\
App (Front end runs) on (http://localhost:3000).

### `COMMUNICATING WITH THE SERVER`

YOU NEED TO CREATE A .env FILE IN YOUR ROOT DIRECTORY WITH THE FORMAT OF THE .env.sample AND ADD THE SERVER URL

THE SERVER RUNS ON (http://localhost:4000).

### `STARTING THE SERVER`

RUN 
## "yarn" 

to install dependencies in the project directory.
RUN 
## `yarn start:dev`
to start the Server

### DATABASE
I used MySql database hosted on Railway.
Database Configuration can be found at "/src/app.module.ts" in the Backend repository.

In the event of Connection Errors to Database, kindly use localhost and connect to a local mysql server.
## POSTMAN

Postman documentation can be found at (https://documenter.getpostman.com/view/24033754/2s93JutNbq)

## GITHUB (CLIENT URL)
https://github.com/ifiokInyang/payroll-system-chams-mobile-client.git
## GITHUB (SERVER URL)
https://github.com/ifiokInyang/payroll-management-system-server.git
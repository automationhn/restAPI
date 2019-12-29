# Simple Node with Express Server with REST API

[![Build Status](https://travis-ci.org/rwieruch/node-express-server-rest-api.svg?branch=master)](https://travis-ci.org/rwieruch/node-express-server-rest-api) [![Slack](https://slack-the-road-to-learn-react.wieruch.com/badge.svg)](https://slack-the-road-to-learn-react.wieruch.com/) [![Greenkeeper badge](https://badges.greenkeeper.io/rwieruch/node-express-server-rest-api.svg)](https://greenkeeper.io/)

An easy way to get started with a Express server offering a REST API with Node.js. [Read more about it.](https://www.robinwieruch.de/node-express-server-rest-api)

## Features

* Babel 7
* Environment Variables
* Express
* REST API

## Requirements

* [node & npm](https://nodejs.org/en/)
* [git](https://www.robinwieruch.de/git-essential-commands/)

## Installation

* `git clone git@github.com:rwieruch/node-express-server-rest-api.git`
* `cd node-express-server-rest-api`
* `npm install`
* `npm start`
* optional: include *.env* in your *.gitignore*

### GET Routes

* visit http://localhost:3000

  * /teams: get the list team with the database as the static file
  * /teams/v2 : the new version, get the list team with the real database (MS SQL Server)
  * /teams/getTeamNames
  * /teams/getTeamById/4
  * /messages
  * /messages/1
  * /users
  * /users/1

* FULL OPERATION TYPE
  * GET: http://localhost:3000/titles
  * GET: http://localhost:3000/titles/:id
  * Params: `:id`
  * POST: http://localhost:3000/titles
  * Body context: `{short_title": "Admin", "title": "Admin"}`
  * PATCH: http://localhost:3000/titles/:id
  * Body context: `{short_title": "Admin", "title": "Admin"}`
  * Params: `:id`
  * DELETE: http://localhost:3000/titles/:id
  * Params: `:id`

### Beyond GET Routes

#### CURL

* Create a message with:
  * `curl -X POST -H "Content-Type:application/json" http://localhost:3000/messages -d '{"text":"Hi again, World"}'`
* Delete a message with:
  * `curl -X DELETE -H "Content-Type:application/json" http://localhost:3000/messages/1`

#### Postman

* Install [Postman](https://www.getpostman.com/apps) to interact with REST API
* Create a message with:
  * URL: http://localhost:3000/messages
  * Method: POST
  * Body: raw + JSON (application/json)
  * Body Content: `{ "text": "Hi again, World" }`
* Delete a message with:
  * URL: http://localhost:3000/messages/1
  * Method: DELETE

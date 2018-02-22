![cf](https://i.imgur.com/7v5ASc8.png) Lab 11: Single Resource Express API
======

## Submission Instructions
* Work in a fork of this repository
* Work in a branch on your fork
* Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
* Open a pull request to this repository
* Submit on canvas a question and observation, how long you spent, and a link to your pull request

## Configuration 
Configure the root of your repository with the following files and directories. Thoughtfully name and organize any additional configuration or module files.
* **README.md** - contains documentation
* **.gitignore** - contains a [robust](http://gitignore.io) `.gitignore` file 
* **.eslintrc** - contains the course linter configuratoin
* **.eslintignore** - contains the course linter ignore configuration
* **package.json** - contains npm package config
  * create a `lint` script for running eslint
  * create a `start` script for running your server
  * create a `test` script for running your tests
* **server.js** - runs your application
* **lib/** - contains helper modules
* **model/** - contains resource model(s)
* **\_\_test\_\_/** - contains route tests
* **data** - contains your resource data

## Feature Tasks

##### Minimum Requirements
For this assignment, you will be creating a single resource API that utilizes ExpressJS for handling requests.  Follow the requirements below to complete this assignment.

* create an HTTP server using `express`
* create a object constructor that creates a _simple resource_ with at least 3 properties
  * it may **not** have the same properties as the in-class sample code (other than the `id`)
  * a unique `id` property should be included *(uuid)*
  * include two additional properties of your choice
* use the JSON parser included with the `body-parser` module as a route level middleware component for parsing the request body on `POST` and `PUT` routes
* use the npm `debug` module to log the methods in your application
* create an `npm` script to automate the `debug` process and start the server
* persist your API data using the storage module, which should still use file system persistence

## Server Endpoints

##### `/api/simple-resource-name`
* **POST:** should pass data as stringifed JSON in the body of a **POST:** request to create a new resource
* **GET:** should pass `?id=<uuid>` as a query string parameter to retrieve a specific resource (as JSON)
* **DELETE:** should pass `?id=<uuid>` in the query string to **DELETE** a specific resource. This should also return a **204** status code with no content in the body.

## Testing
##### `/api/simple-resource-name`
* **GET:** test 404
  * should respond with "not found" for valid requests made with an id that was not found
* **GET:** test 400
  * should respond with "bad request" if no id was provided in the request
* **GET** test 200
  * should contain the response body for a request made with a valid id
* **POST:** test 400
  * should respond with "bad request" if no request body was provided or the body was invalid
* **POST:** test 200
  * should respond with the body content for a **POST** request with a valid body
* test to ensure that your API returns a status code of 404 for routes that have not been registered
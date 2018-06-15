# Angular Client for Staging Management System

This project was built with the following libraries:
* [Angular 5](https://github.com/angular/angular-cli)
* [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.
* [Bootstrap](http://getbootstrap.com)
* [Angular Material Design](https://material.angular.io/)
* [jQuery](http://jquery.com)
* [fontawesome](http://fontawesome.com)

**Libraries for development**
* [json-server](https://github.com/typicode/json-server)
* [concurrently](https://www.npmjs.com/package/concurrently)

## Development setup

To set up a development server locally, first clone this repo:
```
git clone https://github.com/revaturelabs/sms-client.git
```
Then install dependencies:
```
cd sms-client
npm install
```
Use the npm script to start both the dev json-server (the mock back-end) and the angular server:
```
npm run start:both
```
The json-server will use the `db/db.js` file to generate mock data for the Angular application to consume.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

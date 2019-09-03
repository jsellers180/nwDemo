# Turo - End to End Tests
***

## Useful links

#### [Home Page](https://turo.com) |

## Getting Started

Install [Node.js](https://nodejs.org/en/) and then clone this repository:

```sh
$ git clone <this_repo>
$ cd nightwatchDemo
$ npm install -g mocha nightwatch
```

## Running Tests

### Running all tests
```sh
$ nightwatch lib/tests/homepage/homepage.js
```

### Current Tests
```sh
Visit turo.com homepage
Login with valid credentials
Perform a search in the SFO region
```
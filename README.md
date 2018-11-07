[![Build Status](https://travis-ci.org/dankreiger/lieblingsrestaurant.svg?branch=master)](https://travis-ci.org/dankreiger/lieblingsrestaurant)

[Live Demo](https://lieblingsrestaurant.surge.sh/)

***

- [Restaurant Finder](#restaurant-finder)
    - [Prerequisites](#prerequisites)
    - [Getting Started](#getting-started)
    - [TODO](#todo)
    - [Possible future implementations](#possible-future-implementations)

## Restaurant Finder

---

### Prerequisites

**Node**

- Node 8.10.0 or later
- You can use [nvm](https://github.com/creationix/nvm#installation) to manage your node version
  - if you have NVM installed, you can switch to the default project node version 10.10.0:
  ```sh
  $ nvm use
  ```

**Google Maps**

- Please make sure you enter your API key on server startup. Make sure your API Key is enabled with the Google Places API.
- Google Maps Places API: [Get API Key](https://developers.google.com/places/web-service/get-api-key)

---

### Getting Started

1. Clone the repo and `cd` into project root

   ```sh
   $ git clone git@github.com:dankreiger/lieblingsrestaurant.git
   $ cd lieblingsrestaurant
   ```

   _Note: First time usage_

   Make start script executable:

   ```sh
   $ chmod +x scripts/*.sh
   ```

2. Install dependencies with [yarn](https://yarnpkg.com/en/) or [npm](https://www.npmjs.com/)

   yarn:

   ```sh
   $ yarn
   ```

   npm:

   ```sh
   $ npm install
   ```

3. Start server with [yarn](https://yarnpkg.com/en/) or [npm](https://www.npmjs.com/)


    yarn:
    ```sh
    $ yarn start
    ```

    npm:
    ```sh
    $ npm start
    ```

4. Enter your Google Maps Api key at the CLI prompt. Make sure your key has the Google Places API enabled.
5. Browser will open automatically on http://localhost:3000/

***

### TODO

1. Unit/integration testing on components, actions, and reducers
2. Add styleguide
3. Make selecting / favoriting more user friendly bzw. allow user to unselect items that aren't favorited
4. Filter search to restaurants only
5. Make sure redux state is [immutable](https://redux.js.org/recipes/structuringreducers/immutableupdatepatterns)
6. Refactor unnecessary connections to the redux store
7. Make sure favorite items sort on click and not on re-render
8. Make favorite items editable
9. Once these are done, rewrite the app from scratch with TDD and a clean approach

***

### Possible future implementations

1. Firebase
2. Authentication

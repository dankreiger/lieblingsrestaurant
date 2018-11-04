
[![Build Status](https://travis-ci.org/dankreiger/lieblingsrestaurant.svg?branch=master)](https://travis-ci.org/dankreiger/lieblingsrestaurant)


- [Restaurant Finder](#restaurant-finder)
    - [Prerequisites](#prerequisites)
    - [Getting Started](#getting-started)

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
- Google Maps Places API: [Get API Key](https://developers.google.com/places/web-service/get-api-key)


**Google Maps**

- Please make sure you enter your API key on server startup

---



### Getting Started

1. Clone the repo and `cd` into project root

   ```sh
   $ git clone git@github.com:dankreiger/lieblingsrestaurant.git
   $ cd repo
   ```

    *Note: First time usage*

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

4. Enter your Google Maps Api key. Make sure your key has the Google Places API enabled.
5. Browser will open automatically on http://localhost:3000/

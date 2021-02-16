# Fullstack boilerplate

## Getting Started

### From the Github UI
See the instructions [here](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) to use Github's feature to create a new repo from a template.

### From the command line

```
git clone https://github.com/dev-academy-challenges/boilerplate-fullstack [your-project-name]
cd [your-project-name]
npm install # to install dependencies
npm run dev # to start the dev server
```

You can find the server running on [http://localhost:3000](http://localhost:3000).

## Details

This repo includes:

* a single, simple API endpoint (`/api/v1/fruits`)
* a single React component (`<App />`)
* an example database module (`server/db/fruits.js`)
* an API client module (`client/apis/fruits.js`)
* configuration for Jest and Enzyme (including JSDOM)
* configuration for server-side debugging in VS Code
* a single client-side test (`client/components/App.test.js`)

## orders api

The GET /orders/open request will send back an object as follows:
[
  {
    id: 'OTGZ4R-5DLAK-2LOQCQ',
    opentm: 1613470428.006,
    vol: '0.00020000',
    price: '52000.0',
    pair: 'XBTUSD',
    type: 'sell' 
  },
  {
    id: 'O7ZXP3-MXHKG-4NWUHE',
    opentm: 1613470176.8885,
    vol: '0.00020000',
    price: '65000.0',
    pair: 'XBTUSD',
    type: 'sell'
  },
  {
    id: 'OZVQHL-OE55C-S3DYN2',
    opentm: 1613470166.8788,
    vol: '0.00020000',
    price: '60000.0',
    pair: 'XBTUSD',
    type: 'sell'
  }
]

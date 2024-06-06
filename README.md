<h1 align="center">Transactions REST API</h1>

<div align="center">
    <img src="https://img.shields.io/github/languages/top/Gustavohps10/transactions-api?color=1e1e1e"/>
    <img src="https://img.shields.io/github/commit-activity/w/Gustavohps10/transactions-api?color=1e1e1e"/>
    <img src="https://img.shields.io/github/created-at/gustavohps10/transactions-api?color=1e1e1e"/>
    <img src="https://img.shields.io/github/license/gustavohps10/transactions-api?color=1e1e1e"/>
</div>

## :camera: Screenshot
<p align="center"><img width="80%" src="https://github.com/Gustavohps10/transactions-api/assets/61752235/f9be30cc-a80b-4ed5-b343-afbc4f017caf"></p>

## :page_with_curl: Description
A simple API that allows the user to carry out credit and debit transactions

## :pushpin: Endpoints

```
POST /transactions
GET  /transactions 
GET  /transactions/:id
GET  /transactions/summary 
```

## :gear: Running the App

### :globe_with_meridians: Web 
You can access this url: https://transactions-api-d9kj.onrender.com if it is still working ¯\\_(ツ)_/¯

### :computer: Local
First fork and clone this repo. Feel free to create new pull requests

#### Environment 
Rename .env.example to .env and set variables
```
NODE_ENV=development
DATABASE_CLIENT=sqlite
DATABASE_URL="./db/app.db"

HOST=localhost
PORT=3333
```
#### Install dependencies
```
npm install
```

#### Migrate database
```
npm run knex migrate:latest
```

#### Run server
```
npm run dev
```

#### Test
```
npm test
```

## :hammer_and_wrench: Tools
<p>
<img src="https://img.shields.io/static/v1?label=&message=Node.js&colorA=2a2a2a&colorB=1a1a1e&logo=node.js&style=flat-square">
<img src="https://img.shields.io/static/v1?label=&message=TypeScript&colorA=2a2a2a&colorB=1a1a1e&logo=typescript&style=flat-square">
<img src="https://img.shields.io/static/v1?label=&message=Fastify&colorA=2a2a2a&colorB=1a1a1e&logo=fastify&style=flat-square">
<img src="https://img.shields.io/static/v1?label=&message=Zod&colorA=2a2a2a&colorB=1a1a1e&logo=zod&style=flat-square">
<img src="https://img.shields.io/static/v1?label=&message=Knex.js&colorA=2a2a2a&colorB=1a1a1e&logo=knex.js&style=flat-square">
<img src="https://img.shields.io/static/v1?label=&message=SQLite&colorA=2a2a2a&colorB=1a1a1e&logo=sqlite&style=flat-square">
<img src="https://img.shields.io/static/v1?label=&message=Vitest&colorA=2a2a2a&colorB=1a1a1e&logo=vitest&style=flat-square">
</p>


## :adult: Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://www.gustavohenrique.site/"><img src="https://avatars.githubusercontent.com/u/61752235?v=4?s=100" width="100px;" alt="Gustavo Henrique"/><br /><sub><b>Gustavo Henrique</b></sub></a><br /><a href="#code-Gustavohps10" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![All Contributors](https://img.shields.io/github/all-contributors/Gustavohps10/transactions-api?color=ee8449&style=flat-square)](#contributors)

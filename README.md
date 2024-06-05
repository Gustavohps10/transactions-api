<h1 align="center">Transactions REST API</h1>

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

## :gear: Running App
You can access this url: https://transactions-api-d9kj.onrender.com if it is still working ¯\_(ツ)_/¯

### :computer: Local
First fork and clone this repo.
Feel free to create new pull requests

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

# Cypress Heroes Demo Application

This is a demo application that shows how to use Cypress to run end-to-end, component, and API tests against an application.

## Installation
```
## Install deps in TERMINAL 1
npm i

## Install deps and start client-side front-end in TERMINAL 2
cd client-react
touch .env.local #add `VITE_API_URL` env var
npm i
npm run dev

## Install deps in and start server in TERMINAL 3
cd server/
npm i
npm run start

## You may need to reset the db if getting an `undefined` error when ## attempting to log in
cd server/
npm run prisma:resetdb
```
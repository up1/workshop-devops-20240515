# Demo with NodeJS

## Start project
```
npm i
node server.js
```
### List of endpoints
* http://localhost:3000
* API documentation
  * http://localhost:3000/api-docs/

## Working with [PM2](https://pm2.keymetrics.io/)
```
// Install pm2
npm install pm2 -g

// Start server
pm2 start server.js -i 3 

// Delete 
pm2 delete server
```
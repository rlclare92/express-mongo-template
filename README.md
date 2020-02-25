### Folder structure
-lib/ contains all local modules
-public/ any front-end resources, JS,C SS, images, ect. 
-views/ contains individual pages
-views/layouts  contains the layout for each page will be render
-index.js the main center point of the application, everything comes together within the index.js file

Install the below packages- npm 
npm init -y - sets up package.json
npm i path express express-handlebars mongoose body-parser dotenv - sets up express, handlebars, mongoose, body-parser & dotenv

Index.js 
-Within index.js when creating the variables it is best to call them as what the packages are called.
would most likely need the below 
const hbs= require('express-handlebars');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

Will also need the app.use, app.engine, app.get, app.post, app.listen (can go anywhere does not need to go at the bottom of the page). 

In the mongoose.connect- making sure to take out the security info and replace with .env link and within .env add the security info needed. 

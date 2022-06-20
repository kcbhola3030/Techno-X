const express = require("express");
const app = express();
const dbs = require("./db.js")
 const db = require ("./db");
const { auth } = require('express-openid-connect');
let books = require('./routes/routes');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/',books);

//auth0
const config = {
  authRequired: false,
  auth0Logout: true,
  baseURL: 'http://localhost:4000',
  clientID: 'Zyj6vmY4RUb9NWsZ9qclLZb5gyhLdVSA',
  issuerBaseURL: 'https://dev-eiioolet.us.auth0.com',
  secret: 'dkfjhvsdjhvkdjvhsdkjvhskdjvhkdjvhsdkjvhsdkjvhkjvks'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
      res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
});


const port = 4000;
app.listen(port,()=>{
    console.log(`listening at ${port}`)
})
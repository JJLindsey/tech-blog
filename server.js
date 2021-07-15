const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');

const session = require('express-session')


const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
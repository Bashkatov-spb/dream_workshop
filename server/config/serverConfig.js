const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const { verifyAccessToken } = require('../middleware/verifyJWT');

const config = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static(path.join(__dirname, '..', 'public')));
  app.use(cookieParser());
  // наш контролер, проверяет билеты
  app.use(verifyAccessToken);
};

module.exports = config;

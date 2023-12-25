const express = require('express');
const config = require('./config/serverConfig');

const app = express();

config(app);

const PORT = 4000;

const mainRouter = require('./routers/index.router');

app.use('/', mainRouter);

app.listen(PORT, () => {
  console.log(`Server is working on ${PORT} port`);
});

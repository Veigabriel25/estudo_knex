const express = require('express');
const knex = require('./database');
const routes = require('./routes');
const app = express();

app.use(routes)

app.listen(3333);

/*git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/Veigabriel25/estudo_knex.git
git push -u origin master*/
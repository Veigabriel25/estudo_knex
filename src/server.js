const express = require('express');
const knex = require('./database');
const routes = require('./routes');
const app = express();

app.use(express.json());
app.use(routes);


//not found


app.use((req, res, next) => {
  const error = new Error("not found");
  error.status = 404;
  next(error);
})

//catchall

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: error.message })
});

app.listen(3333);

/*git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/Veigabriel25/estudo_knex.git
git push -u origin master*/
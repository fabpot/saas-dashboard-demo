const Blackfire = require('@blackfireio/node-tracing');
const express = require('express')
const app = express()
const path = require('path');
const port = process.env.PORT || 3000

const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

const appName = require('./package.json').name;

const query = require('./utilities/pgquery');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', indexRouter);
app.use('/api', apiRouter);

// make sure we have some data with the first start
(async  () => {
  try {
      await query(`CREATE TABLE IF NOT EXISTS data (id serial NOT NULL PRIMARY KEY, content json NOT NULL);`)
      const result = await query('SELECT content FROM data WHERE id = 1')
      if (result.rowCount === 0) {
        await query(`INSERT INTO data (content) VALUES('{ "title": "Upsun" }')`)
      }
    } catch (error) {
     console.log(error);
    }
})();

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
  Blackfire.start({appName});
})

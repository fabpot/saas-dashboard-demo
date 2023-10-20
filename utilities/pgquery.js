const pg = require('pg');

var credentials = {};
if (process.env.RELATIONSHIPS_JSON) {
  credentials = JSON.parse(process.env.RELATIONSHIPS_JSON).postgresql[0];
}

const run = async (statement) => {
  try {
    const client = new pg.Client({
      user: credentials.username || 'postgres',
      password: credentials.password ||'secret',
      host: credentials.host || 'localhost',
      port: credentials.port || 5432,
      database: credentials.path || 'postgres'
    });
    await client.connect();
    const result = await client.query(statement);
    await client.end();

    return result;

  } catch (error) {
    return error;
  }
}



module.exports = run;

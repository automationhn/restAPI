import sql from 'mssql';
import configyml from 'config-yml';
import { Router } from 'express';

const router = Router();
// config for your database
const { db: { user, password, server, database } } = configyml;
const config = { user, password, server, database,
  pool: {
  max: 10,
  min: 0,
  idleTimeoutMillis: 3000
} };

router.get('/', async (req, res) => {
  let pool = await sql.connect(config);
  
  const queryTeam = "select * from title";
  const { recordset: titles } = await pool.request().query(queryTeam);
  
  pool.close();
  return res.send(titles);
});

router.get('/:id', async (req, res) => {
  let pool = await sql.connect(config);
  
  const queryTeam = `select * from title where id=${req.params.id}`;
  const { recordset: titles } = await pool.request().query(queryTeam);
  
  pool.close();
  if (titles[0]) {
    return res.send(titles[0]);
  } else {
    res.status(404);
    return res.send('Title not found');
  }
});


router.post('/', (req, res) => {
  sql.connect(config, function (err) {
    if (err) {
      console.log(err);
    }
    var request = new sql.Request();   
    console.log(req);
    const { body: { title, short_title: shortTitle } } = req;
    const insertQuery = `insert into [dbo].[title] ([title], [short_title]) values ('${title}','${shortTitle}')`;
    console.log(insertQuery);
    let data;
    request.query(insertQuery, function (err, recordset) {
        if (err) {
          const message = {
            error: err,
            status_code: 500
          };
          res.status(500);
          return res.send(message);
        }
        res.status(201);
        return res.send({
          text: 'Insert successfully',
          status_code: 201
        });
    });
  });
});

router.patch('/:id', (req, res) => {
  sql.connect(config, function (err) {
    if (err) {
      console.log(err);
    }
    var request = new sql.Request();   
    const { body: { title, short_title: shortTitle }, params: { id } } = req;
    const updateQuery = `update [dbo].[title] set title = '${title}', short_title='${shortTitle}' where id=${id}`;
    let data;
    request.query(updateQuery, function (err, recordset) {
        if (err) {
          const message = {
            error: err,
            status_code: 500
          };
          res.status(500);
          return res.send(message);
        }
        res.status(204);
        return res.send({
          text: 'Update successfully',
          status_code: 204
        });
    });
  });
});

router.delete('/:id', async (req, res) => {
  const { body: { title, short_title: shortTitle }, params: { id } } = req;
  const query = `select * from title where id=${id}`;
  console.log(query);
  const pool = await sql.connect(config);
  const { recordset } = await pool.request().query(query);
  if (recordset.length === 0) {
    res.status(422);
    return res.send({ error: 'The id is not existed' });
  }
  const deleteQuery = `delete [dbo].[title] where id=${id}`;
  const { rowsAffected } = await pool.request().query(deleteQuery);
  pool.close();
  if (rowsAffected > 0) 
  {
    const message = {
      text: 'Delete successfully',
      status_code: 201
    };
    res.status(201);
    return res.send(message);
  }
  return res.send({ error: 'Can not delete title' });
});
export default router;

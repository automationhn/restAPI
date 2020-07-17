import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json';

import models from './models';
import routes from './routes';

const app = express();

// Application-Level Middleware

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1]
  };
  next();
});

// Routes

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);
app.use('/teams', routes.team);
app.use('/titles', routes.title);

// Start

app.listen(process.env.PORT, () => {
  app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));     
  console.log(`Example app listening on port ${process.env.PORT}!`);
});

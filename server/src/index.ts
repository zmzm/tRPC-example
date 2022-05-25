import express, { Application } from 'express';
import cors from 'cors';
import * as trpcExpress from '@trpc/server/adapters/express';

import trpcRouter from './router';
import { Database } from './database';

const app: Application = express();
const database: Database = new Database();

const createContext = () => ({
  database,
});

app.use(express.json());
app.use(cors());
app.use(
  '/cat',
  trpcExpress.createExpressMiddleware({
    router: trpcRouter,
    createContext,
  })
);

app.listen(8080, () => {
  console.log('Server running on port 8080');
});

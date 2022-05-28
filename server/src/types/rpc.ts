import { Database } from '../database';

export type Context = {
  database: Database;
};

export type Request = {
  ctx: Context;
  input: any;
};

import * as trpc from '@trpc/server';
import { createCat } from './mutations/createCat';
import { getCatById } from './queries/getCatById';

const trpcRouter = trpc
  .router()
  .query('get', getCatById)
  .mutation('create', createCat);

export default trpcRouter;

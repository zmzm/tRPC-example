import * as trpc from '@trpc/server';
import { createCat } from './mutations/createCat';
import { deleteCat } from './mutations/deleteCat';
import { getCatById } from './queries/getCatById';
import { getCats } from './queries/getCats';
import { Context } from './types/rpc';

const trpcRouter = trpc
  .router<Context>()
  .query('get', getCatById)
  .query('getAll', getCats)
  .mutation('create', createCat)
  .mutation('delete', deleteCat);

export default trpcRouter;

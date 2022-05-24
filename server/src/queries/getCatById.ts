import * as trpc from '@trpc/server';
import z from 'zod';
import { Cat, CatObject } from '../types/cat';

export const getCatById = {
  input: z.number(),
  output: CatObject,
  async resolve(req: any) {
    const foundCat = cats.find((cat: Cat) => cat.id === req.input);
    if (!foundCat) {
      throw new trpc.TRPCError({
        code: 'BAD_REQUEST',
        message: `could not find cat with id ${req.input}`,
      });
    }
    return foundCat;
  },
};

import * as trpc from '@trpc/server';
import z from 'zod';
import { Cat, CatObject } from '../types/cat';

export const getCatById = {
  input: z.string(),
  output: CatObject,
  async resolve({ input, ctx: { database } }: any) {
    const foundCat: Cat = database.findById(input);

    if (!foundCat) {
      throw new trpc.TRPCError({
        code: 'BAD_REQUEST',
        message: `Could not find cat with id ${input}`,
      });
    }
    return foundCat;
  },
};

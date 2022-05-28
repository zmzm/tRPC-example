import * as trpc from '@trpc/server';
import z from 'zod';

import { Cat, CatObject } from '../types/cat';
import { Request } from '../types/rpc';

export const getCatById = {
  input: z.string(),
  output: CatObject,
  async resolve({ input, ctx: { database } }: Request): Promise<Cat> {
    const foundCat: Cat | undefined = await database.findById(input);

    if (!foundCat) {
      throw new trpc.TRPCError({
        code: 'BAD_REQUEST',
        message: `Could not find cat with id ${input}`,
      });
    }
    return foundCat;
  },
};

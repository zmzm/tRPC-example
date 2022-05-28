import z from 'zod';

import { Cat, CatObject } from '../types/cat';
import { Request } from '../types/rpc';

export const createCat = {
  input: z.object({ name: z.string().max(50) }),
  output: CatObject,
  async resolve({ input, ctx: { database } }: Request): Promise<Cat> {
    const newCat: Cat = await database.create(input.name);

    return newCat;
  },
};

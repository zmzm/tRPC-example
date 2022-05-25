import z from 'zod';

import { Cat, CatObject } from '../types/cat';

export const createCat = {
  input: z.object({ name: z.string().max(50) }),
  output: CatObject,
  async resolve({ input, ctx: { database } }: any) {
    const newCat: Cat = database.create(input.name);

    return newCat;
  },
};

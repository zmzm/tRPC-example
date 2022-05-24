import z from 'zod';
import { Cat, CatObject } from '../types/cat';

export const createCat = {
  input: z.object({ name: z.string().max(50) }),
  output: CatObject,
  async resolve(req: any) {
    const newCat: Cat = { id: newId(), name: req.input.name };
    cats.push(newCat);

    return newCat;
  },
};

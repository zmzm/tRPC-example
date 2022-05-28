import { Cats, CatsArray } from '../types/cat';
import { Request } from '../types/rpc';

export const getCats = {
  output: CatsArray,
  async resolve({ ctx: { database } }: Request): Promise<Cats> {
    const allCats: Cats = await database.getAll();

    return allCats;
  },
};

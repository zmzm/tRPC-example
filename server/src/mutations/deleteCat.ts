import z from 'zod';

import { Request } from '../types/rpc';

export const deleteCat = {
  input: z.object({ id: z.string().max(50) }),
  async resolve({ input, ctx: { database } }: Request): Promise<string> {
    const catId = await database.delete(input.id);

    return catId;
  },
};

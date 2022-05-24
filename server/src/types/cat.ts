import z from 'zod';

export const CatObject = z.object({
  id: z.number(),
  name: z.string(),
});

export const CatsArray = z.array(CatObject);

export type Cat = z.infer<typeof CatObject>;
export type Cats = z.infer<typeof CatsArray>;
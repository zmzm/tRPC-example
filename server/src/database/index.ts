import { nanoid } from 'nanoid';

import { Cat, Cats } from '../types/cat';

export class Database {
  #CATS_DATABASE = [
    { id: 'dklsnvkj54k3jn4', name: 'Lollipop' },
    { id: nanoid(), name: 'Cucumber' },
  ];

  #DATABASE_PROXY = new Proxy(this.#CATS_DATABASE, {});

  findById = async (id: string): Promise<Cat | undefined> => {
    const foundCat = this.#DATABASE_PROXY.find((cat: Cat) => cat.id === id);

    return foundCat;
  };

  getAll = async (): Promise<Cats> => this.#DATABASE_PROXY;

  create = async (name: string): Promise<Cat> => {
    const newCat = { id: nanoid(), name };
    this.#DATABASE_PROXY.push(newCat);

    return newCat;
  };

  delete = async (id: string): Promise<string> => {
    const index = this.#DATABASE_PROXY.findIndex((cat: Cat) => cat.id === id);

    if (index !== -1) {
      this.#DATABASE_PROXY.splice(index, 1);

      return id;
    }

    return 'FAIL';
  };
}

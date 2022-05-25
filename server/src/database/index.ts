import { nanoid } from 'nanoid';

import { Cat } from '../types/cat';

export class Database {
  #CATS_DATABASE = [
    { id: 'dklsnvkj54k3jn4', name: 'Lollipop' },
    { id: nanoid(), name: 'Cucumber' },
  ];

  #handler = {
    get(target, prop: string) {
      if (prop in target) {
        return target[prop];
      } else {
        return {};
      }
    },
  };

  #DATABASE_PROXY = new Proxy(this.#CATS_DATABASE, this.#handler);

  findById = async (id: string) => {
    const foundCat = this.#DATABASE_PROXY.find((cat: Cat) => cat.id === id);

    return foundCat;
  };

  create = async (name: string) => {
    const newCat = { id: nanoid(), name };
    this.#DATABASE_PROXY.push(newCat);

    return newCat;
  };
}

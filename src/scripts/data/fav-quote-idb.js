import { openDB } from 'idb';
import CONFIG from '../global/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteQuoteIdb = {
  async getQuote(id) {
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllQuotes() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putQuote(quote) {
    return (await dbPromise).put(OBJECT_STORE_NAME, quote);
  },
  async deleteQuote(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default FavoriteQuoteIdb;

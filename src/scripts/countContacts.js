import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    const array = await fs.readFile(PATH_DB, 'utf8');
    const parseArr = JSON.parse(array);
    return parseArr.length;
  } catch (err) {
    console.error('Помилка читання даних з файлу:', err);
  }
};

console.log(await countContacts());

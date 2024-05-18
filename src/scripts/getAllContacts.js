import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

const getAllContacts = async () => {
  try {
    const array = await fs.readFile(PATH_DB, 'utf8');
    return JSON.parse(array);
  } catch (err) {
    console.error('Помилка читання даних з файлу:', err);
  }
};

console.log(await getAllContacts());

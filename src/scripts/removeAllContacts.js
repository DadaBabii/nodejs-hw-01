import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    const array = await fs.readFile(PATH_DB, 'utf8');
    const parseArr = JSON.parse(array);
    parseArr.splice(0, parseArr.length);
    const data = JSON.stringify(parseArr);
    await fs.writeFile(PATH_DB, data, 'utf8');
    console.log('Дані успішно додані до файлу.');
  } catch (err) {
    console.error('Помилка читання даних з файлу:', err);
  }
};

await removeAllContacts();

import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const thanos = async () => {
  try {
    const array = await fs.readFile(PATH_DB, 'utf8');
    const parseArr = JSON.parse(array);
    const thanosArr = parseArr.filter((item) => Math.random(item) >= 0.5);
    const data = JSON.stringify(thanosArr);
    await fs.writeFile(PATH_DB, data, 'utf8');
    console.log('Дані успішно додані до файлу.');
  } catch (err) {
    console.error('Помилка читання даних з файлу:', err);
  }
};
await thanos();

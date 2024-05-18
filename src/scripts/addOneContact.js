import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const addOneContact = async () => {
  try {
    const array = await fs.readFile(PATH_DB, 'utf8');
    const parseArr = JSON.parse(array);
    const contact = createFakeContact();
    parseArr.push(contact);

    const data = JSON.stringify(parseArr);
    await fs.writeFile(PATH_DB, data, 'utf8');
    console.log('Дані успішно додані до файлу.');
  } catch (err) {
    console.error('Помилка додавання даних до файлу:', err);
  }
};

await addOneContact();

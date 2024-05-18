import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const array = await fs.readFile(PATH_DB, 'utf8');
    const parseArr = JSON.parse(array);
    for (let index = 1; index <= number; index += 1) {
      const contact = createFakeContact();
      parseArr.push(contact);
    }

    const data = JSON.stringify(parseArr);
    await fs.writeFile(PATH_DB, data, 'utf8');
    console.log('Дані успішно додані до файлу.');
  } catch (err) {
    console.error('Помилка додавання даних до файлу:', err);
  }
};

await generateContacts(5);

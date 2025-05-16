import { generateId } from '../utils.js';
import { STATUSES } from '../const.js';

export const initialHabits = [
  { id: generateId(), name: 'Бегать', description: 'Бег 4 километра под вечер.Полезная привычка', status: 'completed' },
  { id: generateId(), name: 'Работать',      description: '8 часов сидеть за стулом. Звонить аналитикам.Имитировать работу. Вредная привычка',            status: 'active' },
  { id: generateId(), name: 'Думать',        description: 'Непривычно много думал',               status: 'completed' },
];

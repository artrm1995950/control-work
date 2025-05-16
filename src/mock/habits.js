import { generateId } from '../utils.js';
import { STATUSES } from '../const.js';

export const initialHabits = [
  { id: generateId(), name: 'Утренняя зарядка', description: '10 минут упражнений', status: 'active' },
  { id: generateId(), name: 'Чтение книги',      description: '20 страниц',            status: 'completed' },
  { id: generateId(), name: 'Медитация',        description: '5 минут',               status: 'active' },
];

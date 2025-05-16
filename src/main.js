import HabitModel from './model/habit-model.js';
import { initialHabits } from './mock/habits.js';
import HabitFormPresenter from './presenter/habit-form-presenter.js';
import HabitListPresenter from './presenter/habit-list-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';
import { STATUSES } from './const.js';

const container = document.querySelector('.container');
const model = new HabitModel(initialHabits);

new HabitFormPresenter(container, model, STATUSES).init();

const listPresenter = new HabitListPresenter(container, model, STATUSES);
new FilterPresenter(container, listPresenter, STATUSES).init();
listPresenter.init();

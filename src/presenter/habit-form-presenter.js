import HabitFormComponent from '../view/habit-form-component.js';
import { render } from '../framework/render.js';
import { generateId } from '../utils.js';

export default class HabitFormPresenter {
  constructor(container, model, statuses) {
    this._container = container;
    this._model = model;
    this._view = new HabitFormComponent(statuses);

    this._view.getElement().addEventListener('submit', this._onSubmit.bind(this));
  }

  init() {
    render(this._container, this._view, 'afterbegin');
  }

  _onSubmit(evt) {
    evt.preventDefault();
    const form = this._view.getElement();
    const data = Object.fromEntries(new FormData(form).entries());
    this._model.addHabit({
      id: generateId(),
      name: data.name,
      description: data.description,
      status: data.status
    });
    form.reset();
  }
}

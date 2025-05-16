import HabitFormComponent from '../view/habit-form-component.js';
import { render } from '../framework/render.js';
import { generateId } from '../utils.js';

export default class HabitFormPresenter {
  constructor(container, model, statuses) {
    this.container = container;
    this.model = model;
    this.view = new HabitFormComponent(statuses);

    this.view.getElement().addEventListener('submit', this.onSubmit.bind(this));
  }

  init() {
    render(this.container, this.view, 'afterbegin');
  }

  onSubmit(evt) {
    evt.preventDefault();
    const form = this.view.getElement();
    const data = Object.fromEntries(new FormData(form).entries());
    this.model.addHabit({
      id: generateId(),
      name: data.name,
      description: data.description,
      status: data.status
    });
    form.reset();
  }
}

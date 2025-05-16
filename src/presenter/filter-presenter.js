import HabitFilterComponent from '../view/habit-filter-component.js';
import { render } from '../framework/render.js';

export default class FilterPresenter {
  constructor(container, listPresenter, statuses) {
    this.container = container;
    this.listPresenter = listPresenter;
    this.view = new HabitFilterComponent(statuses);
  }

  init() {
    render(this.container, this.view);
    this.view.setFilterChangeHandler(status => {
      this.listPresenter.applyFilter(status);
    });
  }
}

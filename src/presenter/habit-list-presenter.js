import { render } from '../framework/render.js';
import HabitListComponent from '../view/habit-list-component.js';
import HabitItemComponent from '../view/habit-item-component.js';

export default class HabitListPresenter {
  constructor(container, model) {
    this.container = container;
    this.model = model;
    this.listView = new HabitListComponent();
    this.currentFilter = 'all';

    this.model.addObserver(this.onModelChange.bind(this));
  }

  init() {
    render(this.container, this.listView);
    this.renderAll();
  }

  applyFilter(status) {
    this.currentFilter = status;
    this.renderAll();
  }

  onModelChange() {
    this.renderAll();
  }

  renderAll() {
    const listContainer = this.listView
      .getElement()
      .querySelector('#habit-list');
    listContainer.innerHTML = '';

    const items = this.model.filterHabits(this.currentFilter);
    items.forEach(habit => {
      const itemComp = new HabitItemComponent(habit);
      const el = itemComp.getElement();
      el.querySelector('.btn-delete').addEventListener('click', () => {
        this.model.deleteHabit(habit.id);
      });
      render(listContainer, itemComp);
    });
  }
}

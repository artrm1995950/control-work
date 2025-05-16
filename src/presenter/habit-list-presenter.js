import { render, replace } from '../framework/render.js';
import HabitListComponent from '../view/habit-list-component.js';
import HabitItemComponent from '../view/habit-item-component.js';

export default class HabitListPresenter {
  constructor(container, model, statuses) {
    this.container = container;
    this.model = model;
    this.statuses = statuses;
    this.listView = new HabitListComponent();
    this.currentFilter = 'all';

    this.model.addObserver(this.onModelChange.bind(this));
  }

  init() {
    render(this.container, this.listView);
    this.listView.getElement().addEventListener('click', this.handleClick.bind(this));
    this.renderAll();
  }

  onModelChange(updateType) {
    if (['ADD', 'DELETE', 'UPDATE'].includes(updateType)) {
      this.renderAll();
    }
  }

  renderAll() {
    const listContainer = this.listView
      .getElement()
      .querySelector('#habit-list');
    listContainer.innerHTML = '';

    this.model
      .filterHabits(this.currentFilter)
      .forEach(habit => {
        const itemComp = new HabitItemComponent(habit, this.statuses);
        render(listContainer, itemComp);
      });
  }

  handleClick(evt) {
    const btn = evt.target;
    const itemEl = btn.closest('.habit-item');
    if (!itemEl) return;
    const id = Number(itemEl.dataset.id);

    if (btn.classList.contains('btn-delete')) {
      this.model.deleteHabit(id);
    }
    else if (btn.classList.contains('btn-edit')) {
      const habit = this.model.habits.find(h => h.id === id);
      this.enterEditMode(itemEl, habit);
    }
    else if (btn.classList.contains('btn-save')) {
      const updated = {
        id,
        name: itemEl.querySelector('.edit-name').value,
        description: itemEl.querySelector('.edit-desc').value,
        status: itemEl.querySelector('.edit-status').value
      };
      this.model.updateHabit(updated);
    }
    else if (btn.classList.contains('btn-cancel')) {
      this.renderAll();
    }
  }

  enterEditMode(itemEl, habit) {
    const editComp = new HabitItemComponent(habit, this.statuses);
    editComp.isEditing = true;
    const newEl = editComp.getElement();
    replace(editComp, itemEl);
  }
  applyFilter(status) {
    this.currentFilter = status;
    this.renderAll();
  }
}
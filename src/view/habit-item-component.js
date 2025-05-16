import AbstractComponent from '../framework/view/abstract-component.js';

export default class HabitItemComponent extends AbstractComponent {
  constructor(habit) {
    super();
    this._habit = habit;
  }

  getTemplate() {
    const { id, name, description, status } = this._habit;
    return `
      <div class="habit-item" data-id="${id}">
        <h3>${name}</h3>
        <p class="description">${description}</p>
        <p class="status">${status === 'active' ? 'Активна' : 'Завершена'}</p>
        <button class="btn-delete">Удалить</button>
      </div>
    `;
  }
}

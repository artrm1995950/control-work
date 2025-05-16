import AbstractComponent from '../framework/view/abstract-component.js';

export default class HabitFilterComponent extends AbstractComponent {
  constructor(statuses) {
    super();
    this.statuses = ['all', ...statuses];
  }

  getTemplate() {
    return `
      <div class="habit-filter">
        <label for="status-filter">Статус:</label>
        <select id="status-filter">
          ${this.statuses.map(s => `
            <option value="${s}">
              ${s === 'all' ? 'Все' : s === 'active' ? 'Активные' : 'Завершённые'}
            </option>`).join('')}
        </select>
      </div>
    `;
  }

  setFilterChangeHandler(handler) {
    this.getElement()
      .querySelector('#status-filter')
      .addEventListener('change', evt => handler(evt.target.value));
  }
}

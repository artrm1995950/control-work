import AbstractComponent from '../framework/view/abstract-component.js';

export default class HabitFormComponent extends AbstractComponent {
  constructor(statuses) {
    super();
    this._statuses = statuses;
  }

  getTemplate() {
    return `
      <form class="habit-form">
        <h2>Новая привычка</h2>
        <label for="name">Название привычки:</label>
        <input type="text" id="name" name="name" placeholder="" required />

        <label for="description">Описание:</label>
        <textarea id="description" name="description" rows="3" placeholder="Описание привычки"></textarea>

        <label for="status">Статус:</label>
        <select id="status" name="status" required>
          ${this._statuses.map(s => `<option value="${s}">${s === 'active' ? 'Активна' : 'Завершена'}</option>`).join('')}
        </select>

        <button type="submit">Добавить</button>
      </form>
    `;
  }
}

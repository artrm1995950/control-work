import AbstractComponent from '../framework/view/abstract-component.js';

export default class HabitItemComponent extends AbstractComponent {
  constructor(habit, statuses) {
    super();
    this.habit = habit;
    this.statuses = statuses;
    this.isEditing = false;
  }

  getTemplate() {
    return this.isEditing ? this.getEditTemplate() : this.getViewTemplate();
  }

  getViewTemplate() {
    const { id, name, description, status } = this.habit;
    return `
      <div class="habit-item" data-id="${id}">
        <h3>${name}</h3>
        <p class="description">${description}</p>
        <p class="status">${status === 'active' ? 'Активна' : 'Завершена'}</p>
        <button class="btn-edit">Редактировать</button>
        <button class="btn-delete">Удалить</button>
      </div>
    `;
  }

  getEditTemplate() {
    return `
      <div class="habit-item editing" data-id="${this.habit.id}">
        <input type="text" name="name" class="edit-name" value="${this.habit.name}" required />
        <textarea name="description" class="edit-desc">${this.habit.description}</textarea>
        <select name="status" class="edit-status">
          ${this.statuses.map(s =>
            `<option value="${s}" ${s === this.habit.status ? 'selected' : ''}>
              ${s === 'active' ? 'Активна' : 'Завершена'}
            </option>`
          ).join('')}
        </select>
        <button class="btn-save">Сохранить</button>
        <button class="btn-cancel">Отмена</button>
      </div>
    `;
  }

  getElement() {
    this.removeElement();
    return super.getElement();
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
    this.removeElement();
  }
}

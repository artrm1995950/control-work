import AbstractComponent from '../framework/view/abstract-component.js';

export default class HabitListComponent extends AbstractComponent {
  getTemplate() {
    return `<div class="habit-list"><h2>Список привычек</h2><div id="habit-list"></div></div>`;
  }
}

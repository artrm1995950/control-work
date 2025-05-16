export default class AbstractComponent {
  constructor() {
    if (new.target === AbstractComponent) {
      throw new Error('Cannot instantiate AbstractComponent directly');
    }
    this._element = null;
  }

  getTemplate() {
    throw new Error('Method getTemplate() must be implemented in subclass');
  }

  getElement() {
    if (!this._element) {
      const temp = document.createElement('div');
      temp.innerHTML = this.getTemplate();
      this._element = temp.firstElementChild;
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}

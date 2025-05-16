export const render = (container, component, place = 'beforeend') => {
  container.insertAdjacentElement(place, component.getElement());
};

export const replace = (newComponent, oldElement) => {
  const newElement = newComponent.getElement();
  const parent = oldElement.parentNode;
  if (parent && newElement) {
    parent.replaceChild(newElement, oldElement);
  }
};

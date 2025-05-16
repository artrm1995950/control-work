export const render = (container, component, place = 'beforeend') => {
  container.insertAdjacentElement(place, component.getElement());
};

export default class HabitModel {
  constructor(habits = []) {
    this.habits = habits;
    this.observers = [];
  }

  addObserver(fn) {
    this.observers.push(fn);
  }

  notify(updateType, data) {
    this.observers.forEach(obs => obs(updateType, data));
  }

  addHabit(habit) {
    this.habits = [habit, ...this.habits];
    this.notify('ADD', habit);
  }

  deleteHabit(id) {
    this.habits = this.habits.filter(h => h.id !== id);
    this.notify('DELETE', id);
  }

  updateHabit(update) {
    this.habits = this.habits.map(h =>
      h.id === update.id ? Object.assign({}, h, update) : h
    );
    this.notify('UPDATE', update);
  }

  filterHabits(status) {
    return status === 'all'
      ? this.habits
      : this.habits.filter(h => h.status === status);
  }
}

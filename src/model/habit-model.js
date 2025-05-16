export default class HabitModel {
  constructor(habits = []) {
    this._habits = habits;
    this._observers = [];
  }

  get habits() {
    return this._habits;
  }

  addObserver(fn) {
    this._observers.push(fn);
  }

  _notify(updateType, data) {
    this._observers.forEach(obs => obs(updateType, data));
  }

  addHabit(habit) {
    this._habits = [habit, ...this._habits];
    this._notify('ADD', habit);
  }

  deleteHabit(id) {
    this._habits = this._habits.filter(h => h.id !== id);
    this._notify('DELETE', id);
  }

  filterHabits(status) {
    return status === 'all'
      ? this._habits
      : this._habits.filter(h => h.status === status);
  }
}

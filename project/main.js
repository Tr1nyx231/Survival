class ItcSimpleSlider {
  // конструктор
  constructor(target, config) {
    // ...
  }
  // добавляет класс к активным элементам и управляет видимостью кнопок управления
  _setActiveClass() {
    // ...
  }
  // выполняет смену слайдов
  _move(useTransition) {
    // ...
  }
  // функция для перемещения к слайду по индексу
  _moveTo(index, useTransition) {
    // ...
  }
  // метод для автоматической смены слайдов
  _autoplay = function (action) {
    // ...
  }
  // добавляет в разметку индикаторы
  _addIndicators() {
    // ...
  }
  // refresh extreme values (обновляет значения переменных, содержащих экстремальные значения слайдов)
  _refreshExtremeValues() {
    // ...
  }
  // balancing items (уравновешивает слайды (для зацикленности)
  _balancingItems() {
    // ...
  };
  // adding listeners (назначаем обработчики для событий)
  _addEventListener() {
    // ...
  }
  // перейти к следующему слайду
  next() {
    // ...
  }
  // перейти к предыдущему слайду
  prev() {
    // ...
  }
  // управление автоматической сменой слайдов
  autoplay(action) {
    // ...
  }
  moveTo(index, useTransition) {
    // ...
  }
}
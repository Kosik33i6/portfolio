import {select, classNames} from '../settings.js';

class themeWidget {
  constructor(element) {

    this.getElements(element);
  }

  getElements(element) {
    this.elements = {};
    this.elements.widget = element;
    this.elements.btnSettingsBox = element.querySelector(select.widgets.theme.btnSettingsBox);
    this.elements.btnSettings = this.elements.btnSettingsBox.querySelector(select.widgets.theme.btnSettings);
    this.elements.optionsBox = this.elements.widget.querySelector(select.widgets.theme.optionsBox);
    this.elements.radioButtons = Array.from(element.querySelectorAll(select.widgets.theme.radioButtons));
  }

  show() {
    this.elements.optionsBox.classList.toggle(classNames.widgets.theme.moveFromRight);
    this.elements.btnSettings.classList.toggle(classNames.widgets.theme.rotate);
    this.elements.widget.classList.toggle(classNames.widgets.theme.visible);

    const MILISECONDS_TO_ADD_CLASS = 400;
    setTimeout(() => {
      this.elements.widget.classList.toggle(classNames.widgets.theme.active);
    }, MILISECONDS_TO_ADD_CLASS);
  }

  hide(event) {
    const clikedElement = event.target;

    const isClickedElementAWidget = clikedElement.closest(select.widgets.theme.element);

    if(isClickedElementAWidget) return;

    const isWidgetOptionsBoxContainCorrectClass = Array.from(this.elements.optionsBox.classList).includes(classNames.widgets.theme.moveFromRight);

    if(isWidgetOptionsBoxContainCorrectClass) {
      this.elements.optionsBox.classList.remove(classNames.widgets.theme.moveFromRight);
      this.elements.btnSettings.classList.remove(classNames.widgets.theme.rotate);

      const MILISECONDS_TO_REMOVE_CLASS = 600;
      setTimeout(() => {
        this.elements.widget.classList.remove(classNames.widgets.theme.active);
        this.elements.widget.classList.remove(classNames.widgets.theme.visible);
      }, MILISECONDS_TO_REMOVE_CLASS);
    }
  }

  swichTheme() {
    const radioButtonValue = this.value;
    const HTMLElement = document.querySelector(select.document);

    HTMLElement.dataset.theme = radioButtonValue;
  }

  initActions() {
    this.elements.btnSettings.addEventListener('click', this.show.bind(this));
    document.addEventListener('click', this.hide.bind(this));
    this.elements.radioButtons.forEach(radioButton => {
      radioButton.addEventListener('change', this.swichTheme);
    });
  }
}

export default themeWidget;

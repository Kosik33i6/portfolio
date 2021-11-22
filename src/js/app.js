import themeWidget from './components/themeWidget.js';
import { select } from './settings.js';


const app = {

  initColorThemeWidget: function() {
    const widget = document.querySelector(select.widgets.theme.element);
    const colorThemeWidget = new themeWidget(widget);
    colorThemeWidget.initActions();
  },

  init: function() {
    this.initColorThemeWidget();
  }
};

app.init();

import init from "../_utils/plugin-init";

class ProgressBar {
  constructor(element, options) {
    this._defaults = {
      valueAttribute: "data-progress-value",
      barSelector: ".progress-bar__bar"
    };

    this.element = element;
    this.options = Object.assign({}, this._defaults, options);

    this.init();
  }

  init() {
    this.buildCache();
    this.setBarWidth();
  }

  buildCache() {
    this.bar = this.element.querySelector(this.options.barSelector);
    this.value = this.element.getAttribute(this.options.valueAttribute) || 0;
  }

  setBarWidth() {
    this.bar.style.width = this.value * 100 + "%";
  }
}

export default init(ProgressBar);

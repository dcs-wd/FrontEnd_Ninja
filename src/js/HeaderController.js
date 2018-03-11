export class HeaderController {
  constructor(selector, appController) {
    this.element = document.querySelector(selector);
    this.element
      .querySelector(".add-article")
      .addEventListener("click", event => {
        appController.toggleForm();
      });
  }
}

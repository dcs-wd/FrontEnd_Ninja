export class AppController {
  constructor(selector, pubSub) {
    this.element = document.querySelector(selector);
    pubSub.subscribe("article:created", (event, article) => {
      console.log("AppController", article);
      this.toggleForm();
    });
  }

  toggleForm() {
    this.element.classList.toggle("show-form");
  }
}

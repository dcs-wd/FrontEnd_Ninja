

export class HeaderController {

    constructor(selector, appController) {
        this.element = document.querySelector(selector);
        this.element.querySelector('.fa').addEventListener("click", event => {
            appController.toggleForm();
        });
    }

}

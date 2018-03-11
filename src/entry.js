import css from "./scss/style.scss";
import { ArticlesListController } from "./js/ArticlesListController";
import { AppController } from "./js/AppController";
import { HeaderController } from "./js/HeaderController";
import { FormController } from "./js/FormController";
import { ArticlesService } from "./js/ArticlesService";
import { PubSub } from "pubsub-js";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

document.addEventListener("DOMContentLoaded", () => {
  let appController = new AppController("body", PubSub);
  let headerController = new HeaderController(".web-header", appController);

  let articlesService = new ArticlesService("http://localhost:3001/articles/");

  let articlesListController = new ArticlesListController(
    ".articles-list",
    articlesService,
    PubSub
  );
  articlesListController.loadArticles();

  let formController = new FormController(
    ".articles-form",
    articlesService,
    PubSub
  );
});

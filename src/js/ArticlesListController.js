export class ArticlesListController {
  constructor(selector, articlesService, pubSub) {
    this.element = document.querySelector(selector);
    this.articlesService = articlesService;
    pubSub.subscribe("article:created", (event, article) => {
      console.log("ArticlesListController", article);
      this.loadArticles();
    });
  }

  showLoadingMessage() {
    this.element.innerHTML = '<div class="loading">Cargando...</div>';
  }

  showErrorMessage() {
    this.element.innerHTML =
      '<div class="error">Se ha producido un error</div>';
  }

  showNoArticlesMessage() {
    this.element.innerHTML = '<div class="info">No hay ninguna canción</div>';
  }

  renderArticles(articles) {
    let html = "";
    for (let article of articles) {
      html += `<article class="article">
                <div class="cover">
                    <img src="${article.cover}" alt="${article.blogger} - ${
        article.title
      }">
                </div>
                <div class="info">
                    <div class="title">${article.title}</div>
                    <div class="artist">${article.blogger}</div>
                    <div class="text">${article.text}</div>
                </div>
            </article>`;
    }
    this.element.innerHTML = html;
  }

  loadArticles() {
    this.showLoadingMessage();
    this.articlesService
      .list()
      .then(articles => {
        if (articles.length == 0) {
          this.showNoArticlesMessage();
        } else {
          this.renderArticles(articles);
        }
      })
      .catch(error => {
        console.error("ERROR RETRIEVING ARTICLES", error);
        this.showErrorMessage();
      });
  }
}

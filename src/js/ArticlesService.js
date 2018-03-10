export class ArticlesService {
  constructor(url) {
    this.url = url;
  }

  async list() {
    const response = await fetch(this.url);
    return response.json();
  }

  async save(article) {
    const response = await fetch(this.url, {
      method: "post",
      body: JSON.stringify(article),
      headers: {
        "Content-Type": "application/json"
      }
    });
    return response.json();
  }
}

import { RESTDataSource } from 'apollo-datasource-rest';

class PostsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://jsonplaceholder.typicode.com/posts';
  }

  async getPosts() {
    const data = await this.get('/');
    return data;
  }
}

module.exports = PostsAPI;
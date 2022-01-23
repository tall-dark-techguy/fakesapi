import Post from "./posts.interface";
import axios from "axios";

export default class PostsService {
  private readonly api_url = "https://jsonplaceholder.typicode.com";

  async fetchPosts(): Promise<[]> {
    const res = await axios.get(`${this.api_url}/posts`);
    return res.data;
  }

  async fetchPost(id: number): Promise<{}> {
    const res = await axios.get(`${this.api_url}/posts/${id}`);
    return res.data;
  }
}

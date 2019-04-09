import { Request, Response, Router } from "express";
import Post from "../models/Post";
Post;

class PostRouter {
  router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  async getPosts(req: Request, res: Response) {
    const posts = await Post.find();
    res.json(posts);
  }

  async getPost(req: Request, res: Response) {
    const posts = await Post.findOne({ url: req.params.url });
    console.log(`resquest params ${req.params.url}`);
    res.json(posts);
  }

  async creatPost(req: Request, res: Response) {
    const { title, url, content, image } = req.body;
    const newPost = new Post({ title, url, content, image });
    await newPost.save();
    console.log(`newPost ${newPost}`);
    res.json({ data: newPost });
  }

  updatePost(req: Request, res: Response) {
    console.log(`url parameter ${req.params.url}`);
    console.log(`param data ${req.body}`);
    res.json("good is god");
  }

  deletePost() {}

  routes() {
    this.router.get("/", this.getPosts);
    this.router.get("/:url", this.getPost);
    this.router.post("/", this.creatPost);
    this.router.put("/:url", this.updatePost);
    this.router.delete("/:url", this.deletePost);
  }
}

const postRoutes = new PostRouter();
export default postRoutes.router;

import express, { Request, Response } from 'npm:express@4.18.2';

import articles from './articles.json' assert { type: 'json' };

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.json(articles.posts);
});

router.get('/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  // without the `+` the id from url is string
  const art = articles.posts.find((article) => article.id === +id);
  res.json(art);
});

export default router;

// @deno-types="npm:@types/express@4.17.15"
import express, {
  Request,
  Response,
  RequestHandler,
  NextFunction, // This was just a wild guest, but it seem to work
} from 'npm:express@4.18.2';

// Routes
import articlesRoutes from './routes/articles.ts';

const app = express();
const port = 3000;

// Timelog
const timeLog: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('Time: ', Date.now());
  next();
};
app.use(timeLog);

app.use('/articles', articlesRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.post('/', (req: Request, res: Response) => {
  res.send('Got a POST request');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

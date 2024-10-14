import dotenv from 'dotenv';
import express, {Express, Request, Response} from 'express';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  const {message} = req.body;
  res.send(message);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

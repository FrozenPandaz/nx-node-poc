import * as express from 'express';
import { dataController } from './app/data.controller';
const app = express();

dataController(app);

app.listen(3000);

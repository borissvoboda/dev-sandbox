// const express = require('express'); //no autocomplete!
import express, { Request, Response, NextFunction } from 'express'; // ES modules in browsers
import { json } from 'body-parser';

import todoRoutes from './routes/todos';

const app = express();
app.use(json());

app.use('/todos', todoRoutes);

// app.use((req, res, next) => {});
// alt function - error handling middleware f
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000);

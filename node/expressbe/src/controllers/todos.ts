// import { Request, Response, NextFunction } from 'express';
import { RequestHandler } from 'express';
import { json } from 'body-parser'; // will parse and extract

import { Todo } from '../models/todos'; // class, automatically act as a type

const TODOS = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo);

  res.status(201).json({ message: 'Created the todo.', crteatedTodo: newTodo });
};

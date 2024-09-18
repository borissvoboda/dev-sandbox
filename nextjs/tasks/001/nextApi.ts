// pages/api/users.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    // return list
    const users = [
      { id: 1, name: 'Adam Smith' },
      { id: 2, name: 'Ben Jones' },
    ];
    return res.status(200).json(users);
  } else if (req.method === 'POST') {
    // create a new record
    const newUser = req.body;
    return res.status(201).json({ message: 'User created', user: newUser });
  }
  return res.status(405).json({ message: 'Method not allowed' });
}

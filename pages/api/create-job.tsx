import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

type Data = {
  message: string,
  data: any
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  if (req.method !== 'POST') return;

  const data = req.body;
  const client = await MongoClient.connect('mongodb+srv://codezero:Strawhat01@cluster0.b5hgy.mongodb.net/jobs?retryWrites=true&w=majority');
  const db = client.db();
  const jobsCollection = db.collection('jobs');
  const result = await jobsCollection.insertOne(data);
  console.log(result);

  client.close();
  res.status(201).json({message : 'Job created', data: result});
}

export default handler;

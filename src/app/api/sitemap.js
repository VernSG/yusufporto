import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.resolve('public', 'sitemap.xml');
  res.setHeader('Content-Type', 'application/xml');
  res.status(200).sendFile(filePath);
}

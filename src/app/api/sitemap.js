import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.resolve('public', 'sitemap.xml');
  const sitemap = fs.readFileSync(filePath, 'utf8');
  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(sitemap);
}

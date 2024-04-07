import fs from 'fs';
import path from 'path';

export default defineEventHandler(async (event) => {
  const body = await readFormData(event)
  const slugUrl = body.getAll('slug')[0] + '.md';
  const filePath = path.join(process.cwd(), 'content', 'blog', slugUrl);
  fs.writeFile(filePath, 
`---
title: ${body.getAll('title')[0]}
date_published: ${body.getAll('date_published')[0]}
description: ${body.getAll('description')[0]}
image: https://picsum.photos/200
alt: ${body.getAll('description')[0]}
ogImage: https://picsum.photos/200
tags: ['chat', 'real-time', 'socket.io']
published: true
slug: ${body.getAll('slug')[0]}
---

${body.getAll('content')[0]}`, { encoding: 'utf8' }, (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('Body saved as', filePath);
    }
  });

  return {
    statusCode: 200,
    body: 'Body saving operation started',
    headers: {
      'Content-Type': 'text/plain',
    },
  };
})

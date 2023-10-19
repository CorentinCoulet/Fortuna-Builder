// import express from 'express';
// import { createProxyMiddleware } from 'http-proxy-middleware';

// const app = express();

// const target = 'https://wakfu.cdn.ankama.com/gamedata';
// app.use('/api', createProxyMiddleware({ target, changeOrigin: true }));

// // Ajoutez les en-têtes CORS pour autoriser les requêtes depuis n'importe quel domaine
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

//   if (req.method === 'OPTIONS') {
//     res.sendStatus(200); // Réponse pré-vol
//   } else {
//     next();
//   }
// });

// const port = 3000;
// app.listen(port, () => {
//   console.log(`Proxy server is running on port ${port}`);
// });

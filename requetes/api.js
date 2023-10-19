// const baseUrl = 'https://wakfu.cdn.ankama.com/gamedata';
const baseUrl = 'http://localhost:3000/api';
const versionUrl = `${baseUrl}/config.json`;

// fetch(versionUrl)
//   .then(response => response.json())
//   .then(data => {
//     const versionCourante = data.version;
//     console.log(versionCourante);
//   })
//   .catch(error => {
//     console.error('Erreur lors de la récupération de la version :', error);
//   });

// document.querySelector('#random-quote button').addEventListener('click', () => {
//     // Envoi d'une requête vers l'API
//     fetch(`${baseUrl}/quote/random`).then(response => response.json()).then(response => {
      
//     });
// });
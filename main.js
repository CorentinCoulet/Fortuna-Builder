const url = 'https://wakfu.cdn.ankama.com/gamedata/1.81.1.13/items.json';

async function telechargerFichierJSON() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération du fichier JSON');
    }
    const jsonData = await response.json();  

    for(const data of jsonData) {
      const a = document.createElement("a")
      a.src = data.jsp
      a.innerText = data.jsp2
      document.body.appendChild(a)
    }
  } catch (error) {
    console.error('Erreur :', error);
  }
}

await telechargerFichierJSON();

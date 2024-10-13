import axios from 'axios';

async function downloadImages() {
  try {
    const response = await axios.post('http://localhost:3000/equipment/download-images');
    
    if (response.status === 200) {
      console.log(response.data.message);
    } else {
      console.error('Erreur lors du téléchargement des images');
    }
  } catch (error) {
    console.error('Erreur lors de l\'appel API:', error.message);
  }
}

downloadImages();
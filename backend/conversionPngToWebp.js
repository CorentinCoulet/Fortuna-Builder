const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const pLimit = require('p-limit');

const inputDir = path.resolve(process.cwd(), './items');

const outputDir = path.resolve(process.cwd(), './itemsWebp');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const limit = pLimit(5);

async function convertToWebP(inputFilePath, outputFilePath) {
  try {
    if (fs.existsSync(outputFilePath)) {
      console.log(`Le fichier ${outputFilePath} existe déjà, conversion ignorée.`);
      return;
    }

    await sharp(inputFilePath)
      .toFormat('webp')
      .toFile(outputFilePath);

    console.log(`Conversion réussie : ${outputFilePath}`);
  } catch (error) {
    console.error(`Erreur lors de la conversion de ${inputFilePath} :`, error);
  }
}

async function convertAllPngToWebp() {
  try {
    const files = fs.readdirSync(inputDir);
    const pngFiles = files.filter(file => path.extname(file).toLowerCase() === '.png');

    if (pngFiles.length === 0) {
      return console.log('Aucun fichier PNG trouvé.');
    }

    const tasks = pngFiles.map(file => {
      const inputFilePath = path.join(inputDir, file);
      const outputFilePath = path.join(outputDir, `${path.basename(file, '.png')}.webp`);
      return limit(() => convertToWebP(inputFilePath, outputFilePath));
    });

    await Promise.all(tasks);

    console.log(`Conversion terminée : ${pngFiles.length} fichiers PNG traités.`);
  } catch (err) {
    console.error(`Erreur lors du traitement : ${err.message}`);
  }
}

convertAllPngToWebp();

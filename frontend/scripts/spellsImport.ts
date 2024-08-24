import { readdirSync, writeFileSync, statSync } from 'fs';
import { dirname, join } from 'path';

const __dirname = dirname(__filename);

const baseDir = join(__dirname, '../src/assets/sorts');

function generateSpellsImports(baseDir: string): string {
    const categories = readdirSync(baseDir);
    let output = '';

    categories.forEach(category => {
        const categoryPath = join(baseDir, category);
        if (statSync(categoryPath).isDirectory()) {
            const files = readdirSync(categoryPath);
            const imports: { [key: string]: Array<{ name: string; path: string }> } = {};

            files.forEach(file => {
                const filePath = join(categoryPath, file);
                if (statSync(filePath).isFile()) {
                    const parts = file.split('-');
                    if (parts.length === 2) {
                        const [element, positionWithExt] = parts;
                        const position = positionWithExt.split('.')[0];
                        const importName = `${category.charAt(0).toUpperCase() + category.slice(1)}${element.charAt(0).toUpperCase() + element.slice(1)}${position}`;
                        const importPath = `./assets/sorts/${category}/${file}`;

                        if (!imports[element]) {
                            imports[element] = [];
                        }

                        imports[element].push({ name: importName, path: importPath });
                    }
                }
            });

            output += `// ${category.charAt(0).toUpperCase() + category.slice(1)}\n`;
            for (const element in imports) {
                imports[element].forEach(importObj => {
                    output += `import ${importObj.name} from '${importObj.path}';\n`;
                });
            }

            output += `\nexport const ${category.charAt(0).toUpperCase() + category.slice(1)}Spells = {\n`;
            for (const element in imports) {
                output += `    ${element}: {\n`;
                imports[element].forEach(importObj => {
                    const positionNumber = importObj.name.replace(category.charAt(0).toUpperCase() + category.slice(1) + element.charAt(0).toUpperCase() + element.slice(1), '');
                    output += `        ${positionNumber}: { src: ${importObj.name}, alt: '' },\n`;
                });
                output += `    },\n`;
            }
            output += `};\n\n`;
        }
    });

    return output;
}

const generatedCode = generateSpellsImports(baseDir);
writeFileSync(join(__dirname, 'generateSpellsImports.ts'), generatedCode);

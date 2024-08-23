"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
var __dirname = (0, path_1.dirname)(__filename);
var baseDir = (0, path_1.join)(__dirname, '../src/assets/sorts');
function generateSpellsImports(baseDir) {
    var categories = (0, fs_1.readdirSync)(baseDir);
    var output = '';
    categories.forEach(function (category) {
        var categoryPath = (0, path_1.join)(baseDir, category);
        if ((0, fs_1.statSync)(categoryPath).isDirectory()) {
            var files = (0, fs_1.readdirSync)(categoryPath);
            var imports_1 = {};
            files.forEach(function (file) {
                var filePath = (0, path_1.join)(categoryPath, file);
                if ((0, fs_1.statSync)(filePath).isFile()) {
                    var parts = file.split('-');
                    if (parts.length === 2) {
                        var element = parts[0], positionWithExt = parts[1];
                        var position = positionWithExt.split('.')[0];
                        var importName = "".concat(category.charAt(0).toUpperCase() + category.slice(1)).concat(element.charAt(0).toUpperCase() + element.slice(1)).concat(position);
                        var importPath = "./assets/sorts/".concat(category, "/").concat(file);
                        if (!imports_1[element]) {
                            imports_1[element] = [];
                        }
                        imports_1[element].push({ name: importName, path: importPath });
                    }
                }
            });
            output += "// ".concat(category.charAt(0).toUpperCase() + category.slice(1), "\n");
            for (var element in imports_1) {
                imports_1[element].forEach(function (importObj) {
                    output += "import ".concat(importObj.name, " from '").concat(importObj.path, "';\n");
                });
            }
            output += "\nexport const ".concat(category.charAt(0).toUpperCase() + category.slice(1), "Spells = {\n");
            var _loop_1 = function (element) {
                output += "    ".concat(element, ": {\n");
                imports_1[element].forEach(function (importObj) {
                    var positionNumber = importObj.name.replace(category.charAt(0).toUpperCase() + category.slice(1) + element.charAt(0).toUpperCase() + element.slice(1), '');
                    output += "        ".concat(positionNumber, ": { src: ").concat(importObj.name, ", alt: '' },\n");
                });
                output += "    },\n";
            };
            for (var element in imports_1) {
                _loop_1(element);
            }
            output += "};\n\n";
        }
    });
    return output;
}
var generatedCode = generateSpellsImports(baseDir);
(0, fs_1.writeFileSync)((0, path_1.join)(__dirname, 'generateSpellsImports.ts'), generatedCode);

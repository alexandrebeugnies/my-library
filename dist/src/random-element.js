"use strict";
//* * Récupère un élément aléatoire dans le tableau */
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomElement = void 0;
function randomElement(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}
exports.randomElement = randomElement;

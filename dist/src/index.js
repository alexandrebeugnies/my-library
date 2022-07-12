"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomQuote = void 0;
/* eslint-disable import/prefer-default-export */
const citations_js_1 = require("./citations.js");
const random_element_js_1 = require("./random-element.js");
//* * Récupère une citation aléatoire de TRIPTYK  **/
function getRandomQuote() {
    return (0, random_element_js_1.randomElement)(citations_js_1.quotes);
}
exports.getRandomQuote = getRandomQuote;

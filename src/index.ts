/* eslint-disable import/prefer-default-export */
import { quotes } from './citations.js'
import { randomElement } from './random-element.js'
//* * Récupère une citation aléatoire de TRIPTYK  **/

export function getRandomQuote () {
  return randomElement(quotes)
}

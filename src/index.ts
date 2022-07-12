/* eslint-disable import/prefer-default-export */
import { quotes } from './citations.ts';
import { randomElement } from './random-element.ts';
//* * Récupère une citation aléatoire de TRIPTYK  **/

export function getRandomCitation() {
  return randomElement(quotes);
}

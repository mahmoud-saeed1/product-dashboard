/**
 *
 * @param {string} txt - The input text to be sliced
 * @param {number} [maxLenght=50] - Max lenght before slicing
 * @returns {string} - The sliced text with (...) at the end of the text
 */

import { categories } from "../data";

export function textSlicer(txt: string, maxLenght: number = 50) {
  if (txt.length > maxLenght) return `${txt.slice(0, maxLenght)}...`;
  return txt;
}

export function findCategoryIndex(targetCategoryName: string): number {
  return categories.findIndex(
    (category) => category.name === targetCategoryName
  );
}


export function numberWithCommas(x: string): string {
  return x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
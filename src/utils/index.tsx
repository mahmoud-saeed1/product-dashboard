/**
 *
 * @param {string} txt - The input text to be sliced
 * @param {number} [maxLenght=50] - Max lenght before slicing
 * @returns {string} - The sliced text with (...) at the end of the text
 */

export function textSlicer(txt: string, maxLenght: number = 50) {
  if (txt.length > maxLenght) return `${txt.slice(0, maxLenght)}...`;
  return txt;
}

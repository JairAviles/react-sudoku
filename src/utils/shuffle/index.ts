/**
 * An array shuffling using the Fisher-Yates shuffle algorithm
 * @param array An array that you want to shuffle
 */

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const shuffle = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

export default shuffle;

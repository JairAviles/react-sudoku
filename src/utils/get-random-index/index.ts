/**
 *
 * @returns random Sudoku grid index in the 0 - 8 range
 */
const getRandomIndex = () => {
  return Math.floor(Math.random() * 9)
}

export default getRandomIndex

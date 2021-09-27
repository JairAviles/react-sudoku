import { GRID } from 'typings'

/**
 *
 * @param grid A function to check if the grid is full
 * @returns A 9x9 Sudoku Grid
 */
const checkGrid = (grid: GRID): boolean => {
  for (let i = 0; i < 9; i++)
    for (let j = 0; j < 9; j++)
     if (grid[i][j] === 0)
      return false
  return true
}

export default checkGrid

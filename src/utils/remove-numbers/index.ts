import global from 'global'
import { GRID } from 'typings'
import { copyGrid, getRandomeIndex, solveGrid } from 'utils'

/**
 * Removes numbers from a full grid to create a Sudoku Puzzle.
 * @param grid 9x9 Sudoku grid
 * @param attempts number of attempts to solve (higher means more difficult) - default 5
 * @returns updated grid
 */
const removeNumbers = (grid : GRID, attempts = 5): GRID => {
  while (attempts > 0) {
    let row = getRandomeIndex()
    let col = getRandomeIndex()

    while(grid[row][col] === 0) {
      row = getRandomeIndex()
      col = getRandomeIndex()
    }

    const backup = grid[row][col]
    grid[row][col] = 0

    // copy grid
    const gridCopy = copyGrid(grid)
    // set a global counter
    global.counter = 0
    // attempt to solve the grid
    solveGrid(gridCopy)

    // if global counter is not 1
    // grid[row][col] = backup
    // decrement attempts
    if (global.counter !== 1) {
      grid[row][col] = backup
      attempts--
    }
  }
  return grid
}

export default removeNumbers

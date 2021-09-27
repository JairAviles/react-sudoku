import { GRID, NUMBERS } from "typings";

interface IInput {
    col: number,
    grid: GRID,
    value: NUMBERS
}

/**
 *
 * @param param0 Object with 9x9 Sudoku Grid, col index, and value
 * @returns true if the value is already being used
 */
const isInCol = ({ col, grid, value }: IInput): boolean => {
    for (let i = 0; i < 9; i++) if (value === grid[i][col])return true;
    return false;
}

export default isInCol;

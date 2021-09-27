import { GRID, NUMBERS } from "typings";

interface IInput {
    grid: GRID,
    row: number,
    value: NUMBERS
}

/**
 *
 * @param input Object with 9x9 Sudoku Grid, row index, and value
 * @returns true if the value is already being used in current grid row.
 */
const isInRow = ({ grid, row, value }: IInput): boolean => {
    return grid[row].includes(value);
}

export default isInRow;
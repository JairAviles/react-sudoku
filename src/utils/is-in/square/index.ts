import { NUMBERS, SQUARE } from "typings";

interface IInput {
  square: SQUARE,
  value: NUMBERS
}

/**
 *
 * @param param0 Object with 3x3 square and value
 * @returns true if the value is already being used in the current grid square
 */
const isInSquare = ({ square, value }: IInput): boolean => {
  return [...square[0], ...square[1], ...square[2]].includes(value)
}

export default isInSquare;

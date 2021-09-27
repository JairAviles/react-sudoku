import { AnyAction } from 'redux'

import { compareArrays, copyGrid, createFullGrid, removeNumbers } from 'utils'

import { IReducer } from './interface'
import * as types from './types'

const initialState: IReducer = {}

const reducer = (state = initialState, action: AnyAction): IReducer => {
  switch(action.type) {
    case types.CREATE_GRID:
      const solvedGrid = createFullGrid()
      const gridCopy = copyGrid(solvedGrid)
      const challengeGrid = removeNumbers(gridCopy)
      const workingGrid = copyGrid(challengeGrid)

      return {
        ...state,
        challengeGrid,
        solvedGrid,
        workingGrid
      }
    case types.FILL_BLOCK: {
      if (state.workingGrid && state.solvedGrid) {
        if (
          state.solvedGrid[action.coords[0]][action.coords[1]] !== action.value
        ) {
          alert('Incorrect Option!');
          return state
        }
        state.workingGrid[action.coords[0]][action.coords[1]] = action.value
        if (compareArrays(state.workingGrid, state.solvedGrid))
          alert('Completed!')
        return { ...state, workingGrid: [...state.workingGrid]}
      }
      return state
    }
    case types.SELECT_BLOCK:
      return {
        ...state,
        selectedBlock: action.coords
      }
    default:
      return state
  }
}

export default reducer

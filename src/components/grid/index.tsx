import React, { FC, useCallback, useEffect } from 'react';
import useMousetrap from 'react-hook-mousetrap'
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

import { createGrid, fillBlock, IReducer, selectBlock } from 'reducers';
import { BLOCK_COORDS, GRID, INDEX, N, NUMBERS } from 'typings'

import Block from './block';
import { Container, Row } from './styles';

interface IState {
  selectedBlock?: BLOCK_COORDS
  selectedValue: N
  solvedGrid?: GRID
}

const Grid: FC = () => {
  const state = useSelector<IReducer, IState>(({ selectedBlock, solvedGrid, workingGrid }) => ({
    selectedBlock,
    selectedValue: workingGrid && selectedBlock ?
      workingGrid[selectedBlock[0]][selectedBlock[1]]
    : 0,
    solvedGrid,
   }))
  const dispatch = useDispatch<Dispatch<AnyAction>>()
  const create = useCallback(() => dispatch(createGrid()), [dispatch])

  const fill = useCallback((n: NUMBERS ) => {
    if (state.selectedBlock && state.selectedValue === 0) {
      dispatch(fillBlock(n, state.selectedBlock))
    }
  },
  [dispatch, state.selectedBlock, state.selectedValue])

    const moveDown = () => {
      if (state.selectedBlock && state.selectedBlock[0] < 8)
      dispatch(
        selectBlock([
          (state.selectedBlock[0] + 1) as INDEX,
          state.selectedBlock[1]
        ])
      )
    }

    const moveLeft= () => {
      if (state.selectedBlock && state.selectedBlock[1] > 0)
      dispatch(
        selectBlock([
          state.selectedBlock[0],
          (state.selectedBlock[1] - 1) as INDEX
        ])
      )
    }

    const moveRight = () => {
      if (state.selectedBlock && state.selectedBlock[1] < 8)
      dispatch(
        selectBlock([
          state.selectedBlock[0],
          (state.selectedBlock[1] + 1) as INDEX
        ])
      )
    }

    const moveUp = () => {
      if (state.selectedBlock && state.selectedBlock[0] > 0)
      dispatch(
        selectBlock([
          (state.selectedBlock[0] - 1) as INDEX,
          state.selectedBlock[1]
        ])
      )
    }

    useMousetrap('1', () => fill(1))
    useMousetrap('2', () => fill(2))
    useMousetrap('3', () => fill(3))
    useMousetrap('4', () => fill(4))
    useMousetrap('5', () => fill(5))
    useMousetrap('6', () => fill(6))
    useMousetrap('7', () => fill(7))
    useMousetrap('8', () => fill(8))
    useMousetrap('9', () => fill(9))
    useMousetrap('down', moveDown)
    useMousetrap('left', moveLeft)
    useMousetrap('right', moveRight)
    useMousetrap('up', moveUp)

    useEffect(() => { // onComponentDidMount
      // do something when component rerenders
      if (!state.solvedGrid) create()
    }, [create, state.solvedGrid])

    return (
        <Container data-cy="grid-container">
          {[...Array(9)].map((_, rIndex) => (
            <Row data-cy="grid-row-container" key={rIndex}>
              {[...Array(9)].map((_, cIndex) => (
                <Block key={cIndex} colIndex={cIndex as INDEX} rowIndex={rIndex as INDEX}></Block>
              ))}
            </Row>
          ))}
        </Container>
    )
}

export default Grid;

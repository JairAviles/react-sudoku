import createFullGrid from './'

describe('createFullGrid', () => {
  it('return a 9x9 grid with value range 1 to 9', () => {
    const grid = createFullGrid()

    for (const row in grid)
      for (const col in grid[row]) {
        expect(grid[row][col]).toBeGreaterThanOrEqual(1)
        expect(grid[row][col]).toBeLessThanOrEqual(9)
      }
  })
})

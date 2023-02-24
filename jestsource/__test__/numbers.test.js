// toBeGreaterThan() // validate if the number is greater than other numbers
// toBeGreaterThanOrEqual() // Validate if the number is greater than or equal to other numbers
// toBeLessThan() // if the number is less than other numbers
// toBeLessThanOrEqual() //validate if the number is less or equal to other numbers
// toBe() // validate if the number is equal to other numbers
// toBeCloseTo() // Validate the float numbers
// toEqual() // validate if the number is equal to other numbers

describe('pruebas con números', () => {
  test('return value of two plus two', () => {
    const value = 2 + 2

    expect(value).toBeGreaterThan(3)
    expect(value).toBeGreaterThanOrEqual(3.5)
    expect(value).toBeLessThan(5)
    expect(value).toBeLessThanOrEqual(4.5)

    expect(value).toBe(4)
    expect(value).toEqual(4)
  })

  test('adding floating point number', () => {
    const value = 0.1 + 0.2

    expect(value).toBeCloseTo(0.3) // test float numbers
  })

})





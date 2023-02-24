// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

describe('pruebas de los diferentes resultados', () => {
  test('debe de validar el retorno de null', () => {
    const n = null
    
    expect(n).toBeNull() // macthes the null value
    expect(n).toBeDefined() // the vale is defined
    expect(n).not.toBeUndefined() // the values is not undefined
    expect(n).not.toBeTruthy() // the value is not a true value
    expect(n).toBeFalsy() // the value is a falsy value
  })


  test('validar el resultado con el valor de 0', () => {
    const z = 0

    expect(z).toBe(0) // que z sea igual a cero 
    expect(z).toBeDefined() // que z este definido
    expect(z).not.toBeNull() // Que z no sea un valor nulo
    expect(z).not.toBeTruthy() // que no sea un valor de verdadero
    expect(z).toBeFalsy() 
  })
})



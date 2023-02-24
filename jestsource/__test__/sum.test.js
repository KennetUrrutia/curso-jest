const sum = require("../src/sum")

//Probar que la funcion de suma devuelva la suma de ambos numeros

describe('Prueba en función de suma', () => {
  const a = 10
  const b = 20

  test('debe de retornar A + B', () => {

    const result = sum(a, b)
    expect(result).toBe(30)
  })

  //It es un alias de 'test' es la misma función
  it('should return 30 with values 10 and 20', () => {

    expect(sum(a, b)).toBe(30)
  })

  test('1 + (-2) is -1', () => {
    const result = sum(1, -2)
    expect(result).toBe(-1)
  })

  test('-1 + (-2) is -3', () => {
    const result = sum(-1, -2)
    expect(result).toBe(-3)
  })
})
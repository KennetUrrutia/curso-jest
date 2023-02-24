const { carList, brandsList } = require("../src/arrays")

describe('Verificando los autos existentes', () => {
  test('Que el arreglo no sea null', () => {
    const result = carList()

    expect(result).not.toBeNull()
  })

  test('Verificar su contiene un VW Gold', () => {
    expect(carList()).toContain('VMW Golf GTI')
  })

  test('Comprobar la longitud del arreglo', () => {
    expect(carList()).toHaveLength(4)
  })
})

describe('Verificando las marcas existentes', () => {
  test('Que el arreglo no sea nulo', () => {
    expect(brandsList()).not.toBeNull()
  })
})
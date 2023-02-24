// Matchers comunes dentro de Jest 

test('2 + 2 = 4', () => {
  expect(2 + 2).toBe(4)
})


//Ver si un json es igual a algo
test('Object Validation', () => {
  const data = {
    username: 'Kennet_urrutia'
  }

  const data2 = {
    username: 'Kennet'
  }

  // Ver si data.username = 'Kennet_urrutia'
  expect(data).toEqual({ username: 'Kennet_urrutia' })

  //Validar si data no es igual a data2
  expect(data).not.toEqual(data2)
})



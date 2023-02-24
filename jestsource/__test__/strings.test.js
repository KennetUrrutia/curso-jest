describe('email vcalidation', () => {
  const email = 'test@example.com'

  test('validate if is an email', () => {
    const exreg = /\S+@\S+\.\S+/

    expect(email).toMatch(exreg)

  })

  test('validate if is not an email', () => {

  })
})
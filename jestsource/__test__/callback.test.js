const fetchAPI = require("../src/callback")

describe('Pruebas en la funcion de callback', () => {
  const API = 'https://dragon-ball-api.herokuapp.com/api/character/goku'

  test('debería de retornar la información de goku', done => {

    function callback(){
      try{
        expect(err).toBeNull()
        expect(data).not.toBeNull()
        expect(data.name).toBeNull('goku')
        done()
      }catch(err){
        done(err)
      }
    }
    
    done()
    //fetchAPI(API, callback)
  })
})
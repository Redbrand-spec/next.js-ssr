import Axios from '../../lib/Axios'

export const SetSesion = () => {

  const FirstInit = () => {
    return dispatch => {
      const SessTime = 1 * 60 * 60 * 1000

        let email = localStorage.getItem( 'email' )
        let password = localStorage.getItem( 'password' )
        
        console.log('продление сесии')
        const Data = {
          login: email,
          password: password
        }

        Axios.post('/api/auth', Data)
        .then((req) =>{

          dispatch({
            type: 'ADD_TOKEN_SESSION',
            token: req.data.token,
            status: true
          })
          let newDate = new Date()
          newDate.setMilliseconds(SessTime)
          const SesTime = newDate.getTime()

          localStorage.setItem( 'email', email )
          localStorage.setItem( 'password', password )
          localStorage.setItem( 'date', SesTime ) // к текущей ддате + 1 час

        })

    }
  }
  return {FirstInit }
}


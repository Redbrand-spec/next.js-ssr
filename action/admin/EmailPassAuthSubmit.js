import { MessAlert } from '../messageAlert'
import { useDispatch } from 'react-redux'
import Axios from '../../lib/Axios'

export const AuthSubmit = () => {
  const dispatch = useDispatch()
  const { Error, Success } = MessAlert()

  const Submit = async ( email, pass, setStatus ) => {
    const Data = {
      login: email,
      password: pass
    }
      Axios.post('/api/auth', Data)
      .then((req) =>{
        setStatus(true)
        Success('Вход выпонен')

        dispatch({
          type: 'ADD_TOKEN_SESSION',
          token: req.data.token,
          status: true,
        })
        let newDate = new Date()
        newDate.setMilliseconds(1 * 60 * 60 * 1000)

        const SesTime = newDate.getTime()

        localStorage.setItem( 'token', req.data.token )
        localStorage.setItem( 'email', email )
        localStorage.setItem( 'password', pass )
        localStorage.setItem( 'date', SesTime ) // к текущей ддате + 1 час

      })
      .catch(() => {
        Error('Ошибка входа')
      }) 
  }
 
  return { Submit }
}
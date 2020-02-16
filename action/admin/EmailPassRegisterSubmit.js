import { MessAlert } from '../messageAlert'
import { useSelector } from 'react-redux'
import Axios from '../../lib/Axios'

export const RegisterSubmit = () => {
  const { Error, Success } = MessAlert()

  const token = useSelector(state => state.Token.token)
  const headers ={ headers: {'Authorization': 'Bearer '+ token}}
  
  const Submit = async ( email, pass, setStatus ) => {
    const Data = {
      login: email,
      password: pass
    }

    Axios.post('/api/reg', Data, headers)
    .then(() => {
      setStatus(true)
      Success('Пользователь создан')
    })
    .catch(() => Error('Ошибка создания пользователя'))

  }

  return { Submit }
}
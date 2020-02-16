import { MessAlert } from '../messageAlert'
import { useDispatch } from 'react-redux'
import Axios from '../../lib/Axios'

export const FormSubmit = () => {
  const { Success, Error, Warning } = MessAlert()
  const dispatch = useDispatch()
  const Submit = async (name, nameStatus, text, textStatus, setStatus, id, Key) => {
    switch(true) {
      case nameStatus === true && textStatus === true :

          const Data = {
            name, text, id
          }
          const Comm = {
            name, text, date: new Date()
          }
          Axios.post('/api/comment', Data )
          .then(() => {
            setStatus(true)
            Success('Сообщение отправлено')
            dispatch({
              type: 'UPDATE_COMMENTS_GETCOMMENTS',
              comment: Comm
            })
            dispatch({
              type: 'UPDATE_POST_VIEWS',
              Key: Key
            })
          })
          .catch(() => {
            Error('Ошибка отправки')
          })
   
        break
      case nameStatus !== true && textStatus === true :
        Warning('Введите коректное имя')
        break
      case nameStatus === true && textStatus !== true :
        Warning('Введите коректное сообщение')
        break
      case nameStatus !== true && textStatus !== true :
        Warning('Введите коректные данные')
        break
    }

  }
  return { Submit }
}

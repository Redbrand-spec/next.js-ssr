import Axios from '../../../lib/Axios'
import { useDispatch } from  'react-redux'
import { MessAlert } from '../../messageAlert'
import { useSelector } from 'react-redux'

export const DeleteComment = () => {
  const { Error, Success } = MessAlert()
  const dispatch = useDispatch()
  
  const token = useSelector(state => state.Token.token)
  const headers ={ headers: {'Authorization': 'Bearer '+ token}}
  
  const Delete = (id, idpost, index ) => {

    const Data = {
      idCom: id,
      idPost: idpost
    }
    Axios.post('/api/post/delete', Data, headers)
    .then(() => {
      Success('Сообщение удалено')
      dispatch({
        type: 'DELETE_COMMENT',
        key: index
      })
    })
    .catch(() => Error('Ошибка, сообщение не удалено'))
  }
  return { Delete }
} 
import { GetPosts } from './getPost'
import Axios from '../../../lib/Axios'
import { MessAlert } from '../../messageAlert'
import { useSelector } from 'react-redux'

export const DeletePost = () => {
  const { Get } = GetPosts()
  const { Success, Error } = MessAlert()
  
  const token = useSelector(state => state.Token.token)
  const headers ={ headers: {'Authorization': 'Bearer '+ token}}
  
  const Delete = (id) => {
    Axios.post('/api/post/deletepost', {id: id}, headers)
    .then(() => {
      Success('Пост удален')
      Get(id)
    })
    .catch(() => Error('Ошибка удаления') )
  }
  return { Delete }
}
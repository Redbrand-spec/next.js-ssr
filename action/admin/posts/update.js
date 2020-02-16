import { MessAlert } from '../../messageAlert'
import Axios from '../../../lib/Axios'
import { useSelector } from 'react-redux'
import { GetFullPost } from './fullpost'

export const UpdatePost = () => {
  const { Warning, Success, Error } = MessAlert()
  const { Get } = GetFullPost()
  
  const token = useSelector(state => state.Token.token)
  const headers ={ headers: {'Authorization': 'Bearer '+ token}}

  const Update = ( title, text, image, oldImage, id ) => {
    if( !!title & !!text & !!oldImage & !!id  ) {

      const Data = new FormData()
      Data.append( 'title', title )
      Data.append( 'text', text )
      Data.append( 'image', image )
      Data.append( 'oldImage', oldImage )
      Data.append( 'id', id )

      Axios.put('/api/post/update', Data, headers)
      .then(() => {
        Success('Сообщение отправлено')
        Get(id)
      })
      .catch(() => Error('Ошибка отправки'))
    } else {
      Warning('Поле поста и текста не должно быть пустым')
    }

  }
  return { Update }
}
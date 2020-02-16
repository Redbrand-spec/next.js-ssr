import { MessAlert } from '../../../action/messageAlert'
import Axios from '../../../lib/Axios'
import { useSelector } from 'react-redux'

export const SubmitPost = () => {
  const { Error, Warning } = MessAlert()
  
  const token = useSelector(state => state.Token.token)
  const headers ={ headers: {'Authorization': 'Bearer '+ token}}
  
  const Submit = async ( post, text, img, postStatus, textStatus, status ) => {

    if( !!postStatus !== false && !!textStatus !== false && !!img !== false) {

      const Data = new FormData()
      Data.append( 'title', post )
      Data.append( 'text', text )
      Data.append( 'image', img, img.name )


      Axios.post('/api/post' , Data, headers)
      .then(() => {
        status(true)
        Warning('Пост создан')
      })
      .catch(() => Error('Ошибка создание поста'))

    } else {
      Warning('введите коректные данные')
    }

  }
  return { Submit }
}
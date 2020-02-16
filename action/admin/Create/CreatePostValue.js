export const CreatePostValue = () => {
  const SetValue = ( e , setVaue, setLabel, setStatus ) => {
    const { Post, Text } = Validation()
    const Val = e.target.value
    const Name = e.target.name

    if(Name === 'post') {
      Post( Val, setVaue, setLabel, setStatus )
    }
    if(Name === 'text') {
      Text( Val, setVaue, setLabel, setStatus )
    }
  }
  return { SetValue }
}

const Validation = () => {
  const Post = ( Val, setVaue, setLabel, setStatus ) => {
    if( Val.length <= 10 ) {
      setVaue(Val)
      setLabel('Пост должен быть больше 10 символов')
      setStatus(false)
    } else if ( Val.length >= 30 ) {
      setVaue(Val)
      setLabel('Пост должен быть меньше 30 символов')
      setStatus(false)
    } else {
      setVaue(Val)
      setLabel('Все ок')
      setStatus(true)
    }

  }
  const Text = ( Val, setVaue, setLabel, setStatus ) => {
    if( Val.length <= 10 ) {
      setVaue(Val)
      setLabel('Текст должен быть больше 10 символов')
      setStatus(false)
    } else if ( Val.length >= 150 ) {
      setVaue(Val)
      setLabel('Текст должен быть меньше 150 символов')
      setStatus(false)
    } else {
      setVaue(Val)
      setLabel('Все ок')
      setStatus(true)
    }
  }
  return { Post, Text }
}





export const AddFormValue = () => {
  const { Email, Password } = Validation()
  const AddValue = ( e, setValue, setLabel, setStatus ) => {
    const val = e.target.value

    if (e.target.name === 'email') {
      Email( val, setValue, setLabel, setStatus )
    } 
    if (e.target.name === 'password') {
      Password( val, setValue, setLabel, setStatus )
    }

  }
  return { AddValue }

}

const Validation = () => {

  const Email = ( val, setValue, setLabel, setStatus ) => {
    if( /^[0-9a-zA-Z@.]+$/.test(val) ) {
      if( /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i.test(val) ) {
        setValue(val)
        setLabel('Вы вели коректный емаил')
        setStatus(true)
      } else {
        setValue(val)
        setLabel('Введите коректный емаил')
        setStatus(false)
      }
    }
    
    if( !!val === false ) {
      setValue(val)
      setLabel('Введите емаил')
      setStatus(null)
    }
  }
  

  const Password = ( val, setValue, setLabel, setStatus ) => {
    setValue(val)
    if( /^[0-9a-zA-Z]+$/.test(val) ) {
      switch(true) {
        case val.length <= 6:
          setValue(val)
          setLabel('Пароль должен состоять больше 6 символов')
          setStatus(false)
          break
        case val.length >= 20:
          setValue(val)
          setLabel('Пароль должен состоять меньше 20 символов')
          setStatus(false)
          break
      default:
        setValue(val)
        setLabel('Пароль коректный')
        setStatus(true)
        break    
      }
    }

    if( !!val === false ) {
      setValue(val)
      setLabel('Введите пароль')
      setStatus(null)
    }
  }

  return { Email, Password }
}
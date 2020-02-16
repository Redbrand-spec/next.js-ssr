export const FormValue = () => {
  const { Name, Text } = Validation()

  const AddValue = (e, setVal, setLabel, setStyle ) => {
    const val = e.target.value

    if (e.target.name === 'name') {
      Name( val, setVal, setLabel, setStyle )
    }
    if (e.target.name === 'text') {
      Text( val, setVal, setLabel, setStyle )
    }

  }
  return { AddValue }

}

/////////////////////
const Validation = () => {

  const Name = ( text,  setVal, setLabel, setStyle ) => {
    if(!!text === false) {
      setVal(text)
      setLabel('Введите имя')
      setStyle(null)
    }
    if(/^[0-9a-zA-Zа-яА-Я]+$/.test(text)) {
      switch(true) {
        case text.length <= 6 :
          setVal(text)
          setLabel('Имя должно быть больще 6 символов')
          setStyle(false)
          break
        case text.length >= 20 :
          setVal(text)
          setLabel('Имя должно быть ментше 20 символов')
          setStyle(false)
          break
        default:
          setVal(text)
          setLabel('Все ок')
          setStyle(true)
      }
    }
  }

  const Text = ( text, setVal, setLabel, setStyle ) => {
    if(!!text === false) {
      setVal(text)
      setLabel('Оставте коментарий')
      setStyle(null)
    }
      switch(true) {
        case text.length <= 6 :
          setVal(text)
          setLabel('Коментарий должно быть больще 6 символов')
          setStyle(false)
          break
        case text.length >= 200 :
          setVal(text)
          setLabel('Коментарий должно быть ментше 200 символов')
          setStyle(false)
          break
        default:
          setVal(text)
          setLabel('Все ок')
          setStyle(true)
      }
  }

  return { Name, Text }
}
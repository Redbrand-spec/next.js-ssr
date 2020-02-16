import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Card,Form, Icon, Input, Button } from 'antd'
import { FormValue } from '../../action/comment/FormValue'
import { FormSubmit } from '../../action/comment/FormSubmit'

const AddComent = () => {
  const { TextArea } = Input
  ///////// Функции
  const { AddValue } = FormValue()
  const { Submit } = FormSubmit()
  ///////// Переменные
  const [ status, setStatus ] = useState(false)

  const [ Name, setName ] = useState()
  const [ NameLabel, setNameLabel ] = useState('Введите имя')
  const [ NameStatus, setNameStatus ] = useState(null)

  const [ Text, setText ] = useState()
  const [ TextLabel, TextNameLabel ] = useState('Оставте коментарий')
  const [ TextStatus, setTextStatus] = useState(null)
  /////////
  const router = useRouter()
  const id = router.query._id
  const Key = router.query.key

  const handleSubmit = (e) => {
    e.preventDefault()
    Submit( Name, NameStatus, Text, TextStatus, setStatus, id, Key)
  }
  /////////
  useEffect(() => {
    if(status === true) {
      setName('') , setNameLabel('Введите имя'), setNameStatus(null),
      setText(''), TextNameLabel('Оставте коментарий'), setTextStatus(null),
      setStatus(false)
    }
  }, [status])
  ////////
  const StyleName = "name_form " + NameStatus
  const StyleText = "name_form " + TextStatus
  /////////
  return (
    <Card style={{width: '100%', minHeight: '50px', marginBottom: '35px'}} className="Comment_conteiner_full_card">
      <h3>Оставить коментарий</h3>
      <hr />
      <Form onSubmit={(e) => handleSubmit( e, Comment )} className="login-form" >

          <Input 
            prefix={<Icon type="user" />}
            placeholder="Ваше имя" onChange={(e) => AddValue(e, setName, setNameLabel, setNameStatus)} name="name" value={Name}
          />
          <div className={StyleName}>{NameLabel}</div>
          <TextArea style={{minHeight: '70px'}}
            placeholder="коментарий"  onChange={(e) => AddValue(e, setText, TextNameLabel, setTextStatus)} name="text" value={Text}
          />
          <div className={StyleText}>{TextLabel}</div>
        <Button type="primary" htmlType="submit">Создать коментарий</Button>
      </Form>
    </Card>
  )
}

export default AddComent
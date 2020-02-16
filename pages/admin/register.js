import React from 'react'
import Head from 'next/head'
import Alayout from '../../Layout/ALayout'
import EmailPass from '../../components/AdminPageComp/EmailPass'
import { RegisterSubmit } from '../../action/admin/EmailPassRegisterSubmit'
import { MessAlert } from '../../action/messageAlert'
import { useSelector } from 'react-redux'
import Loader from '../../UI/loader'

const Register = () => {
  
  const { Submit } = RegisterSubmit()
  const { Error } = MessAlert()
  const token = useSelector(state => state.Token.token)
  const handleSubmit = ( e, email, pass, emailStatus, passStatus, setStatus  ) => {
    e.preventDefault()
    if( emailStatus === true && passStatus === true ) {
      Submit(email, pass, setStatus )
    } else {
      Error('Введите коректные данные')
    }
  }
  
  return (
    <>
    <Head>
      <title>Регистрация</title>
    </Head>
    {!!token?
    <Alayout>
      <EmailPass but="Регистрация" Submit={handleSubmit} SubAlertTrue="Пользователь создан" title="Регистрация"
     SubAlertFalse="Ошибка регистрации"/>
    </Alayout>
    : <Loader />}
    </>
  )
}

export default Register
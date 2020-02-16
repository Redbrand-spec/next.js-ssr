import React, { useEffect } from 'react'
import Head from 'next/head'
import EmailPass from '../../components/AdminPageComp/EmailPass'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

import { AuthSubmit } from '../../action/admin/EmailPassAuthSubmit'
import { MessAlert } from '../../action/messageAlert'

const Auth = () => {
  const { Error } = MessAlert()
  const { Submit } = AuthSubmit()
  const token = useSelector(state => state.Token.token)
  const router = useRouter()
  useEffect(() => {
    if (!!token !== false)  {
      router.push('/admin/create')
    }
  }, [token])

  const handleSubmit = ( e, email, pass, emailStatus, passStatus, setStatus) => {
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
      <title>Вход</title>
    </Head>
    <p>емайл: test@mail.com</p>
    <p>пароль: 123456789</p>
    <EmailPass but="вход" Submit={handleSubmit} SubAlertTrue="" title="админ панель" SubAlertFalse="Введены неверные данные"/>
    </>
  ) 
}
export default Auth
import React, { useEffect, useState } from 'react'
import App from 'next/app'
import { PageTransition } from 'next-page-transitions'
import { withRedux } from '../lib/redux'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

import { SetSesion } from '../action/session/session'

import 'antd/dist/antd.css'
import '../styles/NodeMailer.sass'
import '../styles/index.sass'
import '../styles/card.sass'
import '../styles/ToHome.sass'
import '../styles/error.sass'
import '../styles/inputcolor.sass'
import '../styles/auth.sass'
import '../styles/fullpost.sass'

const CustomApp = (props) => {
  const { Component, pageProps, router } = props
  const Posts = useSelector(state => state.Posts.posts)
  const token = useSelector(state => state.Token.token)
  const status = useSelector(state => state.Token.status)

  const Router  =  useRouter()
  const dispatch = useDispatch()

  const { FirstInit } = SetSesion()

  const [ EndSession, SetEndSesion ] = useState()
  ///// сесия //////
  const DefaultTime = (1* 60 * 60 * 1000) - 1000 // 1 сек для авторизации
  const [SesTime, setSessiontime ] = useState(DefaultTime) ///// время для 1 сесии //////
  
  useEffect(() => { 

    const TokenStorae = localStorage.getItem('token')
    const date = localStorage.getItem('date')
    const newDate = new Date().getTime()
    const Time = +date - newDate
    const setSesTime = +date - newDate - 1000 // 1 сек для авторизации

    if(Time > 0 && !!status === false ) {
      dispatch({ // после обновления страницы если токен есть
        type: 'ADD_TOKEN_SESSION',
        token: TokenStorae,
        status: true
      })
      setSessiontime(setSesTime)
    } 
    if (Time < 0) { // выход из фдминки
      console.log('удаление')
      dispatch({
        type: 'ADD_STATUS_SESSION',
        status: true
      })
      localStorage.clear()
      setSessiontime(DefaultTime) // установка по дефолту 1 час 
    }
    if  ( !!token ) {

      window.setTimeout(() =>{ // нужен при обновлении страницы остаточная сессия от токен в стораже
        dispatch(FirstInit()) //на название функции не обращать внимания, ето автоматическая регистрация для
        SetEndSesion( // продления сессии
          setInterval(() => { // сама сесия
            dispatch(FirstInit())
          }, (DefaultTime) )
        )

      }, SesTime )

    }
    if(!!token === false) { // выход из адиминки выкл интервал
      clearInterval(EndSession)
    }

  },[!!token])

  useEffect(() => {
    if( Router.pathname !== '/' && Router.pathname !== '/about') {
      if(!!Posts) {
        dispatch({
          type:'DEFAULT_POSTS'
        })
      }
  }
  },[Router.pathname])
  
  useEffect(() => {
    if (!!token === false && !!status === true ) {
      if( Router.pathname === '/admin/post' ||
          Router.pathname === '/admin/fullpost' ||
          Router.pathname === '/admin/create' ||
          Router.pathname === '/admin/register') {
          Router.push('/admin/auth')
      }
    }
    if (!!token && !!status === true) {
      if( Router.pathname === '/admin/auth' ) {
        Router.push('/admin/post')
      }
    }

  })

  return (
    <>
      <PageTransition timeout={300} classNames="page-transition">
        <Component {...pageProps} key={router.route}/>
      </PageTransition>
     <style jsx global>{`
     .page-transition-enter {
       opacity: 0;
     }
     .page-transition-enter-active {
       opacity: 1;
       transition: opacity 300ms;
     }
     .page-transition-exit {
       opacity: 1;
     }
     .page-transition-exit-active {
       opacity: 0;
       transition: opacity 300ms;
     }
   `}</style>
   </>
  )
}

CustomApp.getInitialProps = async (appContext) => {

  const appProps = await App.getInitialProps(appContext);
  return { ...appProps }
}

export default withRedux(CustomApp)
import React from 'react'
import Head from 'next/head'
import Alayout from '../../Layout/ALayout'
import Creates from '../../components/AdminPageComp/Create'
import { useSelector } from 'react-redux'
import Loader from '../../UI/loader'

const Create = () => {
  const token = useSelector(state => state.Token.token)
  return (
    <>
    <Head>
      <title>Создание поста</title>
    </Head>
    {!!token?
    <Alayout>
      <Creates />
    </Alayout>
    :<Loader />}
    </>
  )
}

export default Create
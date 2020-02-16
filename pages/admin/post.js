import React from 'react'
import Head from 'next/head'
import Alayout from '../../Layout/ALayout'
import Posts from  '../../components/AdminPageComp/post'
import { useSelector } from 'react-redux'
import Loader from '../../UI/loader'

const Post = () => {
  const token = useSelector(state => state.Token.token)
  return (
    <>
    <Head>
      <title>Посты</title>
    </Head>
    {!!token?
    <Alayout>
      <Posts />
    </Alayout>
    : <Loader />}
    </>
  )
}

export default Post
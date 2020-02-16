import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Head from 'next/head'

import Layout from '../Layout/Layout'
import Cards from '../components/IndexPageComp/card'

import { GetPost } from '../action/post/getpost'

const IndexPage = () => {
  const { Get } = GetPost()
  const dispatch = useDispatch()
  const statePosts = useSelector(state => state.Posts.posts )

  useEffect(() => {
    if ( !!statePosts === false ) {
      dispatch(Get())
    }

  }, [!!statePosts])

  return (
    <>
    <Head>
      <title>Главная</title>
    </Head>
    <Layout>
      <Cards />
    </Layout>
    </>
  )
}

export default IndexPage
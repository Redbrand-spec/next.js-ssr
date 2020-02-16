import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { withRouter } from 'next/router'
import Full from '../../components/AdminPageComp/FullPost'
import { useSelector } from 'react-redux'
import Loader from '../../UI/loader'

const FullPost = (props) => {
  const [ statusPost, setStatusPost ] = useState(props.status) 
  const router = props.router.pathname

  const token = useSelector(state => state.Token.token)

  useEffect(() => {
    if (!!token) { 
      !statusPost?
      props.router.push('/admin/post')
      :null
    }
  },[router])

  return (
    <>
    <Head>
      <title>Редактирование</title>
    </Head>
    {statusPost?
    <Full setStatusPost={setStatusPost}/>
    : <Loader />}
    </>
  )
}

FullPost.getInitialProps = ({ query }) => {
  const {id} = query
  if( !!id === false ) {
    return { status: false }
  } else {
    return { status: true }
  }
}

export default withRouter(FullPost)
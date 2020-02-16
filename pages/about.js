import React, { useState } from 'react'
import Head from 'next/head'
import { withRouter } from 'next/router'
import Layout from '../Layout/Layout'
import FullCard from '../components/AboutPageComp/FullCard'
import Comment  from '../components/AboutPageComp/comment'
import AddComent from '../components/AboutPageComp/AddComent'
import ToHome from '../UI/ToHome'

const About = ( props ) => {
  return (
    <>
    <Head>
      <title>Детальный обзор</title>
    </Head>
      <Layout>
        < ToHome />
        <FullCard image={props.query}/>
        <AddComent />
       <Comment />
      </Layout>
    </>
  )
}
About.getInitialProps = async ({ query }) => {
  return await { query }
}

export default withRouter(About)
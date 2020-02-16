import React from 'react'
import { Layout } from 'antd'
import Sider from '../components/AdminPageComp/Navbar'

const ALayout = ({ children }) => {
  const {  Content } = Layout;
  return(
    <>
     <Layout>
      <Sider />
      <Layout>
        <Content>{ children }</Content>
      </Layout>
    </Layout>
    </>
  )
}


export default ALayout
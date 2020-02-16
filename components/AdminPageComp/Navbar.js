import React from 'react'
import { useRouter } from 'next/router'
import { Layout, Menu, Icon } from 'antd';
import Link from '../../lib/ActiveLink'
import { ExitAdmin } from '../../action/admin/exitadmin'

const Navbar = () => {
  const { Sider } = Layout;
  const router = useRouter()
  const { Exit } = ExitAdmin()
  return (
    <>
      <Sider
      style={{
        overflow: 'auto',
        minHeight: '100vh',
      }}
      >
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1" onClick={() =>  router.push({pathname: '/admin/create'}) } >
            <Icon type="cloud-o" />
            <span className="nav-text"><Link activeClassName="active" href={{pathname: '/admin/create'}}><a>Создать пост</a></Link></span>
          </Menu.Item>
          <Menu.Item key="2" onClick={() => router.push({pathname: '/admin/post'})} >
            <Icon type="upload" />
            <span className="nav-text"><Link activeClassName="active" href={{pathname: '/admin/post'}}><a>Редактировать посты</a></Link></span>
          </Menu.Item>
          <Menu.Item key="3" onClick={() => router.push({pathname: '/admin/register'})} >
            <Icon type="user" />
            <span className="nav-text"><Link activeClassName="active" href={{pathname: '/admin/register'}}><a>регистрация</a></Link></span>
          </Menu.Item>
          <Menu.Item onClick={() => Exit(router)}>
            <Icon  type="import" />
            <span className="nav-text">Выход</span>
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  )
}

export default Navbar
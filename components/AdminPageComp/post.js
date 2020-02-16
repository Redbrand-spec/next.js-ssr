import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { Table, Divider } from 'antd'

import { GetPosts } from '../../action/admin/posts/getPost'
import { DeletePost } from '../../action/admin/posts/deletePost'

const Post = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const Posts =  useSelector(state => state.Posts.AdminPost)
  const { Get } = GetPosts()
  const { Delete } = DeletePost()

  useEffect(() => {
    if(router.pathname === '/admin/post') {
      Get()
      dispatch({
        type:  'DEFAULT_FULLPOST'
      })
    }
  }, [router.pathname])

  const columns = [
    {
      title: 'Название поста',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Дата создания',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Ред / Удалить',
      key: 'action',
      render: (text, record) => (
        <span>
          <a onClick={() => router.push({ pathname:'/admin/fullpost', query: { id:text.id} }) } style={{color:'black'}}>Редактировать</a>
          <Divider type="vertical" />
          <a style={{color:'black'}} onClick={() => Delete(text.id)} >Удалить</a>
        </span>
      ),
    },
  ]
////////////////////////////////////////////
  return (
    <>
    <Table columns={columns} dataSource={Posts} bordered size="middle"/>
    </>
  )
}

export default Post
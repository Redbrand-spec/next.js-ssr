import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { Card, Input, Form, Button, Upload, Icon, message } from 'antd'
import Fade from 'react-reveal/Fade'

import Predosmotr from './Predosmotr'
import { FileLoader } from '../../action/FileLoader'
import { GetFullPost } from '../../action/admin/posts/fullpost'
import { UpdatePost } from '../../action/admin/posts/update.js'
import { DeleteComment } from '../../action/admin/posts/deleteComment'

const FullPost = () => {

  const Post = useSelector(state => state.Full.post)
  const Comm = useSelector(state => state.Full.comm)
  const date = Post.date ? +Post.date: 0
  //////////
  const router = useRouter()
  const { Get } = GetFullPost()
  const { Update } = UpdatePost()
  const { Delete } = DeleteComment()
  const { TextArea } = Input
  const {  beforeUpload, handleChange, uploadButton } = FileLoader()
  //////////
  const [ loading , setLoading ] = useState( false )
  const [ imageUrl, setimageUrl] = useState('')
  const [ image , setImage] = useState(false)

  useEffect(() => {
    if(router.pathname === '/admin/fullpost') {
      Get( router.query.id )
    }
  }, [router.pathname])
  /////////////////
  const [ title, setTitle ] = useState('')
  const [ text, setText ] = useState('')
  const [ oldImage, setOldimage ] = useState('')
  const [ id, setId ] = useState('')
  const [ comments, setComments ] = useState([])

  useEffect(() => {
  if( !!Post !== false ) {
    setTitle(Post.title)
    setimageUrl(Post.imageUrl)
    setText(Post.text)
    setOldimage(Post.imageUrl)
    setComments(Comm)
    setId(Post._id)
  }
  }, [Post] )
  useEffect(() => {
  if( !!Comm !== false ) {
    setComments(Comm)
  }
  }, [Comm] )

  const handleSubmit = () => {
    Update( title, text, image, oldImage, id )
  }
  /////////////////
  return (
    <div style={{maxWidth: '700px', margin: '0 auto', marginTop: '35px'}}>
      <Fade>
      <Card>
        <div>
          <div>
            <div className="fx_sbt align">
            <h3>Редактирование поста</h3>
            <span><b>
              <Icon type="clock-circle" />{new Date(date).getDate()}.{new Date(date).getMonth() + 1}.{new Date(date).getFullYear()}{' | '}
              {new Date(date  + (3 * 60 * 60 * 1000)).toJSON().slice(11, 19)}</b>
            </span>
          </div>
            <Input value={title} onChange={(e) => setTitle(e.target.value)}/>
          </div>
        </div>
        <hr />
        <div>
          <h3>Редактирование изображения</h3>
          <div className="fx_sbt" >
            <Upload 
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={(e) => beforeUpload(e)}
              onChange={(e) => handleChange(e, setLoading, setimageUrl,  setImage)}
            >
              {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton( loading )}
            </Upload>
            <img alt={imageUrl} src={String(imageUrl)} style={{ width: '100%', maxWidth: '70%' }} />
          </div>
          <hr />
          <div>
            <h3>Коментарий к посту</h3>
            <TextArea value={text} onChange={(e) => setText(e.target.value)}/>
          </div>
          <hr />
          <div style={{ width: '100%' }} className="fx_sbt">
            <Predosmotr  post={title} text={text} img={imageUrl}/>
            <Button onClick={() => handleSubmit()}>Редактировать</Button>
            <Button onClick={() => router.push('/admin/post')}>К постам</Button>
          </div>
        </div>
      </Card>
      </Fade>
      {
      comments.map(( val, index ) => {
        return (
        <Card key={index}>
          <Fade>
          <div>
            <div className="fx_sbt align">
            <h3>{val.name}</h3>
            <span><b>
              <Icon type="clock-circle" />{new Date(+val.date).getDate()}.{new Date(+val.date).getMonth() + 1}.{new Date(+val.date).getFullYear()}{' | '}
              {new Date(+val.date  + (3 * 60 * 60 * 1000)).toJSON().slice(11, 19)}</b>
            </span>
            </div>
            <pre className="fullpost_text">{val.text}</pre>
            <div className="fx_sbt fullpost_button_delete">
            <Button onClick={() => Delete( val._id, Post._id, index )}>Удалить</Button>
            </div>
          </div>
          </Fade>
        </Card>
        )
      })}
    </div>
  )
}

export default FullPost
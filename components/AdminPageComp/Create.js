import React, { useState, useEffect } from 'react'
import { Card, Input, Form, Button, Upload, Icon, message } from 'antd'
import { CreatePostValue  } from '../../action/admin/Create/CreatePostValue'
import { SubmitPost } from '../../action/admin/Create/SubmitPost'
import { FileLoader } from '../../action/FileLoader'
import Predosmotr from './Predosmotr'

const Create = () => {
  const {  beforeUpload, handleChange, uploadButton  } = FileLoader()
  const { SetValue } = CreatePostValue()
  const { Submit } = SubmitPost()
  const { TextArea } = Input

  const [ loading , setLoading ] = useState( false )
  const [ imageUrl, setimageUrl] = useState()
  const [ image , setImage] = useState()

  const [ status, setStatus ] = useState( false )

  const [ post, setPost ] = useState()
  const [ postLabel, setPostLabel ] = useState('Введите названия поста')
  const [ postStatus, setPostStatus ] = useState(null)

  const [ text, setText] = useState()
  const [ textLabel, setTextLabel ] = useState('Введите коментарий поста')
  const [ textStatus, setTextStatus ] = useState(null)



  useEffect(() => {
    if(!!status) {
      setImage(null), setimageUrl('')
      setPost(''), setPostLabel('Введите названия поста'), setPostStatus(null),
      setText(''), setTextLabel('Введите коментарий поста'), setTextStatus(null)
      setStatus(false)
    }
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault()
    Submit( post, text, image, postStatus, textStatus, setStatus )
  }
  const PostStyle = "fx_ctr align create_post_style_label " + postStatus
  const TextStyle = "fx_ctr align create_post_style_label " + textStatus
  return (
    <div style={{width: '100%', minHeight: '100vh'}} className="fx_ctr">
      <Card title="Создание поста" style={{ width: '100%', maxWidth: '800px',margin: '30px'}}>
        <Form onSubmit={(e) => handleSubmit(e)} className="login-form">
          <div className="fx_sbt align">
              <b>Название поста</b> 
              <Input  style={{ width: '100%', maxWidth: '600px' }} value={post} name="post"
              onChange={e => SetValue( e, setPost, setPostLabel, setPostStatus )} />
          </div>
          <b style={{ width: '100%' }} className={PostStyle} >{postLabel}</b>
          <hr />
          <div className="fx_sbt align">
              <b>Коментарий к посту</b>
              <TextArea style={{ width: '100%', maxWidth: '600px' }} value={text} name="text"
              onChange={e => SetValue( e, setText, setTextLabel, setTextStatus )} />
          </div>
          <b style={{ width: '100%' }} className={TextStyle}>{textLabel}</b>
          <hr />
          <div className="fx_sbt align">
            <h3>Загрузить Картинку</h3>
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
          </div>
          <hr />
          <div className="fx_sbt align">
            <Predosmotr  post={post} text={text} img={imageUrl}/>
            <Button htmlType="submit">Создать</Button>
          </div>
        </Form>
      </Card>
    </div>
  )
}

export default Create
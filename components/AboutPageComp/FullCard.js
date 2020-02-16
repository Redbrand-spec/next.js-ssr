import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Fade from 'react-reveal/Fade'
import { Card, Icon } from 'antd';

const FullCard = () => {
  const Router = useRouter()
  const post = Router.query
  const [ Post, setPost ] = useState(post)
  const date = +Post.date

  return (
    <div className="cards_conteiner full">
      <Fade>
        <Card className="card">
          <div className="header fx_sbt align"><h3>{Post.title}</h3><span><b>
          <Icon type="clock-circle" />{new Date(date).getDate()}.{new Date(date).getMonth() + 1}.{new Date(date).getFullYear()} |
              {new Date(date + (3 * 60 * 60 * 1000)).toJSON().slice(11, 19)}</b></span></div>
          <div className="image_conteiner">
          <img src={String(Post.imageUrl)} alt={Post.imageUrl}/>
          <div className="text_conteiner fx_ctr align">{Post.text}</div>
          </div>
        </Card>
      </Fade>
    </div>
  )
}

export default FullCard
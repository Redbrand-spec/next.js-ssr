import React from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { Card, Icon } from 'antd'
import Fade from 'react-reveal/Fade'
import Loader from '../../UI/loader'

const Cards = () => {
  const Posts = useSelector(state => state.Posts.posts? state.Posts.posts: [])
  const Router = useRouter()
  Posts.sort((a, b) =>{
    return b.date - a.date 
  })

  return (
    !Posts? <Loader /> :
    <div className="cards_conteiner">
      {
        Posts.map(( val, index ) => {
          return (
            <Fade fraction={0.1} key={index}>
              <Card  bordered={false} className="card" onClick={() => Router.push({pathname: '/about',
               query: {text:val.text, title:val.title, date:val.date, imageUrl:val.imageUrl, _id:val._id, key:index }})} >
              <div className="header fx_sbt align"><h3>{val.title}</h3><span><b>
              <Icon type="clock-circle" />{new Date(+val.date).getDate()}.{new Date(+val.date).getMonth() + 1}.{new Date(+val.date).getFullYear()}|
              {new Date(+val.date + (3 * 60 * 60 * 1000) ).toJSON().slice(11, 19)}</b></span></div>
              <div className="image_conteiner">
                <img src={String(val.imageUrl)} alt={val.imageUrl}/>
                <div className="text_conteiner fx_ctr align">{val.text}</div>
              </div>
              <div className="footer fx_sbt align"><h3>Коментарии</h3><span style={{fontSize: '25px'}}>
              <b><Icon type="cloud" /> {val.views}</b></span></div>
              </Card>
            </Fade>
          )
        })
      }
    </div>
  )
}

export default Cards
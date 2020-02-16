import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { Card, Icon } from 'antd'
import { GetComment } from '../../action/post/getComment'
import Fade from 'react-reveal/Fade'

const Comment = () => {
  const  router = useRouter()
  const { GetComm } = GetComment()

  const Comm = useSelector(state => state.Comm.comments)

  useEffect(() => {
    if(router.pathname === '/about') {
      GetComm( router.query._id )
    }
  }, [router.pathname])

  Comm.sort(( a, b) => {
    return b.date - a.date
  })

  return (
    <div style={{ width:'100%', maxWidth: '790px' }} >
      {Comm.map(( val, index ) => {
        return (
          <Fade bottom cascade key={index}>
          <Card style={{marginBottom: '15px', width:'100%' }} >
            <div className="fx_sbt"><h3>{val.name}</h3><span style={{textAlign: 'center'}}><Icon type="clock-circle" />
            {new Date(+val.date).getDate()}.{new Date(+val.date).getMonth() + 1}.{new Date(+val.date).getFullYear()} |
              {new Date(+val.date + (3 * 60 * 60 * 1000)).toJSON().slice(11, 19)}
            </span></div>
            <hr />
            <pre>{val.text}</pre>
          </Card>
          </Fade>
      )})
    }
    </div>
  )
}

export default Comment
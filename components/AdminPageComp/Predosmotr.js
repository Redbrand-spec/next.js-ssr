import React, { useState } from 'react'
import { Modal, Button, Card, Icon } from 'antd'

const Predosmotr = (props) => {
  const [ visible, setVisible ] = useState(false)

  const Post = props.post? props.post : 'Введите пост'
  const Text = props.text? props.text : 'Введите текст'
  const Img = props.img? props.img : '/default.jpg'
  const showModal = () => {
    setVisible(true)
  }

  const handleCancel = () => {
    setVisible(false)
  };

  return (
    <div>
        <Button onClick={showModal}>
          Предосмотр
        </Button>
        <Modal
          className="cards_conteiner"
          title="Предосмотр"
          visible={visible}
          onCancel={handleCancel}
          footer={[
            <Button key="submit" type="primary" onClick={handleCancel}>
              Закрыть
            </Button>,
          ]}
        >
          <Card bordered={false} className="card" >
            <div className="header fx_sbt align"><h3>{Post}</h3><span><b><Icon type="clock-circle" />21.02.12</b></span></div>
            <div className="image_conteiner">
              <img src={Img} />
              <div className="text_conteiner fx_ctr align">{Text}</div>
            </div>
            <div className="footer fx_sbt align"><h3>Коментарии</h3><span style={{fontSize: '25px'}}><b><Icon type="cloud" />35</b></span></div>
          </Card>
        </Modal>
      </div>
  )
}

export default Predosmotr
import React from 'react'
import { Icon } from 'antd';
import { useRouter } from 'next/router'

const ToHome = () => {
  const router = useRouter()
  return (
    <div className="tohome_conteiner fx_sbt align" onClick={() => {router.push({pathname: '/'}) }}>
      <Icon type="double-left" />
      <span >На главную</span>
    </div>
  )
}

export default ToHome
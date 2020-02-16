import React from 'react'
import { useRouter } from 'next/router'
import { Button } from 'antd'

const Error = (props) => {
  const router = useRouter()
  return (
    <div className="error_conteiner fx_ctr align colum">
      <h1>Ошибка {props.error}</h1>
      <span>Страница не найдена</span>
      <Button onClick={() => {router.push({pathname: '/'})}}>Вернутся на главную</Button>
    </div>
  )
}

export default Error
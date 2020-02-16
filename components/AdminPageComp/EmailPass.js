import React, { useState, useEffect } from 'react'
import { Card, Form, Icon, Input, Button } from 'antd';
import { AddFormValue } from '../../action/admin/EmailPassValue'

const Authorization = (props) => {
  const { AddValue } = AddFormValue()

  const [ Status, setStatus ] = useState(false)

  const [ email, setEmail ] = useState()
  const [ emailLabel, setEmailLabel ] = useState('Введите емаил')
  const [ emailStatus, setEmailStatus ] = useState(null)

  const [ pass, setPass ] = useState()
  const [ passLabel, setPassLabel ] = useState('Введите пароль')
  const [ passStatus, setPassStatus ] = useState()

  useEffect(() => {
    if(Status === true) {
      window.setTimeout(() => {
        setEmail(''), setEmailLabel('Введите емаил'), setEmailStatus(null),
        setPass(''), setPassLabel('Введите пароль'), setPassStatus(null)
        setStatus(false)
      }, 100)
    }
  },[Status])

  const StyleName = "name_form " + emailStatus
  const StyleText = "name_form " + passStatus

  return (
    <div className="auth_page_conteiner fx_ctr align" >
      <Card className="auth_card_conteiner">
        <h3 style={{width: '100%'}} className="fx_ctr align" >{props.title}</h3>
        <hr />
        <Form onSubmit={(e) => props.Submit( e, email, pass, emailStatus, passStatus, setStatus )} className="login-form">
          <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username" name="email" autoComplete="username" value={email}
                onChange={e => AddValue( e, setEmail, setEmailLabel, setEmailStatus )}
              />
          <div className={StyleName} style={{marginTop: '5px', marginBottom: '5px'}}>
            {emailLabel}
          </div>
          <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                type="password" value={pass}
                placeholder="Password" name="password" autoComplete="current-password"
                onChange={e => AddValue( e, setPass, setPassLabel, setPassStatus )}
              />
          <div className={StyleText} style={{marginTop: '5px', marginBottom: '5px'}}>
            {passLabel}
          </div>
          <Button style={{width: '25%', marginLeft: '37.5%'}} htmlType="submit" >{props.but}</Button>
        </Form>
      </Card>
    </div>
  )
}

export default Authorization
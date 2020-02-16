import React from 'react'
import { Icon} from 'antd'

const Loader = () => {
  return (
    <div style={{position: 'fixed', top: 0, left: 0, bottom: 0, right: 0,}}
    className="fx_ctr align" >
    <Icon style={{fontSize: '100px'}} type="loading" />
    </div>
  )
}
export default Loader
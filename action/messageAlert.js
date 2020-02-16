import { message } from 'antd'

export const MessAlert = () => {
  message.config({
    duration: 1,
    maxCount: 1,
  })
  const Success = (mess) =>{
    message.success(mess)
  }
  const Error = (mess) =>{
    message.error(mess)
  }
  const Warning = (mess) =>{
    message.warning(mess)
  }

  return { Success, Error, Warning }
}
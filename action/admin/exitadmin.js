import { useDispatch } from 'react-redux'

export const ExitAdmin = () => {
  const dispatch = useDispatch()
  const Exit = (router) => {
    dispatch({
      type: 'TOKKEN_DEFAULT'
    })
    localStorage.clear()
  }
  return { Exit }
}
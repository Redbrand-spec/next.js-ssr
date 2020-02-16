const initState = {
  post: false,
  comm: false
}

 function Full ( state = initState , action ) {
  switch (action.type) {
    case 'ADD_FULLPOST_GETPOST':
      return {
        ...state,
        post: action.post,
        comm: action.comm
      }
    case 'DELETE_COMMENT':
      const Comm = [...state.comm]
      Comm.splice(action.key, 1)
      return {
        ...state,
        comm: Comm
      }
    case 'DEFAULT_FULLPOST':
      return {
        ...state,
        post: false,
        comm: false
      }
    default:
      return state
  }
}

export default Full
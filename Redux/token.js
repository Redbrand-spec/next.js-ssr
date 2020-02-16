const initState = {
  token: null,
  status: false,
}

 function Cont ( state = initState , action ) {
  switch (action.type) {
    case 'ADD_TOKEN_SESSION':
      return {
        ...state,
        token: action.token,
        status: action.status,
      }
    case 'ADD_STATUS_SESSION':
      return {
        ...state,
        status: action.status
      }
    case 'TOKKEN_DEFAULT':
      return {
        ...state,
        token: null,
      }
    default:
      return state
  }
}

export default Cont
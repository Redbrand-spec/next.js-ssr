const initState = {
  comments: []
}

 function Comm ( state = initState , action ) {
  switch (action.type) {
    case 'ADD_COMMENTS_GETCOMMENTS':
      return {
        ...state,
        comments: action.comments
      }
    case 'UPDATE_COMMENTS_GETCOMMENTS':
      const Comm = [...state.comments]
      Comm.push(action.comment)
      return {
        ...state,
        comments: Comm
      }
    default:
      return state
  }
}

export default Comm
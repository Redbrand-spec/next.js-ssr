const initState = {
  posts: false,
  AdminPost: []
}

 function Posts ( state = initState , action ) {
  switch (action.type) {
    case 'ADD_POST_GETPOST':
      return {
        ...state,
        posts: action.posts
      }
    case 'ADD_ADMINPOST_GETPOST':
      return {
        ...state,
        AdminPost: action.posts
      }
    case 'UPDATE_POST_VIEWS':
      if(state.posts === false) return {...state}
      const Post = [...state.posts]
      const Len = Post[action.Key].views
      Post[action.Key].views = Len + 1
      return {
        ...state,
        posts: Post
      }
    case 'DEFAULT_POSTS':
      return {
        ...state,
        posts: false,
      }
    default:
      return state
  }
}

export default Posts
import { useDispatch } from 'react-redux'

export const GetFullPost = () => {
  const dispatch = useDispatch()
  const Get = async (id) => {
    const query =`
      mutation {
        getPostAll(id:"${id}") {
          post{
            _id text title date imageUrl
          }
          comm {
            name text date _id
          }
        }
      }
    `
    
    await fetch('/graphql', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ query })
    })
    .then(req => req.json()).then(req => {
      req.data.getPostAll.comm.sort((a, b) => {
        return b.date - a.date
      })  
      dispatch({
        type: 'ADD_FULLPOST_GETPOST',
        post: req.data.getPostAll.post,
        comm: req.data.getPostAll.comm,
      })
    })


  }
  return { Get }
}
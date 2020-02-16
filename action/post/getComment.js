import { useDispatch } from 'react-redux'

export const GetComment = () => {
  const dispatch = useDispatch()
  const GetComm = async ( id ) => {
    const query = `
    mutation {
      getComments(id:"${id}") {
         comments {
          name , text, date
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
  .then((req) => req.json()).then((req) => {
    const comm = req.data.getComments.comments
    comm.sort((a, b) => {
      return b.date - a.date
    })
    dispatch({
      type: 'ADD_COMMENTS_GETCOMMENTS',
      comments: comm
    })
  })

  }

   return { GetComm }
}
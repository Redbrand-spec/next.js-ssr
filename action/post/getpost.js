import { MessAlert } from '../messageAlert'

export const GetPost = () => {
  const { Error } = MessAlert()

  const Get = () => {
    return  async dispatch => {
      const query = `
        query {
          posts {
            text title date imageUrl _id views
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
        dispatch({
          type: 'ADD_POST_GETPOST',
          posts: req.data.posts
        })
      })
      .catch(() => {
        Error('Ошибка загрузки')
      })
    }
  } 

  return { Get }
}


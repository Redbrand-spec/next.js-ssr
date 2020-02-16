import { useDispatch } from 'react-redux'

export const GetPosts = () => {
  const dispatch = useDispatch()
  const Get = async () => {
    const query = `
        query {
          posts {
            title date  _id
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
      const Data = req.data.posts
      Data.sort(( a, b ) => {
        return b.date - a.date
      })
      const Posts = []
      Object.entries(Data).forEach( val => {
        
        const date =  new Date(+val[1].date).getDate() + '.' + (new Date(+val[1].date).getMonth() + 1) + '.' + new Date(+val[1].date).getFullYear()
        + ' | ' + new Date(+val[1].date + (3 * 60 * 60 * 1000)).toJSON().slice(11, 19)

        const Obj = {
          key: +val[0] + 1,
          title: val[1].title,
          date: date,
          id: val[1]._id,
        }
        Posts.push(Obj)
      })
      dispatch({
        type: 'ADD_ADMINPOST_GETPOST',
        posts: Posts
      })
    })
    .catch(() => {
      Error('Ошибка загрузки')
    })

  }

  return { Get }
}
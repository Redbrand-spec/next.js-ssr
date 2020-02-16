import React from 'react'
import Errors from '../components/Error/error'
import '../styles/error.sass'

const Error = ({ statusCode }) => {
  return (
    <>
      {statusCode
        ?  <Errors error={statusCode} />
        : 'An error occurred on client'}
    </>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
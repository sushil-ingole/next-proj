import { useRouter } from 'next/router';
import React from 'react'

const Setting = () => {
  const {query} = useRouter();
  return (
    <h4>This is Setting {query.users}.</h4>
  )
}

export default Setting

import React from 'react'
import { Button } from '#common/ui/components/button'
import useUser from '../hooks/use_user'

export default function Home() {
  const user = useUser()
  return (
    <>
      <Button>Hello {user.fullName}</Button>
    </>
  )
}

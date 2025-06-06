import React from 'react'
import { cn } from '../lib/utils'
import useError from '../hooks/use_error'

export type ErrorProps = {
  errorKey: string
} & React.ComponentProps<'p'>

export function Error({ className, errorKey, ...props }: ErrorProps) {
  const error = useError(errorKey)
  if (error === undefined) {
    return null
  }

  return (
    <p className={cn('text-red-600 text-sm', className)} {...props}>
      {error}
    </p>
  )
}

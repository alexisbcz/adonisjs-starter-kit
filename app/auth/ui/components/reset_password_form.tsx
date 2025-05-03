import React from 'react'
import { cn } from '#common/ui/lib/utils'
import { Button } from '#common/ui/components/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '#common/ui/components/card'
import { Input } from '#common/ui/components/input'
import { Label } from '#common/ui/components/label'
import { useForm, usePage } from '@inertiajs/react'

export function ResetPasswordForm({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  const { setData, post, processing, errors } = useForm({
    password: '',
    confirmationPassword: '',
  })
  const { email, signature } = usePage<{
    email: string
    signature: string
  }>().props

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    post(`/auth/reset_password/${email}?signature=${signature}`)
  }

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-normal font-serif">Reset your password</CardTitle>
          <CardDescription>Enter your new password below to reset your account.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-5">
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="********"
                  required
                  className="pr-20"
                  onChange={(e) => setData('password', e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirmationPassword">Confirm Password</Label>
                <Input
                  id="confirmationPassword"
                  name="confirmationPassword"
                  type="password"
                  placeholder="********"
                  required
                  className="pr-20"
                  onChange={(e) => setData('confirmationPassword', e.target.value)}
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              </div>
              <Button type="submit" className="!w-full" disabled={processing}>
                Change Password
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

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
import { useForm } from '@inertiajs/react'
import { Alert, AlertTitle, AlertDescription } from '#common/ui/components/alert'
import { CircleCheckIcon } from 'lucide-react'

export function ForgotPasswordForm({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  const [success, setSuccess] = React.useState(false)

  const { setData, post, processing, errors } = useForm({
    email: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    post('/auth/forgot_password', {
      onSuccess: () => setSuccess(true),
      onError: () => setSuccess(false),
    })
  }

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      {success ? (
        <Alert>
          <CircleCheckIcon className="stroke-blue-700 h-5 w-5" />

          <AlertTitle>Email sent</AlertTitle>
          <AlertDescription>
            We've sent you an email with instructions to reset your password.
          </AlertDescription>
        </Alert>
      ) : (
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-normal font-serif">Forgot your password?</CardTitle>
            <CardDescription>
              Enter your email address and we'll send you a link to reset your password.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-5">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    autoComplete="panache-email"
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Enter your email address"
                    required
                    className="pr-20"
                    onChange={(e) => setData('email', e.target.value)}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <Button type="submit" className="!w-full" disabled={processing}>
                  {processing ? 'Sending...' : 'Send reset link'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

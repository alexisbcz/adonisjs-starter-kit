import React from 'react'
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
import { Link, useForm } from '@inertiajs/react'
import { Error } from '#common/ui/components/error'

export function SignInForm({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  const form = useForm({
    email: '',
    password: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    form.post('/auth/sign_in')
  }

  return (
    <Card {...props}>
      <CardHeader className="text-center">
        <CardTitle className="text-4xl font-normal font-serif">Welcome back</CardTitle>
        <CardDescription>Sign in to your account</CardDescription>
      </CardHeader>

      <CardContent>
        <form className="grid gap-5" onSubmit={handleSubmit}>
          {/* Email address field */}
          <div className="grid gap-2 pt-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              value={form.data.email}
              onChange={(e) => form.setData('email', e.target.value.toLowerCase())}
            />
          </div>

          {/* Password Field */}
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link
                href="/auth/forgot_password"
                className="ml-auto text-sm text-blue-700 hover:text-blue-600 transition-colors underline underline-offset-4"
              >
                Forgot password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="••••••••••"
              required
              value={form.data.password}
              onChange={(e) => form.setData('password', e.target.value)}
            />
          </div>

          <Error errorKey="auth" />

          <Button type="submit" className="!w-full">
            Sign In
          </Button>

          {/* @ts-ignore */}
          {import.meta.env.VITE_USER_NODE_ENV === 'development' && (
            <Button
              type="button"
              variant="outline"
              className="!w-full"
              onClick={() => {
                form.setData({
                  email: 'cyrano.bergerac@exemple.fr',
                  password: 'cyrano.bergerac@exemple.fr',
                })
              }}
            >
              Fill Development Values
            </Button>
          )}
        </form>

        <div className="text-center text-sm text-muted-foreground pt-4">
          Don't have an account?{' '}
          <Link
            href="/auth/sign_up"
            className="underline underline-offset-4 text-blue-700 hover:text-blue-600 transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

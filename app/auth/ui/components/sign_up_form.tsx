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
import { Link, useForm } from '@inertiajs/react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '#common/ui/components/select'
import { Error } from '#common/ui/components/error'

export function SignUpForm({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  const form = useForm({
    fullName: '',
    email: '',
    password: '',
  })
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    form.post('/auth/sign_up')
  }

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-normal font-serif">Create your account</CardTitle>
          <CardDescription>Join our community and start sharing your thoughts</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-5">
              <div className="grid gap-2">
                <Label htmlFor="lastName">Full Name</Label>
                <Input
                  autoComplete="panache-fullname"
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Cyrano de Bergerac"
                  required
                  value={form.data.fullName}
                  onChange={(e) => form.setData('fullName', e.target.value)}
                />
                <Error errorKey="fullName" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={form.data.email}
                  onChange={(e) => form.setData('email', e.target.value.toLowerCase())}
                />
                <Error errorKey="email" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  autoComplete="panache-password"
                  id="password"
                  type="password"
                  placeholder="••••••••••"
                  required
                  value={form.data.password}
                  onChange={(e) => form.setData('password', e.target.value)}
                />
                <Error errorKey="password" />
              </div>
              <Button type="submit" className="!w-full">
                Sign Up
              </Button>

              {/* @ts-ignore */}
              {import.meta.env.VITE_USER_NODE_ENV === 'development' && (
                <Button
                  type="button"
                  variant="outline"
                  className="!w-full"
                  onClick={() => {
                    form.setData({
                      fullName: 'Cyrano de Bergerac',
                      email: 'cyrano.bergerac@exemple.fr',
                      password: 'cyrano.bergerac@exemple.fr',
                    })
                  }}
                >
                  Fill Development Values
                </Button>
              )}
            </div>
            <div className="text-center text-sm text-muted-foreground pt-4">
              Already have an account?{' '}
              <Link
                href="/auth/sign_in"
                className="underline underline-offset-4 text-blue-700 hover:text-blue-600 transition-colors"
              >
                Sign In
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

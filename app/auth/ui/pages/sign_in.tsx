import React from 'react'
import { AuthLayout } from '#auth/ui/components/auth_layout'
import { SignInForm } from '#auth/ui/components/sign_in_form'
import { Head } from '@inertiajs/react'

export default function SignInPage() {
  return (
    <>
      <Head title="Sign In" />
      <AuthLayout>
        <SignInForm />
      </AuthLayout>
    </>
  )
}

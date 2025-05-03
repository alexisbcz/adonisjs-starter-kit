import React from 'react'
import { AuthLayout } from '#auth/ui/components/auth_layout'
import { Head } from '@inertiajs/react'
import { ForgotPasswordForm } from '../components/forgot_password_form'

export default function SignUpPage() {
  return (
    <>
      <Head title="Forgot Password" />
      <AuthLayout>
        <ForgotPasswordForm />
      </AuthLayout>
    </>
  )
}

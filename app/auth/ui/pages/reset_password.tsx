import React from 'react'
import { AuthLayout } from '#auth/ui/components/auth_layout'
import { Head } from '@inertiajs/react'
import { ResetPasswordForm } from '../components/reset_password_form'

export default function ResetPasswordPage() {
  return (
    <>
      <Head title="Reset Password" />
      <AuthLayout>
        <ResetPasswordForm />
      </AuthLayout>
    </>
  )
}

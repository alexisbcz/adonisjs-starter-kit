/// <reference path="../../../../adonisrc.ts" />
/// <reference path="../../../../config/inertia.ts" />

import '../css/app.css'
import { hydrateRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'
import { resolvePageComponent } from '@adonisjs/inertia/helpers'

const appName = import.meta.env.VITE_APP_NAME || 'AdonisJS'

createInertiaApp({
  progress: { color: 'var(--color-blue-600)' },
  title: (title) => (title ? `${title} - ${appName}` : appName),
  resolve: (name) => {
    const firstPart = name.split('/')[0]
    const rest = name.split('/').slice(1).join('/')
    if (firstPart === 'common') {
      const pages = import.meta.glob('../pages/**/*.tsx', { eager: true })
      return pages[`../pages/${rest}.tsx`]
    }
    return resolvePageComponent(
      `../../../${firstPart}/ui/pages/${rest}.tsx`,
      import.meta.glob('../../../*/ui/pages/**/*.tsx')
    )
  },
  setup({ el, App, props }) {
    hydrateRoot(el, <App {...props} />)
  },
})

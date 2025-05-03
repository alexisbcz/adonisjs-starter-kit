import ReactDOMServer from 'react-dom/server'
import { createInertiaApp } from '@inertiajs/react'

const appName = import.meta.env.VITE_APP_NAME || 'AdonisJS'

export default function render(page: any) {
  return createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      const firstPart = name.split('/')[0]
      const rest = name.split('/').slice(1).join('/')
      const pages = import.meta.glob('../../../*/ui/pages/**/*.tsx', { eager: true })
      if (firstPart === 'common') {
        return pages[`../pages/${rest}.tsx`]
      }
      return pages[`../../../${firstPart}/ui/pages/${rest}.tsx`]
    },
    setup: ({ App, props }) => <App {...props} />,
  })
}

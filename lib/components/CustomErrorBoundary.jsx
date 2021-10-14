import React from 'react'
import * as Sentry from '@sentry/react'

import { ErrorPage } from 'lib/components/ErrorPage'

class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (error) {
    return { hasError: true }
  }

  render () {
    if (this.state.hasError) {
      return <ErrorPage />
    }

    return this.props.children
  }
}

export function CustomErrorBoundary (props) {
  const { children } = props

  if (!process.env.NEXT_JS_SENTRY_DSN) {
    return <ErrorBoundary>{children}</ErrorBoundary>
  } else {
    return (
      <>
        <Sentry.ErrorBoundary fallback={({ error, componentStack, resetError }) => <ErrorPage />}>
          {children}
        </Sentry.ErrorBoundary>
      </>
    )
  }
}

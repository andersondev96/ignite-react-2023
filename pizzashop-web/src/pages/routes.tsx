import { createBrowserRouter } from 'react-router-dom'

import { Dashboard } from './auth/app/dashboard'
import { SignIn } from './auth/sign-in'

export const router = createBrowserRouter([
  { path: '/', element: <Dashboard /> },
  { path: '/sign-in', element: <SignIn /> },
])

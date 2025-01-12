import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Layout } from 'components/Layout';
import { Countries } from 'pages/Countries';

export const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Navigate to='/countries' replace={true}/>,
      },
      {
        path: '/countries',
        element: <Countries/>,
      },
    ]
  }
])

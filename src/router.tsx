import {createBrowserRouter} from 'react-router-dom';
import {SignIn} from './pages/SignIn';
import {SignUp} from './pages/SignUp';
import { Authentication } from './pages/Authentication';

import { Home } from './pages/Home';
import { Layout } from './components/Layout';


export const router = createBrowserRouter([
  {
    element: <Layout />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
        


      {
        path: '/auth',
        element: <Authentication />,
        children:[
          {
            path: 'signin',
            element: <SignIn/>,
          },
          {
            path: 'signup',
            element: <SignUp/>,
          }
        ]
      },
      
      // {
      //   path: 'auth/activation/:uid/:token',
      //   element: <AuthActivation />,
      // },
     
     

      
    ],
  },
]);

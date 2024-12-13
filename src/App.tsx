import {Provider} from 'react-redux';
import {store} from './redux/store.ts';
import {RouterProvider} from 'react-router-dom';
import  {router} from './router'
import './styles/app.scss';

export function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import Add from './View/Add';
import Detail from './View/Detail';
import List from './View/List';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <List />,
      },
      {
        path: 'add',
        element: <Add />,
      },
      {
        path: 'detail',
        element: <Detail />,
      },
    ],
  },
]);

export default routes;

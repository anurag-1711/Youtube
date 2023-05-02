import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContatiner from './components/MainContatiner';
import WatchPage from './components/WatchPage';
import Demo from './components/Demo';
import Demo2 from './components/Demo2';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <MainContatiner />
      },
      {
        path: 'watch',
        element: <WatchPage />
      }, {
        path: 'demo',
        element: <><Demo /> <Demo2 /></>
      }
    ]
  }
])

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />


        {
          /***
           * 
           * Head
           * Body
           *    - SideBar
           *       - MenuItems
           *    - MainContainer
           *       - ButtonsList
           *       - VideoContainer
           *          - VideoCard
           * 
           */
        }
      </div>
    </Provider>
  );
}

export default App;

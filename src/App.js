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
import Results from './components/Results';

const AppLayout = () => {
  return <>
    <Head />
    <Body />
  </>
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <MainContatiner />
      },
      {
        path: 'watch',
        element: <WatchPage />
      },
      {
        path: 'results',
        element: <Results />
      },
      {
        path: 'demo',
        element: <><Demo /> <Demo2 /></>
      }
    ]
  }
])

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;

// {
//   /***
//    * 
//    * Head
//    * Body
//    *    - SideBar
//    *       - MenuItems
//    *    - MainContainer
//    *       - ButtonsList
//    *       - VideoContainer
//    *          - VideoCard
//    * 
//    */
// }
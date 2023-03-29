import './App.css';
import { useRoutes } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import Images from './components/Images';

import Videos from './components/Videos';
import Chat from './components/Chat';
import TextToimage from './components/TextToimage';
import LandingPage from './LandingPage';
import About from './About';
import Contact from './Contact';


function App() {
  const router = useRoutes([
    {
      path:'/',
      element: <LandingPage />
    },
    {
      path:'/about',
      element: <About />
    },
    {
      path:'/contact',
      element: <Contact />
    },
    {
      path:'/register',
      element: <Register />
    },
    {
      path:'/login',
      element: <Login />
    },
    {
      path:'/app',
      element: <Dashboard />,
      children:[
        {
          path: 'images',
          element: <Images />
        },
        {
          path: 'videos',
          element: <Videos />
        },
        {
          path: 'text-to-image',
          element: <TextToimage />
        },
        {
          path: 'chat',
          element: <Chat />,
        },
        // {
        //   path: 'chat',
        //   element: <WelcomeScreen />,
        // },
      ]
    }
  ])
  return router
}

export default App;

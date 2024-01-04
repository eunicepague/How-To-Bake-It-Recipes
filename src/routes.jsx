import Home from './components/Home/Home';
import About from './components/About/About';
import Profile from './components/Profile/Profile';
import ProfileList from './components/Profile/ProfileList';

const routes = [
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/profile/:id',
    element: <Profile />,
  },
  {
    path: '/profile',
    element: <ProfileList />,
  },
];

export default routes;

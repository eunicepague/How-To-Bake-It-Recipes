import Home from './components/Home/Home';
import About from './components/About/About';
import Profiles from './components/Profile/Profiles';
import ProfileList from './components/Profile/ProfileList';
import Categories from './components/Category/Categories';

import Cakes from './components/Category/cakes/Cakes';
import Cobblers from './components/Category/cobblers/Cobblers';
import Cookies from './components/Category/cookies/Cookies';
import Frostings from './components/Category/frostings/Frostings';
import IceCreams from './components/Category/icecreams/IceCreams';
import Desserts from './components/Category/desserts/Desserts';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/category',
    element: <Categories />,
  },
  {
    path: '/category/cakes',
    element: <Cakes />,
  },
  {
    path: '/category/cookies',
    element: <Cakes />,
  },
  {
    path: '/category/pies',
    element: <Cobblers />,
  },
  {
    path: '/category/desserts',
    element: <Desserts />,
  },
  {
    path: '/category/cobblers',
    element: <Cobblers />,
  },
  {
    path: '/category/frostings',
    element: <Frostings />,
  },
  {
    path: '/category/icecreams',
    element: <IceCreams />,
  },
];

export default routes;

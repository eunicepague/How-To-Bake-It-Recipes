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
    path: '/category/cakes/:id',
    element: <Profiles />,
  },

  {
    path: '/category/cookies',
    element: <Cookies />,
  },
  {
    path: '/category/cookies/:id',
    element: <Profiles />,
  },

  {
    path: '/category/cobblers',
    element: <Cobblers />,
  },
  {
    path: '/category/pies/:id',
    element: <Profiles />,
  },

  {
    path: '/category/pies',
    element: <Cobblers />,
  },
  {
    path: '/category/pies/:id',
    element: <Profiles />,
  },

  {
    path: '/category/desserts',
    element: <Desserts />,
  },
  {
    path: '/category/desserts/:id',
    element: <Profiles />,
  },

  {
    path: '/category/frostings',
    element: <Frostings />,
  },
  {
    path: '/category/frostings/:id',
    element: <Profiles />,
  },

  {
    path: '/category/icecreams',
    element: <IceCreams />,
  },
  {
    path: '/category/icecreams/:id',
    element: <Profiles />,
  },
];

export default routes;

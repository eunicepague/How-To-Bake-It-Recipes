import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Headers from './components/Headers';
import routes from './routes';
import Loaders from './components/Loaders';
import { UserContext } from './components/UserContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      setIsLoggedIn(true);
      setUsername(user.username);
    }
  }, []);

  // useEffect(() => {

  //   const fetchData = async () => {
  //     await new Promise((resolve) => setTimeout(resolve, 2000));
  //     setIsLoading(false);

  //     fetchData();
  //   };
  // }, []);

  // if (isLoading) {
  //   return (
  //     <>
  //       <Loaders />
  //     </>
  //   );
  // }

  return (
    <>
      <UserContext.Provider
        value={{ isLoggedIn, setIsLoggedIn, username, setUsername }}
      >
        <Headers />
        <main>
          <Routes>
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={route.element}
                  exact
                />
              );
            })}
          </Routes>
        </main>
      </UserContext.Provider>
    </>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
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
    // Simulate a data fetching function
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait for 2 seconds
      setIsLoading(false); // Set loading to false when data is ready
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount.

  if (isLoading) {
    return (
      <>
        <Loaders />
      </>
    );
  }

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

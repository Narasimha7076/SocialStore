// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// import Login from './components/Login.jsx'


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/'>
//       <Route path= '/' element={<Login />}/>
//       <Route path= 'app' element={<App />}/>
//     </Route>
//   )
// )


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={router}/>
//   </StrictMode>
// )

import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import App from './App.jsx';
import Login from './components/Login.jsx';
import { ProtectedRoute } from './components/ProtectedRoute';

function Main() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check session on mount
  useEffect(() => {
    const checkSessionStatus = async () => {
      try {
        const response = await fetch('http://localhost:3000/session-status', { credentials: 'include' });
        setIsAuthenticated(response.ok);
      } catch (error) {
        console.error("Failed to check session status:", error);
      }
    };
    checkSessionStatus();
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="app" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <App />
          </ProtectedRoute>
        } />
      </Route>
    )
  );

  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<Main />);


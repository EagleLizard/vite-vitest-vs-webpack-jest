
import './main.scss';
import React from 'react'
import { Root, createRoot } from 'react-dom/client';
import { createBrowserRouter, Outlet, redirect, RouterProvider } from 'react-router-dom';

import { HOME_PATH, Home } from './components/home/home';
import { Nav } from './components/nav/nav';
import { ABOUT_PATH, About } from './components/about/about';

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: '/',
        loader: () => {
          return redirect(HOME_PATH)
        },
      },
      {
        path: HOME_PATH,
        element: <Home/>,
      },
      {
        path: ABOUT_PATH,
        element: <About/>,
      },
    ]
  }
]);

(async () => {
  try {
    await init();
  } catch(e) {
    console.error(e);
    throw e;
  }
})();

async function init() {
  let root: Root | undefined;
  const container = document.getElementById('app-root');
  const Index = () => {
    return (
      <React.StrictMode>
        <RouterProvider router={router}/>
      </React.StrictMode>
    );
  };
  if(container === null) {
    throw new Error('Could not find the root element.');
  }
  root = createRoot(container);
  root.render(<Index/>);
}

function Layout() {
  return (
    <>
      <Nav/>
      <Outlet/>
    </>
  );
}

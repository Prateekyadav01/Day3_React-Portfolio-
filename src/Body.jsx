import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './utils/store';

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    }
  ]);
  
  return (
    <div>
     <Provider store={store}>
     <RouterProvider router={appRouter} />
     </Provider>
    </div>
  )
}

export default Body

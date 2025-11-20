import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllProjects from "./components/AllProjects/AllProjects";
import Parent from "./components/parent/Parent";

const App = () => {

  const router = createBrowserRouter([
    {index:true,element:<Parent/>},
    {path:"/AllProjects",element:<AllProjects/>}
  ])



  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
};

export default App;

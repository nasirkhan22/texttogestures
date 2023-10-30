import { lazy } from "react";


//---------------------------
// imports
//---------------------------
const Home = lazy(() => import("@pages/Home"));
const HandtalkComponent = lazy(() => import("@pages/HandtalkComponent"));



//---------------------------
// exports
//---------------------------
export const routes_here = [
    {
        path: "/",
        element: <Home />,
        isPrivate: true,
    },
   
    //routes in objects
];
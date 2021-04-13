import Home from "../Components/Home";
import Products from "../Components/Products";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";
import { ROUTE_PATH } from "../Utils/routesPaths";

const AllRoutes = [{
        path: ROUTE_PATH.HOME,
        component: Home,
        exact: true,
        isPrivate: false
    },
    {
        path: ROUTE_PATH.PRODUCTS,
        component: Products,
        exact: true,
        isPrivate: false
    },
    {
        path: ROUTE_PATH.SIGN_UP,
        component: SignUp,
        exact: true,
        isPrivate: false
    },
    {
        path: ROUTE_PATH.SIGN_IN,
        component: SignIn,
        exact: true,
        isPrivate: false
    }
]

export default AllRoutes
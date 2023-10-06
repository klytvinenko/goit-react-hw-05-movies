import { Suspense } from "react";
import { NavLink, Outlet} from "react-router-dom";
import Loader from "./Loader/Loader";
export const Layout = () => {
    return <div>
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </nav>
    <main>
    <Suspense fallback={<Loader/>}>
      <Outlet/>
    </Suspense>
    </main>
    </div>
};
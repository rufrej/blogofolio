import { Outlet , NavLink} from "react-router-dom";

export function Authentication() {
  return(  
    <div>

<div>
          <ul className="nav nav-underline mb-5">
            <NavLink
              className="nav-item nav-link text-dark px-3"
              aria-current="page"
              to="/auth/signin"
            >
              Sing In
            </NavLink>
            <NavLink
              className="nav-item nav-link text-dark px-3"
              aria-current="page"
              to="/auth/signup"
            >
              Sing Up
            </NavLink>

            
          </ul>
        </div>





  <Outlet/>
 </div>
   )
}

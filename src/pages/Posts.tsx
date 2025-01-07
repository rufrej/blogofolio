import { Outlet, NavLink } from "react-router-dom";

// import {ModalPreviewPost} from '../components/ModalPreviewPost';
// import {ModalPreviewImage} from '../components/ModalPreviewImage';

export function Posts() {
  return (
    <div>
      <h1 className="mb-5">asdsad</h1>
      <div className="d-flex justify-content-between">
        <div>
          <ul className="nav nav-underline mb-5">
            <NavLink
              className="nav-item nav-link text-dark px-3"
              aria-current="page"
              to="/posts/all/1"
            >
              All
            </NavLink>

            <NavLink
              className="nav-item nav-link text-dark px-3"
              to="/posts/myposts/1"
            >
              My Posts
            </NavLink>
          </ul>
        </div>
      </div>
      <Outlet />
      {/* <ModalPreviewPost />
      <ModalPreviewImage /> */}
    </div>
  );
}

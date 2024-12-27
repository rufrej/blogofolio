import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../hooks/useStore";
import { fetchUserData } from "../redux/auth-slice";

export function Profile() {
  const { currentUser } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();
  const jwt = useAppSelector((state) => state.auth.jwt);

  useEffect(() => {
    if (!currentUser && jwt) {
      dispatch(fetchUserData(jwt));
    }
  }, [jwt, dispatch]);

  if (!currentUser) return <div>You dont autorization </div>;

  return (
    <>
      <h1>profile</h1>
      <div>
        <h3>Name : {currentUser.username}</h3>
        <h3>Email : {currentUser.email}</h3>
      </div>
    </>
  );
}

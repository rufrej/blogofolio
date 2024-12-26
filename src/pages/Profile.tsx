import { useAppSelector } from "../hooks/useStore";

export function Profile() {
  const { currentUser } = useAppSelector((state) => state.auth);
  console.log(currentUser);
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

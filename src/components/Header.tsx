import React, {useState} from 'react';
import styles from '../styles/header.module.scss';
import logo  from '../assets/header-icons/logo/brandFirstJanuary.svg'
import userIcon  from '../assets/header-icons/userIcon.svg'
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/useStore.ts';
import { logOut } from '../redux/auth-slice';

export function Header() {
  const [isShown, setIsShown] = useState<boolean>(false);
  const dispatch = useAppDispatch()
  const token = useAppSelector(state => state.auth.jwt);
  console.log(token)

  function renderUserProfileIcon () {
   if(!token){
    return (
<NavLink className={styles.header__userbar__singin} to="auth/signin">
<img src={userIcon} alt="sing in" />
 <div>
  <p>Войти</p>
 
  </div>
  </NavLink>
    )
   }

   return (
    <div>
    <NavLink 
    className={styles.header__userbar__singin} 
    to="auth/signin"
    onMouseEnter={() => setIsShown(true)}
    onMouseLeave={() => setIsShown(false)}
    >
      
<img src={userIcon} alt="Porfile" />
<div>
<p>Profile</p>

</div>
</NavLink>
{isShown && (
  <div
  onMouseEnter={() => setIsShown(true)}
  onMouseLeave={() => setIsShown(false)}
  className={styles.header__userbar__menu}>
    <button onClick={handleClickButtonLogOut}>выйти</button>
  </div>
)}
</div>
  )

  }

  const handleClickButtonLogOut = () => {
    dispatch(logOut());
  };

  return (
    <header>
 <div className={styles.header__row}>
  <NavLink className={styles.header__logo} to="/">Booktore</NavLink>
<div className={styles.header__userbar}>
  {renderUserProfileIcon()}
{/* <NavLink className={styles.header__userbar__singin} to="auth/signin">
<img src={userIcon} alt="OZ" />
 <div>
  <p>Войти</p>
 
  </div>
  </NavLink> */}



</div>


 </div>
    </header>
  );
}

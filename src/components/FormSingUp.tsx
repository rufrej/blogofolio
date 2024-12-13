import React, {useState, useRef, useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/useStore.ts';
import {useNavigate} from 'react-router-dom';
import {FormField} from './FormField.tsx';
import styles from '../styles/form.module.scss';
import {fetchSignUp} from '../redux/auth-slice.ts';


export function FormSingUp() {
  const dispatch = useAppDispatch();

  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const usernameInputRef = useRef(null);

  // const {isRegister} = useSelector(state => state.auth);
  const navigate = useNavigate();
  // useEffect(() => {
  //   setTimeout(() => {
  //     usernameInputRef.current.focus();
  //   }, 50);
  // }, []);

  const handleChangeUsername = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    console.log('username: ' + target.value);
    setUsername(target.value);
  };

  const handleChangeEmail = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    console.log('email: ' + target.value);
    setEmail(target.value);
  };

  const handleChangePassword = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    console.log('password: ' + target.value);
    setPassword(target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // if (password !== confirmPassword) {
    //   alert('Pasword do not match');
    //   return;
    // }

    const body = {
      course_group: 13,
      username,
      email,
      password,
    };

    dispatch(fetchSignUp(body));
  };

  // useEffect(() => {

  //     navigate('/auth/regconfirm');
    
  // }, );
  // useEffect(() => {
  //   if (isRegister) {
  //     navigate('/auth/regconfirm');
  //   }
  // }, [isRegister]);

  return (
    <div>
      <h1>Войти</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className="mb-3">
          <FormField
            ref={usernameInputRef}
            name="username"
            label="username"
            type="text"
            value={username}
            placeholder="username"
            onChange={handleChangeUsername}
          />
        </div>

        <div className="mb-4">
          <FormField
            name="email"
            label="email"
            type="email"
            value={email}
            placeholder="email"
            onChange={handleChangeEmail}
          />
        </div>
        <div className="mb-4">
          <FormField
          name="password"
            label="password"
            type="password"
            value={password}
            placeholder="password"
            onChange={handleChangePassword}
          />
        </div>
       
     

        <button type="submit">Registration</button>
      </form>
    </div>
  );
}

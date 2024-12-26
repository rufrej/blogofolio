import React, { useState, useRef } from "react";
import { useAppDispatch } from "../hooks/useStore.ts";
import { FormField } from "./FormField.tsx";
import styles from "../styles/form.module.scss";
import { fetchSignUp } from "../redux/auth-slice.ts";

export function FormSingUp() {
  const dispatch = useAppDispatch();

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const usernameInputRef = useRef(null);

  const handleChangeUsername = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    console.log("username: " + target.value);
    setUsername(target.value);
  };

  const handleChangeEmail = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    console.log("email: " + target.value);
    setEmail(target.value);
  };

  const handleChangePassword = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    console.log("password: " + target.value);
    setPassword(target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const body = {
      course_group: 13,
      username,
      email,
      password,
    };

    dispatch(fetchSignUp(body));
  };

  return (
    <div>
      <h1>Sing Up</h1>
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

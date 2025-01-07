import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useStore.ts";
import { useNavigate } from "react-router-dom";
import { FormField } from "./FormField.tsx";
import { FormFieldElement } from "../types/types.ts";
import { fetchSignIn, fetchUserData } from "../redux/auth-slice.ts";
import toast from "react-hot-toast";

export function FormSingIn() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const jwt = useAppSelector((state) => state.auth.jwt);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleChangeEmail = ({
    target,
  }: React.ChangeEvent<FormFieldElement>) => {
    console.log("email: " + target.value);
    setEmail(target.value);
  };

  const handleChangePassword = ({
    target,
  }: React.ChangeEvent<FormFieldElement>) => {
    console.log("password: " + target.value);
    setPassword(target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const body = {
      email,
      password,
    };
    dispatch(fetchSignIn(body));
    toast.success("You have successfully logged in");
  };

  useEffect(() => {
    if (jwt) {
      navigate("/");
      dispatch(fetchUserData(jwt));
    }
  }, [jwt, dispatch, toast]);

  return (
    <div>
      <h1>SingIn</h1>
      <form onSubmit={handleSubmit} className="form">
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
          <a href="#">forgot your password?</a>
        </div>
        <button type="submit">SING IN</button>
      </form>
    </div>
  );
}

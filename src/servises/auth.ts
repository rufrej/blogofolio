import {
  signUpEndPoint,
  signInEndPoint,
  authActivationEndPoint,
  userDataEndPoint,
  refreshAccessTokenEndPoint,
} from "../config/api";

import { ISignIn, ISignUp, IUserData, IJwt } from "../types/types";

import { post, get } from "../utils/clien";

export const requestSignUp = async (body: ISignUp) => {
  try {
    const response = await post(signUpEndPoint, {
      ...body,
      course_group: 13,
    });
    return response.data;
  } catch (error) {
    return {
      hasError: true,
      error,
    };
  }
};

export const requestSignIn = async (body: ISignIn) => {
  try {
    const response = await post(signInEndPoint, body);
    return response.data;
  } catch (error) {
    return {
      hasError: true,
      error,
    };
  }
};

export const requestAuthActivation = async (body: any) => {
  try {
    const response = await post(authActivationEndPoint, body);

    return response.data;
  } catch (error) {
    return {
      hasError: true,
      error,
    };
  }
};

export const requestUserData = async (jwt: IJwt) => {
  try {
    const response = await get(userDataEndPoint, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    return response.data;
  } catch (error) {
    return {
      hasError: true,
      error,
    };
  }
};

export const requestRefreshAccessToken = async (refresh: string) => {
  try {
    const response = await post(refreshAccessTokenEndPoint, { refresh });
    return response.data.access;
  } catch (error) {
    return {
      hasError: true,
      error,
    };
  }
};

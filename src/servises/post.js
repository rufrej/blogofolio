import {postEndPoint} from '../config/api';
import {get} from '../utils/clien';

export const requestPost = async id => {
  try {
    const response = await get(postEndPoint + id);
    return response.data;
  } catch (error) {
    return {
      hasError: true,
      ...error,
    };
  }
};

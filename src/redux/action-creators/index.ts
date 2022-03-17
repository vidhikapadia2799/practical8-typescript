import { ActionType } from "../action-types";
import { IUser } from "../actions";

export const registerUser = (user: IUser) => {
  return {
    type: ActionType.SET_USER,
    payload: user,
  };
};

export const logoutUser = () => {
  return {
    type: ActionType.USER_LOGOUT,
  };
};

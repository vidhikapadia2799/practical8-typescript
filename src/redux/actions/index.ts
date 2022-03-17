import { ActionType } from "../action-types";

export interface IUser {
  name: string;
  email: string;
  phoneno: string;
  password: string;
  confirmpassword: string;
  image: Blob | MediaSource | null | string;
  isLoggedIn: boolean;
}

// export type Action =
//   | {
//       type: ActionType.SET_USER;
//       payload: IUser;
//     }
//   | {
//       type: ActionType.USER_LOGOUT;
//     };
type UserAction = {
  type: ActionType.SET_USER;
  payload: IUser;
};

type LogoutAction = {
  type: ActionType.USER_LOGOUT;
};

export type Action = UserAction | LogoutAction;

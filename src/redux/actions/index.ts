import { ActionType } from "../action-types";

export interface IUser {
  name: string;
  email: string;
  phoneno: number;
  password: string;
  confirmpassword: string;
}
interface UserAction {
  type: ActionType.SET_USER;
  payload: IUser;
}

export type Action = UserAction;

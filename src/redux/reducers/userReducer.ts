import { ActionType } from "../action-types";
import { IUser, Action } from "../actions/index";

const initialState: IUser = {
  name: "",
  email: "",
  phoneno: 0,
  password: "",
  confirmpassword: "",
};

const userReducer = (state: IUser = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_USER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

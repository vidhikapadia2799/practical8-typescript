import { ActionType } from "../action-types";
import { IUser, Action } from "../actions/index";

const initialState: IUser = {
  name: "",
  email: "",
  phoneno: "",
  password: "",
  confirmpassword: "",
  image: null,
  isLoggedIn: false,
};

const userReducer = (state: IUser = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_USER:
      return {
        ...state,
        ...action.payload,
      };
    case ActionType.USER_LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;

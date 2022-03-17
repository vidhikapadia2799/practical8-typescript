import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { State } from "../redux/reducers";

interface PropType {
  component: React.FC;
}

const RequireAuth: FC<PropType> = ({ component: Component }) => {
  const userdata = useSelector((state: State) => state.user);

  if (userdata.isLoggedIn) return <Component />;
  return <Navigate to="/" />;
};

export default RequireAuth;

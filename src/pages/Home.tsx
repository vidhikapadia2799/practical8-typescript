import React from "react";
import { useSelector } from "react-redux";
import { IUser } from "../redux/actions";
import { State } from "../redux/reducers";

const Home = () => {
  const userdata = useSelector((state: State) => state.user);

  return (
    <div>
      <h3>Name :{userdata.name}</h3>
      <h3>Email :{userdata.email}</h3>
      <h3>Phoneno :{userdata.phoneno}</h3>
    </div>
  );
};

export default Home;

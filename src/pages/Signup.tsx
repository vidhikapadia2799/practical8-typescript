import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import { registerUser } from "../redux/action-creators";
import { IUser } from "../redux/actions";
import { State } from "../redux/reducers";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [user, setUser] = useState<IUser>({
    name: "",
    email: "",
    password: "",
    phoneno: 0,
    confirmpassword: "",
  });
  const handleUserData = (e: React.FormEvent<HTMLInputElement>) => {
    // let files: any = e.currentTarget.files;
    // let reader = new FileReader();
    // reader.readAsDataURL(files[0]);

    // reader.onload = (e) => {
    //   console.log("img", e.target?.result);
    // };

    setUser({
      ...user,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };
  const addUser = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(registerUser(user));
    setSubmitted(true);
    // console.log(user);
  };
  const userdata = useSelector((state: State) => state.user);
  console.log(userdata.name);

  return (
    <>
      <div className="main_signup">
        <div className="signupform">
          <h1>SignUp</h1>
          <form>
            <label
              className="imgfile"
              style={{
                backgroundColor: "#5cb85c",
                color: "white",
                display: "inline-block",
                width: "60px",
                height: "20px",
                padding: "5px 10px",

                borderRadius: "0.3rem",
              }}
            >
              Photo +
              <input type="file" id="image" onChange={handleUserData} />
            </label>

            <label>
              Name
              <input type="text" id="name" onChange={handleUserData} />
            </label>

            <label>
              Email
              <input type="email" id="email" onChange={handleUserData} />
            </label>

            <label>
              PhoneNo
              <input type="number" id="phoneno" onChange={handleUserData} />
            </label>

            <label>
              Password
              <input type="password" id="password" onChange={handleUserData} />
            </label>

            <label>
              Confirm Password
              <input
                type="password"
                id="confirmpassword"
                onChange={handleUserData}
              />
            </label>

            {/* <Link to={{ pathname: "/home" }} onClick={addUser}>
              submit
            </Link> */}
            <button
              type="submit"
              onClick={(e) => {
                addUser(e);
                navigate("/home");
              }}
            >
              Submit
            </button>

            <button type="reset">Reset</button>
          </form>
        </div>
        <div className="signupimg">
          <img src="../signup.png" alt="signup" />
        </div>
      </div>
    </>
  );
};

export default Signup;

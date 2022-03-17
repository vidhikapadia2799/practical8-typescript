import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logoutUser } from "../redux/action-creators";
import { State } from "../redux/reducers";
import "../App.css";

const Home = () => {
  const userdata = useSelector((state: State) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <div className="homepage">
      <div>
        {userdata.image && (
          <img
            src={userdata.image as string}
            alt="profile"
            style={{ borderRadius: "50%" }}
            width="200px"
          />
        )}
        <h4>Hello {userdata.name}</h4>
        <h4>You are registered with an email id {userdata.email}</h4>
        <h4>Phone number {userdata.phoneno}</h4>
      </div>
      <div>
        <button onClick={handleSubmit} type="submit">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;

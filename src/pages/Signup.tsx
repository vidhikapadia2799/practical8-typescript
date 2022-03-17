import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { registerUser } from "../redux/action-creators";
import { IUser } from "../redux/actions";
import * as yup from "yup";
import CustomErrorMessage from "../components/CustomErrorMessage";

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

const validationSchema = yup.object({
  name: yup
    .string()
    .min(15, "Minimum 15 characters required!")
    .required("Name is Required!"),

  phoneno: yup
    .string()
    .required("Phoneno is Required!")
    .matches(/^[7-9][0-9]{9}$/, "Invalid phone number!"),

  email: yup.string().email().required("Email is Required!"),

  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password should be atleast 8 characters long,one uppercase,one lowercase, one special character and one number"
    ),

  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password doesn't match")
    .required("Confirm password is Required!"),

  image: yup
    .mixed()
    .nullable()
    .required("Image is Required!")
    .test(
      "fileSize",
      "Image size should be less than 2MB",
      (value) => value && value.size <= 2000000
    )
    .test(
      "fileType",
      "Only jpg and png is a valid image format",
      (value) => value && SUPPORTED_FORMATS.includes(value.type)
    ),
});

const Signup = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (values: IUser) => {
    // console.log("values", values);
    const imageBlob = URL.createObjectURL(values.image as Blob | MediaSource);
    console.log(imageBlob);

    const newUser = {
      name: values.name,
      email: values.email,
      password: values.password,
      confirmpassword: values.confirmpassword,
      phoneno: values.phoneno,
      image: imageBlob,
      isLoggedIn: true,
    };
    console.log("New User state", newUser);
    dispatch(registerUser(newUser));
    navigate("/home", { replace: true });
  };

  const initialValues: IUser = {
    name: "",
    email: "",
    phoneno: "",
    password: "",
    confirmpassword: "",
    image: null,
    isLoggedIn: false,
  };
  return (
    <>
      <div className="main_signup">
        <div className="signupform">
          <h1>SignUp</h1>
          <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={(values) => handleSubmit(values)}
          >
            {({ values, setFieldValue }) => (
              <Form>
                <input
                  type="file"
                  onChange={(event) => {
                    setFieldValue("image", event.target.files![0]);
                  }}
                />
                <CustomErrorMessage name="image" />

                <label>Name:</label>
                <Field name="name" type="text" />
                <CustomErrorMessage name="name" />

                <label>Email:</label>
                <Field name="email" type="email" />
                <CustomErrorMessage name="email" />

                <label>PhoneNo:</label>
                <Field name="phoneno" type="number" />
                <CustomErrorMessage name="phoneno" />

                <label>Password:</label>
                <Field name="password" type="password" />
                <CustomErrorMessage name="password" />

                <label>Confirm Password:</label>
                <Field name="confirmpassword" type="password" />
                <CustomErrorMessage name="confirmpassword" />

                <button type="submit">Submit</button>

                <button type="reset">Reset</button>
              </Form>
            )}
          </Formik>
        </div>
        <div className="signupimg">
          <img src="../signup.png" alt="signup" />
        </div>
      </div>
    </>
  );
};

export default Signup;

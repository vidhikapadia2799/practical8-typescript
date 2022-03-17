import { ErrorMessage } from "formik";

type Nameprops = {
  name: string;
};

const CustomErrorMessage = (props: Nameprops) => {
  return (
    <div style={{ color: "red" }}>
      <br />
      <ErrorMessage name={props.name} />
    </div>
  );
};

export default CustomErrorMessage;

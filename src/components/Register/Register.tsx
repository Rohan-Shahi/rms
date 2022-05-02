import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./style.scss";
import { AiFillBook } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import ErrorMsg from "./ErrorMsg";

export default function Register() {
  //function for making api call

  const RegisterStudent = async (data: object) => {
    try {
      const res = await axios({
        method: "post",
        data: data,
        url: "https://laravelprojrms.herokuapp.com/api/register",
      });
      return res;
    } catch (err) {
      alert(err);
    }
  };

  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    phone_number: "",
    address: "",
    password: "",
    password_confirmation: "",
  };

  const onSubmit = (values: any): void => {
    console.log(values);
    console.log(RegisterStudent(values));
    // console.log(response);
    //we can make api call here to send the data
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone_number: Yup.string().required("Number is required"),
    address: Yup.string().required("Address is required"),
    password: Yup.string().required("Password is required"),
    password_confirmation: Yup.string().required(
      "Confirm password is required"
    ),
  });

  return (
    <div className="wrapper">
      <div className="welcome-page text-center">
        <AiFillBook size={60} />

        <h1 className="welcome-title mt-2">Welcome</h1>

        <ul>
          <li>
            {" "}
            <AiFillCheckCircle /> Result Upload
          </li>
          <li>
            {" "}
            <AiFillCheckCircle /> Result Approval
          </li>
          <li>
            {" "}
            <AiFillCheckCircle /> Result Download
          </li>
          <li>
            {" "}
            <AiFillCheckCircle /> CGPA Computation
          </li>
        </ul>

        <h4 className="welcome-acc mt-5">Already Have An Account ?</h4>

        <button
          className="welcome-btn"
          onClick={() => {
            navigate("/");
          }}
        >
          Login
        </button>
      </div>
      <div className="form-box">
        <div className="outer-form">
          <h1 className="pb-5">
            Register as <FaAngleLeft />
            STUDENT <FaAngleRight />{" "}
          </h1>

          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            <Form>
              <div style={{ display: "flex" }}>
                <div className="field-container">
                  <Field type="text" name="name" placeholder="Name" />
                  <ErrorMessage name="name" component={ErrorMsg} />
                </div>

                <div className="field-container">
                  <Field type="text" name="email" placeholder="Email" />
                  <ErrorMessage name="email" component={ErrorMsg} />
                </div>
              </div>

              <div style={{ display: "flex" }}>
                <div className="field-container">
                  <Field
                    type="text"
                    name="phone_number"
                    placeholder="Phone Number"
                  />

                  <ErrorMessage name="phone_number" component={ErrorMsg} />
                </div>

                <div className="field-container">
                  <Field type="text" name="address" placeholder="Address" />
                  <ErrorMessage name="address" component={ErrorMsg} />
                </div>
              </div>

              <div style={{ display: "flex" }}>
                <div className="field-container">
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <ErrorMessage name="password" component={ErrorMsg} />
                </div>

                <div className="field-container">
                  <Field
                    type="password"
                    name="password_confirmation"
                    placeholder="Confirm Password"
                  />
                  <ErrorMessage name="password_confirmation" component={ErrorMsg}/>
                </div>
              </div>

              <button type="submit">Register</button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useUserLogin } from "../../../../hooks/auth/useAuth";
import { AccountLoginDataType } from "../../../../types";
import FormInput from "../../../../components/FormInput";
import GreenButton from "../../../../components/GreenButton";
import { Link } from "react-router-dom";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters")
    .required("Password is required"),
});

const UserLoginView = () => {
  const { mutate } = useUserLogin();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      ceaNumber: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, helpers) => {
      const data: AccountLoginDataType = {
        email: values.email,
        password: values.password,
      };
      mutate(data);
      helpers.resetForm({
        values,
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="bg-[#E7E7E7] w-full min-h-screen">
        <div className="absolute sm:translate-x-[-50%] sm:translate-y-[-50%] sm:top-[50%] sm:left-[50%] py-8 px-4 sm:px-0">
          <div className="bg-[white] w-full p-[80px] max-w-[585px] mx-auto rounded-[4px] pt-[60px] pb-[50px] px-4 md:px-[60px] flex flex-col justify-between">
            <div className="flex flex-col border-b-[1px] border-b-[rgba(0,0,0,0.10)]">
              <p className="font-[700] text-[30px] text-[#292929] select-none text-center">
                Welcome back
              </p>
              <p className="font-[400] text-[18px] text-[#545454] pt-[5px] pb-[36px] select-none text-center">
                Log in to Yotcha as an User
              </p>
              <div className="w-[100%] pb-[24px]">
                <FormInput
                  type="email"
                  title=""
                  placeholder="Email"
                  className="rounded-[10px] h-[54px] text-[16px] font-[400]"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red text-[14px] px-2">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
              <div className="w-[100%] pb-[24px]">
                <FormInput
                  type="password"
                  title=""
                  placeholder="Password"
                  className="rounded-[10px] h-[54px] text-[16px] font-[400]"
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red text-[14px] px-2">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>

              <div className="w-[100%] pb-[10px]">
                <GreenButton
                  type="submit"
                  buttonText="Continue"
                  className="w-full bg-primary  hover:text-white border-primary border-[1px] rounded-[10px] h-[54px] text-[16px] font-[400]"
                />
              </div>
              <div>
                <div className="flex justify-end">
                  <Link to={"/forgot-password"}>
                    <p className="text-primary text-[16px] font-[400]  select-none mb-[4px]">
                      Forgot Password?
                    </p>
                  </Link>
                </div>

                <div className="flex items-center justify-center mb-4">
                  <div className="flex items-center mt-[40px]">
                    <p className="mr-2">Dont have an account?</p>
                    <Link to="/register">
                      <span className="text-primary text-[16px] font-[400] select-none">
                        Register
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center w-full text-[16px] font-[400] mt-4">
              By continuing, you agree to Yotcha’s 
              <span className="text-primary">
                Terms and Conditions <span className="text-[#000]">&</span>{" "}
                Privacy Policy.
              </span>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UserLoginView;

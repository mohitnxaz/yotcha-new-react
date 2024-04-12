import React, { useState } from "react";
import { Field, FieldProps, Form, useFormik } from "formik";
import * as yup from "yup";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { useUserRegistration } from "../../../hooks/auth/useAuth";
import { AccountRegisterDataType } from "../../../types";
import FormInput from "../../../components/FormInput";
import GreenButton from "../../../components/GreenButton";
import { Link } from "react-router-dom";

const validationSchema = yup.object({
  fullName: yup
    .string()
    .min(2, "Full Name must be at least 2 characters")
    .required("Full Name is required"),
  phoneNumber: yup
    .string()
    .matches(/^\d+$/, "Phone Number must contain only digits")
    .min(6, "Phone Number must be at least 6 digits")
    .required("Phone Number is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});

const RegisterView = () => {
  const { mutate } = useUserRegistration();
  const [selectedValue, setSelectedValue] = useState("");

  const formik = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      password: "",
      ceaNumber: "",
      confirmPassword: "",
      role: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, helpers) => {
      console.log("values", values);
      const data: AccountRegisterDataType = {
        full_name: values.fullName,
        phone_number: values.phoneNumber,
        email: values.email,
        password: values.password,
        role: selectedValue,
        cea_number: values.ceaNumber,
      };
      mutate(data);
      helpers.resetForm({
        values,
      });
    },
  });
  const handleSelectChange = (value: any) => {
    setSelectedValue(value);
    console.log(value, "selected value");
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="bg-[#E7E7E7] w-full min-h-screen">
        <div className="absolute sm:translate-x-[-50%] sm:translate-y-[-50%] sm:top-[50%] sm:left-[50%] py-8 px-4 sm:px-0">
          <div className="bg-[white] w-full max-w-[585px] mx-auto rounded-[4px] pt-[60px] pb-[50px] px-4 md:px-[60px] flex flex-col justify-between">
            <div className="flex flex-col border-b-[1px] border-b-[rgba(0,0,0,0.10)]">
              <p className="font-[700] text-[30px] text-[#292929] select-none text-center">
                Welcome to Yotcha
              </p>
              <p className="font-[400] text-[18px] text-[#545454] pt-[5px] pb-[36px] select-none text-center">
                Register a new account
              </p>
              <div className="w-[100%] pb-[24px]">
                <FormInput
                  type="text"
                  title=""
                  placeholder="Full Name"
                  className="rounded-[10px] h-[54px] text-[16px] font-[400]"
                  {...formik.getFieldProps("fullName")}
                />
                {formik.touched.fullName && formik.errors.fullName ? (
                  <div className="text-red text-[14px] px-2">
                    {formik.errors.fullName}
                  </div>
                ) : null}
              </div>
              <div className="w-[100%] pb-[24px]">
                <FormInput
                  type="text"
                  title=""
                  placeholder="Phone Number"
                  className="rounded-[10px] h-[54px] text-[16px] font-[400]"
                  {...formik.getFieldProps("phoneNumber")}
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                  <div className="text-red text-[14px] px-2">
                    {formik.errors.phoneNumber}
                  </div>
                ) : null}
              </div>
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
              <div className="w-[100%] pb-[24px]">
                <FormInput
                  type="password"
                  title=""
                  placeholder="Confirm Password"
                  className="rounded-[10px] h-[54px] text-[16px] font-[400]"
                  {...formik.getFieldProps("confirmPassword")}
                />
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <div className="text-red text-[14px] px-2">
                    {formik.errors.confirmPassword}
                  </div>
                ) : null}
              </div>
              {/* <div className="relative w-full pt-[10px] pb-[20px]">
                <div className="relative ]">
                  <button
                    onClick={handleToggleDropdown}
                    className="focus:border-[#3cb4ac] flex justify-start items-center w-full rounded-[11px] h-[52px] bg-transparent border border-gray-300 px-4 py-2 text-sm text-gray-800 focus:outline-non"
                  >
                    {selectedValue || "Select Role"}
                  </button>
                  {isOpen && (
                    <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded shadow-md">
                      {options.map((option, index) => (
                        <div
                          key={index}
                          onClick={(e) => handleSelectOption(option, e)}
                          className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div> */}
              <div className="">
                <Select
                  onValueChange={handleSelectChange}
                  {...formik.getFieldProps("role")}
                >
                  <SelectTrigger className="h-[50px] border-solid border-2 border-sky-50">
                    <SelectValue
                      placeholder="Select Type of account"
                      className="custom-select"
                    />
                  </SelectTrigger>
                  <SelectContent className="bg-white w-full px-10 py-4 ">
                    <SelectItem
                      className="hover:bg-gray-200 cursor-pointer"
                      value="AGENT"
                    >
                      AGENT
                    </SelectItem>
                    <SelectItem
                      className="hover:bg-gray-200 cursor-pointer"
                      value="USER"
                    >
                      USER
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {selectedValue === "AGENT" && (
                <div className="w-[100%] pb-[24px]">
                  <FormInput
                    type="text"
                    title=""
                    placeholder="CEA Number"
                    className="rounded-[10px] h-[54px] text-[16px] font-[400]"
                    {...formik.getFieldProps("ceaNumber")}
                  />
                  {formik.touched.ceaNumber && formik.errors.ceaNumber ? (
                    <div className="text-red text-[14px] px-2">
                      {formik.errors.ceaNumber}
                    </div>
                  ) : null}
                </div>
              )}

              <div className="w-[100%] pb-[10px]">
                <GreenButton
                  type="submit"
                  buttonText={"Continue"}
                  // onClick={handleContinueClick}
                  className="w-full bg-primary  hover:text-white border-primary border-[1px] rounded-[10px] h-[54px] text-[16px] font-[400]"
                  // disabled={isButtonDisabled}
                />
              </div>

              <div className="flex justify-end">
                <Link to={"/forgot-password"}>
                  <p className="text-primary text-[16px] font-[400]  select-none pb-[4px]">
                    Forgot Password?
                  </p>
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex items-center mt-[40px] mb-4">
                  <p className="mr-2 m">Already have an account?</p>
                  <Link to="/login/agent-login">
                    <span className="text-primary text-[16px] font-[400] select-none">
                      Login
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-center w-full text-[16px] font-[400] mt-3">
              By continuing, you agree to Yotcha’s 
              <span className="text-primary">
                Terms and Conditions <span className="text-[#000]">&</span>
                 Privacy Policy.
              </span>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RegisterView;

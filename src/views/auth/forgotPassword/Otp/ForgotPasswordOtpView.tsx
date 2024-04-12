"use client";

import React, {
  ChangeEvent,
  createRef,
  useEffect,
  useRef,
  useState,
} from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import {
  useResendOtpPassword,
  useVerifyOtp,
} from "../../../../hooks/auth/useForgotPassword";
import { VerifyOtpDataType } from "../../../../api/auth/forgetPassword";
import { setOtpforForgetPassword } from "../../../../store/slices/auth/authSlice.reducers";
import GreenButton from "../../../../components/GreenButton";
import { Input } from "../../../../components/ui/input";

interface RootState {
  auth: {
    email: string;
  };
}

const ForgotPasswordOtpView: React.FC = () => {
  const dispatch = useDispatch();
  const email = useSelector((state: RootState) => state.auth.email);
  const [otpValue, setOtpValue] = useState(["", "", "", "", ""]);
  const [resendTimer, setResendTimer] = useState(60); // Initial timer value in seconds
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const { mutate: VerifyOtp } = useVerifyOtp();
  const inputRefs = useRef(
    [...Array(5)].map(() => createRef<HTMLInputElement>())
  );

  useEffect(() => {
    // Timer logic to decrement the timer every second
    const timerInterval = setInterval(() => {
      setResendTimer((prevTimer) => {
        if (prevTimer === 0) {
          clearInterval(timerInterval);
          setIsResendDisabled(false); // Enable the button after 1 minute
        }
        return Math.max(prevTimer - 1, 0);
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []); // Empty dependency array ensures the effect runs only once, like componentDidMount

  const handleChange = (
    index: number,
    value: string,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    // Ensure the value is a single character
    const newValue = value.charAt(0);

    let newOtp = [...otpValue];
    newOtp[index] = newValue;

    // Check if all boxes are filled
    const isFilled = newOtp.every((code) => code !== "");

    setOtpValue(newOtp);

    if (index > 0 && newValue === "") {
      // Focus on the previous input when backspace is pressed
      inputRefs.current[index - 1]!.current!.focus();
    } else if (
      index < inputRefs.current.length - 1 &&
      newValue !== "" &&
      value.length === 1
    ) {
      // Focus on the next input only after entering the second character
      inputRefs.current[index + 1]!.current!.focus();
    }
  };

  const startResendTimer = () => {
    setIsResendDisabled(true);
    const timerInterval = setInterval(() => {
      setResendTimer((prevTimer) => {
        if (prevTimer === 0) {
          clearInterval(timerInterval);
          setIsResendDisabled(false); // Enable the button after 1 minute
        }
        return Math.max(prevTimer - 1, 0);
      });
    }, 1000);
  };

  const { handleResend } = useResendOtpPassword();

  const handleResendClick = async () => {
    try {
      setResendTimer(60);
      startResendTimer();
      await handleResend(); // Call the handleResend function from the custom hook
    } catch (error) {
      console.error("Error in handleResendClick:", error);
    }
  };

  const validationSchema = Yup.object({
    otp: Yup.string().required("OTP is required."),
  });

  const formik = useFormik({
    initialValues: {
      email: email,
      otp: ["", "", "", "", ""],
    },
    // validationSchema,
    onSubmit: () => {
      const otpJoin = inputRefs.current
        ?.map((inputRef) => inputRef.current?.value)
        .join("");
      console.log(otpJoin);
      const data: VerifyOtpDataType = {
        email: email,
        otp: otpJoin,
      };
      VerifyOtp(data);
      dispatch(setOtpforForgetPassword(otpJoin.toString()));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="bg-[#E7E7E7] w-full min-h-screen">
        <div className="sm:absolute sm:translate-x-[-50%] sm:translate-y-[-50%] sm:top-[50%] sm:left-[50%] py-8 px-4 sm:px-0">
          <div className="bg-[white] w-full max-w-[585px] mx-auto rounded-[4px] pt-[60px] pb-[50px] px-4 sm:px-[80px] flex flex-col justify-between">
            <div className="flex flex-col items-center">
              <p className="font-[500] text-[24px] text-[#292929] select-none">
                Password Reset
              </p>
              <p className="font-[400] text-[14px] text-[#545454] pt-[10px] pb-[42px] select-none text-center">
                Hello <span className="text-black font-[500]">{email}</span>,
                we’ve just sent the code to your email. Please check and enter
                the code here to change password.
              </p>
              <div className="mx-auto max-w-sm space-y-6">
                <div className="space-y-4 flex flex-col items-center pb-[30px]">
                  <div className="flex space-x-2">
                    {otpValue.map((value, index) => (
                      <div key={index} className="w-1/5">
                        <Input
                          ref={inputRefs.current[index]}
                          className="w-full text-center rounded-[8px] border-[1px] border-[#E6E6E6]"
                          id={`otp${index + 1}`}
                          required
                          value={value}
                          onChange={(e) =>
                            handleChange(index, e.target.value, e)
                          }
                        />
                      </div>
                    ))}
                  </div>
                  <GreenButton
                    className="w-[30%] border-[1px] box-border border-primary"
                    type="submit"
                    disabled={!formik.isValid}
                    buttonText={"Verify"}
                  />
                </div>
              </div>
              <p className="text-[#4F4F4F] text-[14px] font-[400] pb-[4px] select-none">
                Didn’t receive email?
              </p>
              <button
                className="text-primary text-[16px] font-[500]   select-none pb-[49px]"
                disabled={isResendDisabled}
                onClick={handleResendClick}
              >
                Resend code (
                {`${Math.floor(resendTimer / 60)
                  .toString()
                  .padStart(2, "0")}:${(resendTimer % 60)
                  .toString()
                  .padStart(2, "0")}`}
                )
              </button>
            </div>
            <div className="text-center text-[16px] font-[400]">
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

export default ForgotPasswordOtpView;

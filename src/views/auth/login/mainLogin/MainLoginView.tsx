import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import apple from "../../../../../public/apple.svg";
// import google from "../../../../../../../public/google.svg";
import google from "../../../../../public/google.svg"
import facebook from "../../../../../public/facebook.svg";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useLoginApi } from "../../../../hooks/auth/useLogin";
import { setEmail } from "../../../../store/slices/auth/authSlice.reducers";
import FormInput from "../../../../components/FormInput";
import GreenButton from "../../../../components/GreenButton";

const MainLoginView = () => {
  const searchParams = useSearchParams(); // Get query parameters from the URL.
  const dispatch = useDispatch();
  const { mutate: RequestOtp } = useLoginApi();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format.")
      .required("Email is required."),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: (values) => {
      try {
        RequestOtp({ email: values.email });
        dispatch(setEmail(values.email));
      } catch (error) {}
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="bg-[#E7E7E7] w-full min-h-screen">
        <div className="absolute sm:translate-x-[-50%] sm:translate-y-[-50%] sm:top-[50%] sm:left-[50%] py-8 px-4 sm:px-0">
          <div className="bg-[white] w-full max-w-[585px] mx-auto rounded-[4px] pt-[60px] pb-[50px] px-4 md:px-[60px] flex flex-col justify-between">
          <p className="font-[700] text-[30px] text-[#292929] select-none">
            Welcome to Yotcha
          </p>
          <p className="font-[400] text-[18px] text-[#545454] pt-[5px] pb-[36px] select-none">
            Choose one of the options to go
          </p>
          <div className="w-[100%] pb-[24px]">
            <FormInput
              placeholder="Email address"
              className="rounded-[10px] h-[54px] text-[16px] font-[400]"
              value={formik.values.email}
              onChange={formik.handleChange}
              title={""}
              name="email"
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-[red] text-[14px] p-[5px]">
                {formik.errors.email}
              </p>
            ) : null}
          </div>
          <div className="w-[100%] pb-[69px]">
            <GreenButton
              type="submit"
              buttonText={"Continue"}
              className="w-full bg-primary  hover:text-primary border-primary border-[1px] rounded-[10px] h-[54px] text-[16px] font-[400]"
              disabled={!formik.isValid || !formik.dirty}
            />
          </div>
          <div className="flex justify-start gap-[20px] w-full items-center pb-[43px]">
            <p className="text-[#4F4F4F] w-[45%] select-none">
              Or continue with
            </p>
            <div className="w-[100%]">
              <hr />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-[20px] w-full pb-[40px]">
            <div
              // onClick={handleSignIn}
              className="rounded-[8px] border-[1px]  py-[14px] flex justify-center w-full"
            >
              <img src={google} alt={""} />
            </div>
            <div className="rounded-[8px] border-[1px]  py-[14px] flex justify-center w-full">
              <img src={apple} alt={""} />
            </div>
            <div className="rounded-[8px] border-[1px]  py-[14px] flex justify-center w-full">
              <img src={facebook} alt={""} />
            </div>
            <Link to={"/login/user-login"}>
              <div className="p-4 rounded-[8px] border-[1px]  py-[14px] flex justify-center w-full">
                <div>Email Login</div>
              </div>
            </Link>
          </div>
          <p className="text-[#4F4F4F] text-[14px] font-[400] pb-[4px] select-none text-center">
            Are you an Agent?
          </p>
          <Link to={"/login/agent-login"}>
            <p className="text-primary text-center text-[16px] font-[500]  select-none pb-[49px]">
              Log in to Agent Net
            </p>
          </Link>
          <div className="text-center w-full text-[16px] font-[400]">
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

export default MainLoginView;

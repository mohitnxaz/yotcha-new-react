import { useDispatch } from "react-redux";
import { useForgotPassword } from "../../../hooks/auth/useForgotPassword";
import * as Yup from "yup";
import { useFormik } from "formik";
import { setEmail } from "../../../store/slices/auth/authSlice.reducers";
import FormInput from "../../../components/FormInput";
import GreenButton from "../../../components/GreenButton";

const ForgotPasswordView = () => {
  const { mutate } = useForgotPassword();
  const dispatch = useDispatch();
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
    onSubmit: (values, helpers) => {
      try {
        dispatch(setEmail(values.email));
        mutate(values.email);
        helpers.resetForm({
          values,
        });
      } catch (error) {}
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="bg-[#E7E7E7] w-full min-h-screen">
        <div className="sm:absolute sm:translate-x-[-50%] sm:translate-y-[-50%] sm:top-[50%] sm:left-[50%] py-8 px-4 sm:px-0">
          <div className="bg-[white] w-full max-w-[600px] rounded-[4px] pt-[60px] pb-[50px] px-4 flex flex-col items-center">
            <p className="font-[700] text-[30px] text-[#292929] select-none">
              Forgot Password
            </p>
            <p className="font-[400] text-[18px] text-[#545454] pt-[5px] pb-[36px] select-none">
              Please enter your email address registered with us
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
          </div>
        </div>
      </div>
    </form>
  );
};

export default ForgotPasswordView;

import { useSelector } from "react-redux";
import { useLoginApi } from "./useLogin";


interface RootState {
  auth: {
    email: string;
  };
}

interface ResendOtpHookResult {
  handleResend: () => Promise<void>;
}

const useResendOtp: () => ResendOtpHookResult = () => {
  const email = useSelector((state: RootState) => state.auth.email);
  const { mutate: requestOtp } = useLoginApi();

  const handleResend = async () => {
    try {
      // Call the requestOtp mutation with the email
      await requestOtp({ email });
      // Handle success, e.g., update Redux state or display a success message
    } catch (error) {
      // Handle error, e.g., display an error message to the user
      console.error("Error resending OTP:", error);
    }
  };

  return { handleResend };
};

export default useResendOtp;

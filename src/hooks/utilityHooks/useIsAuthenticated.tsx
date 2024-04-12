

import { useSelector } from "react-redux";
import { AuthState } from "../../store/slices/auth/authSlice.reducers";
const useIsAuthenticated = () => {
  const isLoggedIn = useSelector((state: AuthState) => state.isLoggedIn);
  if (!isLoggedIn) {
    return false;
  } else {
    return true;
  }
};

export default useIsAuthenticated;

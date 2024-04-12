import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/HomePage";
import NotFound from "../pages/notFound/NotFoundPage";
import MainLoginPage from "../pages/auth/login/MainLoginPage";
import ForgotPasswordPage from "../pages/auth/forgot-password/forgotPasswordPage";
import RegisterPage from "../pages/auth/register/RegisterPage";
import AgentLoginPage from "../pages/auth/login/agent-login";
import UserLoginPage from "../pages/auth/login/user-login";
import LoginOtpPage from "../pages/auth/login/otp";
import ListingPage from "../pages/listing/ListingPage";
import DetailsPage from "../pages/details/DetailsPage";
import AddPropertyPage from "../pages/add-property/AddPropertyPage";
import OTPPasswordPage from "../pages/auth/forgot-password/otpForgotPasswordPage";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store";
import {
  getFilterOptionsAsync,
  getFilteredListingsAsync,
} from "../store/slices/filter/filterThunk";
import {
  AddAgentFilterToUrlReturnQueryString,
  AddFilterToUrlReturnQueryString,
  updateQueryUsingJs,
} from "../utils/filter";
import AgentDirectoryPage from "../pages/agent-directory/AgentDirectoryPage";
import AgentDetailsPage from "../pages/agent-details/AgentDetailsPage";
import { getAgentFilteredListingsAsync } from "../store/slices/agentFilter/agentFilterThunk";

const Router = () => {
  const filterValues = useSelector(
    (state: any) => state.filter.selectedFilters
  );

  const agentFilterValues = useSelector(
    (state: any) => state.agentFilter.selectedFilters
  );

  const dispatch = useDispatch<AppDispatch>();

  //getting filter options//
  useEffect(() => {
    dispatch(getFilterOptionsAsync());
  }, []);
  // Update filtered listings on filter value change

  //page refresh garda suruma slectedfilters empty huncha as redux resets so ekchit call bho
  //tespaci url bata values selctedfilter ma populate huncha so again selected filter chagne bho
  //so useeffect esle garda 2 choti call bhairakko jasto cha
  //getting filtered items (buildings+agents)

  useEffect(() => {
    dispatch(getFilteredListingsAsync(filterValues));
    const queryString = AddFilterToUrlReturnQueryString(filterValues);
    updateQueryUsingJs(queryString);
  }, [filterValues]);

  useEffect(() => {
    dispatch(getAgentFilteredListingsAsync(agentFilterValues));
    const queryString = AddAgentFilterToUrlReturnQueryString(agentFilterValues);
    updateQueryUsingJs(queryString);
  }, [agentFilterValues]);

  // const context = useContext(AuthContext);

  // useEffect(() => {
  //   async function loadUser() {
  //     if (localStorage["access"]) {
  //       // validate token

  //       context.authDispatch({
  //         type: "LOGIN",
  //         isAdmin: true,
  //       });
  //     } else {
  //       context.authDispatch({
  //         type: "LOGIN_FAILURE",
  //       });
  //     }
  //   }

  //   loadUser();
  // }, []);

  //according to requirement add admin/user/agent protected routes on each item
  //according to requirement add admin/user/agent protected routes on each item
  //according to requirement add admin/user/agent protected routes on each item
  //according to requirement add admin/user/agent protected routes on each item

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<MainLoginPage />} />
        <Route path="/login/otp" element={<LoginOtpPage />} />
        <Route path="/login/user-login" element={<UserLoginPage />} />
        <Route path="/login/agent-login" element={<AgentLoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/forgot-password/otp" element={<OTPPasswordPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/agent-login" element={<AgentLoginPage />} />
        <Route path="/user-login" element={<UserLoginPage />} />
        <Route path="/add-property" element={<AddPropertyPage />} />
        <Route path="/listing" element={<ListingPage />} />
        <Route path="/listing/:id" element={<DetailsPage />} />
        <Route path="/agent-directory/:id" element={<AgentDetailsPage />} />
        <Route path="/agent-directory" element={<AgentDirectoryPage />} />

        {/* <Route
          path="/users"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        /> */}
        {/* <Route
          path="/users/addEmployee"
          element={
            <ProtectedRoute>
              <ProtectedRouteAdmin>
                <AddEmployee />
              </ProtectedRouteAdmin>
            </ProtectedRoute>
          }
        /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;

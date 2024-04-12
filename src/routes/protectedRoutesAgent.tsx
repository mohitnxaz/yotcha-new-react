// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const ProtectedRouteAgent = ({ redirectPath = "/login", children }) => {
//   const { authState } = useAuth();
//   const userRole = localStorage.getItem('userRole');


//   if (authState.loading) {
//     return <div>Loading...</div>; // You can display a loading indicator here
//   }

//   if (userRole!=='AGENT') {
//     // If the user is not authenticated, you can redirect to the login page
//     return <Navigate to={redirectPath} replace />;
//   }

//   return children;
// };

// export default ProtectedRouteAgent;

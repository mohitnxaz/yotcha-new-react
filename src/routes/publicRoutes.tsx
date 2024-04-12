import React from "react";
import { Navigate, Route, RouteProps } from "react-router-dom";

type PublicRouteProps = {
  path: RouteProps["path"];
  element: React.ReactElement;
};

const PublicRoute: React.FC<PublicRouteProps> = ({ path, element }) => {
  const isPublic = true;

  if (isPublic) {
    return <Route path={path} element={element} />;
  }

  // If the route is not public, redirect to another page (e.g., login)
  return <Navigate to="/notfoundpage" />;
};

export default PublicRoute;

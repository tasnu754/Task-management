import { Navigate } from "react-router-dom";
import { useContext } from "react";
import PropTypes from "prop-types";
import ContentLoader from "react-content-loader";
import { AuthProvider } from "./Authenticate";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthProvider);
  console.log(user, "private");

  if (loading) {
    //   return <span className="loading loading-spinner text-success"></span>;
    return (
      <ContentLoader viewBox="0 0 380 70">
        {/* Only SVG shapes */}
        <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
        <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
        <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
        </ContentLoader>
        
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/signin"></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
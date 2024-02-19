import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {

   if (!true) {
     return <Navigate to="/login" replace />;
   } 
   return children;
 };
 export default PrivateRoute;
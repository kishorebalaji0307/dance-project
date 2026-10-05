import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

/**
 * AdminProtectedRoute — only allows users with role === 'admin'.
 * Regular authenticated users are redirected to /admin/login.
 */
const AdminProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0A0A0A]">
        <div className="flex flex-col items-center gap-4">
          <div className="h-14 w-14 animate-spin rounded-full border-t-4 border-r-4 border-[#C9A227] border-b-transparent border-l-transparent" />
          <p className="uppercase tracking-[0.3em] text-[#C9A227] text-xs font-bold animate-pulse">
            Verifying Access...
          </p>
        </div>
      </div>
    );
  }

  if (!user || user.role !== "admin") {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return children;
};

export default AdminProtectedRoute;

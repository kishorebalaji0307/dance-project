import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#050505] text-white">
        <div className="relative flex flex-col items-center gap-4">
          {/* Stunning gold loading circle */}
          <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-r-4 border-[#D4AF37] border-b-transparent border-l-transparent"></div>
          <p className="uppercase tracking-[0.25em] text-[#D4AF37] text-xs font-semibold animate-pulse">
            Verifying Authentication...
          </p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;

import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminProtectedRoute from "./components/AdminProtectedRoute";
import EventPopup from "./components/EventPopup";

import Home from "./pages/Home";
import ClassesPage from "./pages/ClassPage";
import Contact from "./pages/Contact";
import StudioPage from "./pages/StudioPage";
import GalleryPage from "./pages/GalleryPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <AuthProvider>
      {/* EventPopup renders on public pages only (skips /admin/* internally) */}
      <EventPopup />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/studio" element={<StudioPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        {/* Admin routes — completely separate from public auth */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <AdminProtectedRoute>
              <AdminDashboard />
            </AdminProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
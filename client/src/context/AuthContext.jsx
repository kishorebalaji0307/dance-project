import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();
const API_URL = import.meta.env.VITE_API_URL || "";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check auth status on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = { "Content-Type": "application/json" };
        if (token) headers["Authorization"] = `Bearer ${token}`;

        const res = await fetch(`${API_URL}/api/auth/me`, {
          method: "GET",
          headers,
          credentials: "include",
        });
        const data = await res.json();
        if (data.success) {
          setUser(data.user); // user object includes role from /api/auth/me
        } else {
          setUser(null);
        }
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  // Login handler
  const login = async (email, password) => {
    setError(null);
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.success) {
        if (data.token) localStorage.setItem("token", data.token);
        setUser(data.user);
        return { success: true };
      } else {
        setError(data.message || "Login failed");
        return { success: false, error: data.message || "Login failed" };
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      return { success: false, error: "An unexpected error occurred. Please try again." };
    } finally {
      setLoading(false);
    }
  };

  // Register handler
  const register = async (username, email, password) => {
    setError(null);
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ username, email, password }),
      });
      const data = await res.json();
      if (data.success) {
        if (data.token) localStorage.setItem("token", data.token);
        setUser(data.user);
        return { success: true };
      } else {
        setError(data.message || "Registration failed");
        return { success: false, error: data.message || "Registration failed" };
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      return { success: false, error: "An unexpected error occurred. Please try again." };
    } finally {
      setLoading(false);
    }
  };

  // Logout handler
  const logout = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const headers = { "Content-Type": "application/json" };
      if (token) headers["Authorization"] = `Bearer ${token}`;

      const res = await fetch(`${API_URL}/api/auth/logout`, {
        method: "POST",
        headers,
        credentials: "include",
      });
      localStorage.removeItem("token");
      const data = await res.json();
      if (data.success) {
        setUser(null);
        return { success: true };
      } else {
        setUser(null);
        return { success: false, error: data.message || "Logout failed" };
      }
    } catch (err) {
      localStorage.removeItem("token");
      setUser(null);
      return { success: true };
    } finally {
      setLoading(false);
    }
  };

  const clearError = () => setError(null);

  const value = {
    user,
    loading,
    error,
    login,
    register,
    logout,
    clearError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

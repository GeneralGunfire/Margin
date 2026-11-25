import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./index.css";
import { AuthProvider, useAuth } from "@/lib/auth";
import { supabaseConfigured } from "@/lib/supabase";
import Splash from "@/components/Splash";
import Layout from "@/components/Layout";
import Login from "@/pages/Login";
import ForgotPassword from "@/pages/ForgotPassword";
import ResetPassword from "@/pages/ResetPassword";
import Dashboard from "@/pages/Dashboard";
import CalendarPage from "@/pages/CalendarPage";
import Library from "@/pages/Library";
import LessonPage from "@/pages/LessonPage";
import PastPapers from "@/pages/PastPapers";
import SettingsPage from "@/pages/SettingsPage";

function Protected() {
  const { session, loading, sessionExpired } = useAuth();
  const loc = useLocation();
  if (loading) return <Splash />;
  if (!session)
    return <Navigate to="/login" state={{ from: loc.pathname + loc.search, expired: sessionExpired }} replace />;
  return <Layout />;
}

function App() {
  if (!supabaseConfigured) {
    return (
      <div className="mx-auto max-w-lg p-8">
        <h1 className="mb-2 text-xl font-semibold">Margin needs Supabase keys</h1>
        <p className="text-muted-foreground">
          Copy <code>.env.example</code> to <code>.env.local</code>, fill in VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY,
          then restart <code>npm run dev</code>.
        </p>
      </div>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route element={<Protected />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/library" element={<Library />} />
        <Route path="/library/:subject" element={<Library />} />
        <Route path="/library/:subject/:topic" element={<Library />} />
        <Route path="/library/:subject/:topic/:lesson" element={<LessonPage />} />
        <Route path="/papers" element={<PastPapers />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);


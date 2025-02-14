import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useAppSelector } from "./Store/Hook";
import LayoutWithHeaderFooter from "./Components/Layout/LayoutWithHeaderFooter";
import PageNotFound from "./Pages/PageNotFound";

const Home = React.lazy(() => import("./Pages/Home"));
const AuthPage = React.lazy(() => import("./Pages/AuthPage"));
const ForgotPassword = React.lazy(() => import("./Pages/ForgotPassword"));
const VerifyOTP = React.lazy(() => import("./Pages/VerifyOTP"));
const ResetPassword = React.lazy(() => import("./Pages/ResetPassword"));

function App() {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  // const location = useLocation();

  // const showHeaderFooter = !["/signup", "/signin", "/forgot-password", "/verify-otp", "/reset-password", "*"].includes(location.pathname);

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Routes with Header and Footer */}
            <Route element={<LayoutWithHeaderFooter />}>
              <Route path="/" element={<Home />} />
            </Route>

            {/* Routes without Header and Footer */}
            <Route
              path="/signin"
              element={isAuthenticated ? <Home /> : <AuthPage />}
            />
            <Route
              path="/signup"
              element={isAuthenticated ? <Home /> : <AuthPage />}
            />
            <Route
              path="/forgot-password"
              element={isAuthenticated ? <Home /> : <ForgotPassword />}
            />
            <Route
              path="/verify-otp"
              element={isAuthenticated ? <Home /> : <VerifyOTP />}
            />
            <Route
              path="/reset-password"
              element={isAuthenticated ? <Home /> : <ResetPassword />}
            />
            {/* Catch-all route for undefined paths */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;

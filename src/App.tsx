import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { useAppSelector } from "./Store/Hook";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

const Home = React.lazy(() => import("./Pages/Home"));
const AuthPage = React.lazy(() => import("./Pages/AuthPage"));

function AppLayout() {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const location = useLocation();

  const showHeaderFooter = !["/signup", "/signin"].includes(location.pathname);

  return (
    <>
        {showHeaderFooter && <Header />}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            {/* Private routes */}
            <Route
              path="/abc"
              element={isAuthenticated ? <>Harshit</> : <>User</>}
            />
            <Route
              path="/signin"
              element={isAuthenticated ? <Home /> : <AuthPage />}
            />
            <Route
              path="/signup"
              element={isAuthenticated ? <Home /> : <AuthPage />}
            />
          </Routes>
        </Suspense>
        {showHeaderFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;

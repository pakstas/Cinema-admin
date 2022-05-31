import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components";

const HomeLazy = lazy(() => import("./pages/Home/Home"));
const LoginLazy = lazy(() => import("./pages/Login/Login"));
const AboutLazy = lazy(() => import("./pages/About/About"));
const MoviesLazy = lazy(() => import("./pages/Movies/Movies"));

function RouteLinks() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/"
              index
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <HomeLazy />
                </Suspense>
              }
            />
            <Route
              path="/about"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <AboutLazy />
                </Suspense>
              }
            />
            <Route
              path="/movies"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <MoviesLazy />
                </Suspense>
              }
            />
          </Route>

          <Route path="/login" element={<LoginLazy />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RouteLinks;

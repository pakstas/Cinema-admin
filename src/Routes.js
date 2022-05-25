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
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route element={<Layout />}>
              <Route exact path="/" element={<HomeLazy />} />
              <Route exact path="/about" element={<AboutLazy />} />
              <Route exact path="/movies" element={<MoviesLazy />} />
            </Route>
            <Route exact path="/login" element={<LoginLazy />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default RouteLinks;

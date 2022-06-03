import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components";

const Home = lazy(() => import("./pages/Home/Home"));
const Login = lazy(() => import("./pages/Login/Login"));
const About = lazy(() => import("./pages/About/About"));
const Movies = lazy(() => import("./pages/Movies/Movies"));
const Cinema = lazy(() => import("./pages/Cinema/Cinema"));
const Showtimes = lazy(() => import("./pages/Showtimes/Showtimes"));
const Tickets = lazy(() => import("./pages/Tickets/Tickets"));
const Users = lazy(() => import("./pages/Users/Users"));

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
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/about"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="/movies"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Movies />
                </Suspense>
              }
            />
            <Route
              path="/cinema"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Cinema />
                </Suspense>
              }
            />
            <Route
              path="/tickets"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Tickets />
                </Suspense>
              }
            />
            <Route
              path="/users"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Users />
                </Suspense>
              }
            />
            <Route
              path="/showtimes"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Showtimes />
                </Suspense>
              }
            />
          </Route>

          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RouteLinks;

import React from "react";

import { Route, Routes, Outlet } from "react-router-dom";
import { HomeLayout } from "../components/Layout";
function Home() {
  return (
    <HomeLayout>
      <Outlet />
    </HomeLayout>
  );
}

export default Home;

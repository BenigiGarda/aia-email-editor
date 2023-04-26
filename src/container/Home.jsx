import React, { useEffect } from "react";

import { Route, Routes, Outlet } from "react-router-dom";
import { HomeLayout } from "../components/Layout";
import axios from "axios";
import Cookies from "js-cookie";
function Home() {
  return (
    <HomeLayout>
      <Outlet />
    </HomeLayout>
  );
}

export default Home;

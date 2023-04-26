import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Login, OTP } from "../container";
import {
  EmailEditor,
  EmailEditorDraft,
  SaveData,
  Setting,
} from "../components/HomeContent";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/login/otp" element={<OTP />} />
        <Route path="/" element={<Home />}>
          <Route path="/" element={<EmailEditor />} />
          <Route path="/:id" element={<EmailEditorDraft />} />
          <Route path="savedata" element={<SaveData />} />
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;

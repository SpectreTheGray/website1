import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./Pages/dash_board";
import SignUp from "./Pages/signup"; // Import your SignUp component
import Page1 from "./Pages/Page1"; // Import your Page1 component

const App = () => {
  // Encode the signup route
  const encodedSignUpRoute = encodeURIComponent("/signup");
  const encodedPage1Route = encodeURIComponent("/page1");

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<DashBoard />} />
        <Route path={`/${encodedSignUpRoute}`} element={<SignUp />} />
        <Route path={`/${encodedPage1Route}`} element={<Page1 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

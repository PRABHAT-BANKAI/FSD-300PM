import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Create from "./components/Create";
import Update from "./components/Update";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </>
  );
};

export default App;

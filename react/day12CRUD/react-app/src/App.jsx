import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Create from "./components/Create";
import Update from "./components/Update";
import Extra from "./components/Extra";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/extra" element={<Extra />} />
      </Routes>
    </>
  );
};

export default App;

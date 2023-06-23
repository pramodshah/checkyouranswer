import React from "react";
import logo from "./logo.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ListOfExams from "./components/exams/ListOfExams.Component";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExamSets from "./components/exams/ExamSets.Component";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListOfExams />}></Route>
          <Route path="/examSets/:id" element={<ExamSets />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

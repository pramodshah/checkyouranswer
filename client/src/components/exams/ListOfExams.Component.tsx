import React from "react";
import { Button, Card } from "react-bootstrap";
import MCQForm from "../mcq/MCQForm.Component";
import MCQ from "../mcq/MCQForm.Component";
import Exams from "./Exams.Component";
import "./css/ListOfExams.css"
import { ExamsList } from "../../models/exams.model";
import ExamSets from "./ExamSets.Component";
import { Outlet } from "react-router-dom";
function ListOfExams() {
  const exams:ExamsList[] = [{id:"1",name:"UPSC",set:4,imageUrl:"https://e1.pxfuel.com/desktop-wallpaper/510/753/desktop-wallpaper-upsc-logo-upsc.jpg"},{id:"2",name:"CAT",set:4,imageUrl:"https://blog.oureducation.in/wp-content/uploads/2018/05/CAT-Coaching-Classes-Delhi.png"}];
  return (
    <div className="list-of-exams">
      
      <Exams exams={exams} />
      <div style={{display:"flex",gap:"100px"}}>
      </div>
      <Outlet />
    </div>
  );
}

export default ListOfExams;

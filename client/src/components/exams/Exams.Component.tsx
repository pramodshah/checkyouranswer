import React from "react";
import {Card } from "react-bootstrap";
import "./css/Exams.css";
import { ExamsList} from "../../models/exams.model";
import { Link } from "react-router-dom";
type ExamProps = {
  exams:ExamsList[]
};
function Exams(props: ExamProps) {
  return (
    <div className="exam-list">
      {props.exams.map((exam) => {
        return (
          <div className="each-exam">
            <Link to={"/examSets/" +exam.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={exam.imageUrl}  height="100px" width="100px"/>
              <Card.Body>
                <Card.Title>{exam.name}</Card.Title>
              </Card.Body>
            </Card>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
export default Exams;

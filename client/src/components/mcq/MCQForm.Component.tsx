// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import "./MCQ.css";
// type FormData = {
//   [key: string]: string;
// };

// type Question = {
//   id: number;
//   question: string;
//   options: string[];
// };

// const MCQForm: React.FC = () => {
//   const { register, handleSubmit } = useForm<FormData>();

//   const totalQuestions: number = questions.length;
//   const questionsPerPage: number = 10;
//   const totalPages: number = Math.ceil(totalQuestions / questionsPerPage);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const startIndex: number = (currentPage - 1) * questionsPerPage;
//   const endIndex: number = startIndex + questionsPerPage;
//   const displayedQuestions: Question[] = questions.slice(startIndex, endIndex);

//   const onSubmit = (data: FormData) => {
//     console.log(data);
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   };

//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prevPage) => prevPage - 1);
//     }
//   };

//   const handlePageChange = (pageNumber: number) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="form-no-question">
//           <div className="options-label">
//             <div className="options-label-item">Q.</div>
//             <div className="options-label-item">A</div>
//             <div className="options-label-item">B</div>
//             <div className="options-label-item">C</div>
//             <div className="options-label-item">D</div>
//           </div>
//           {displayedQuestions.map((question) => (
//             <div className="form-options" key={question.id}>
//             <div className="each-option">{question.id}</div>
//               {question.options.map((option, index) => (
//                 <div key={index} className="each-option">
//                   <input className="radio"
//                     type="radio"
//                     id={`option-${question.id}-${index}`}
//                     {...register(`${question.id}`, { required: false })}
//                     value={option}
//                   />
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>

//         <button type="submit">Submit</button>
//       </form>
//       <div>
//         <button onClick={handlePreviousPage}>Prev</button>

//         {Array.from({ length: totalPages }, (_, index) => index + 1).map(
//           (pageNumber) => (
//             <button
//               key={pageNumber}
//               onClick={() => handlePageChange(pageNumber)}
//               disabled={pageNumber === currentPage}
//             >
//               {pageNumber}
//             </button>
//           )
//         )}

//         <button onClick={handleNextPage}>Next</button>
//       </div>
//     </div>
//   );
// };

// export default MCQForm;
import React, { useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import "./MCQ.css";
type FormData = {
  options: string[];
};

const MCQForm = () => {
  const { register, reset, handleSubmit, watch } = useForm<FormData>({
    defaultValues: {
      options: Array(100).fill(""),
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const handleUndoSelection = (index: number) => {
    const options = watch("options") as string[];
    options[index] = "";
    reset({ options });
  };

  const totalQuestions = Array.from({ length: 100 }, (_, index) => index);
  const questionsPerPage: number = 15;
  const totalPages: number = Math.ceil(
    totalQuestions.length / questionsPerPage
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const startIndex: number = (currentPage - 1) * questionsPerPage;
  const endIndex: number = startIndex + questionsPerPage;
  const displayedQuestions: Array<number> = totalQuestions.slice(
    startIndex,
    endIndex
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-no-question">
          <div className="options-label">
            <div className="options-label-item">Q.</div>
            <div className="options-label-item">A</div>
            <div className="options-label-item">B</div>
            <div className="options-label-item">C</div>
            <div className="options-label-item">D</div>
            <div className="options-label-item">Reset</div>
          </div>
          {displayedQuestions.map((questionIndex) => (
            <div className="form-options" key={questionIndex}>
              <div className="each-option">{questionIndex +1}</div>
              <label  className="each-option">
                <input
                 
                  type="radio"
                  value="A"
                  {...register(`options[${questionIndex}]` as any)}
                />
              </label>

              <label  className="each-option">
                <input
                 
                  type="radio"
                  value="B"
                  {...register(`options[${questionIndex}]` as any)}
                />
              </label>
              <label className="each-option">
                <input
                  
                  type="radio"
                  value="C"
                  {...register(`options[${questionIndex}]` as any)}
                />
              </label>
              <label className="each-option">
                <input
                  
                  type="radio"
                  value="D"
                  {...register(`options[${questionIndex}]` as any)}
                />
              </label>
              <button
                className="each-option"
                type="button"
                onClick={() => handleUndoSelection(questionIndex)}
              >
                <i className="fa-solid fa-arrows-rotate"></i>
              </button>
            </div>
          ))}
        </div>

        <button type="submit">Submit</button>
      </form>
      <div>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              disabled={pageNumber === currentPage}
            >
              {pageNumber}
            </button>
          )
        )}

        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default MCQForm;

import React from "react";

const ReviewComp = ({obj , idx , showIdx  , setShowIdx }) => {
    let {reviewerName , comment , rating } = obj ;
    

  return (
    <>
      <div className="box1 h-16 w-3/4 bg-gray-300 mx-auto rounded-3xl flex justify-between items-center px-20 text-black text-2xl border-b-2 border-black">
        <p> {reviewerName }</p>
        <p onClick={()=>setShowIdx( showIdx == idx ? null : idx)}> 🔼 </p>
      </div>
      {
        showIdx == idx ? <div className="box2 h-16 w-3/4 bg-gray-100 mx-auto rounded-3xl flex justify-between items-center px-16 text-black text-2xl  border-b-2 border-black">
        <p> {comment} </p>
        <p> {rating }</p>
      </div>:<></>
      }
    </>
  );
};

export default ReviewComp;

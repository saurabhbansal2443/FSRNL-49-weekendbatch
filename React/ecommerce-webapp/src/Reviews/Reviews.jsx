import React ,{useState }from 'react';
import ReviewComp from './ReviewComp';

const Reviews = ({reviews}) => {
    let [showIdx , setShowIdx] = useState(null)
  return (
    <div className='w-3/4 h-1/3 bg-white mx-auto mt-24 rounded-3xl pt-2'>
        {
            reviews.map((obj , idx ) => ( <ReviewComp obj={obj} idx={idx} showIdx={showIdx} setShowIdx={setShowIdx} ></ReviewComp>))
        }
    </div>
  )
}

export default Reviews

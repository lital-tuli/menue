import { useEffect, useState } from "react";

function Ratings() {
    let [rating , setRating] = useState([0]);

    
    let inc = () => setRating(rating + 1);

    let dec = () => {
      if (rating > 0) setRating(rating - 1);
    };
  
    useEffect(() => {
      console.log("rating changes");
    }, [rating]);
    return (
      <>
        <p>{rating}</p>
        <button className="btn btn-primary" onClick={inc}>
          +
        </button>
        <button className="btn btn-danger" onClick={dec}>
          -
        </button>
      </>
    );
  
  

};
export default Ratings;
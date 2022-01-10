import Rate from './Rate'
import React, { useState } from "react";
function Card({img,title}) { 
  const [rating, setRating] = useState(0);
  return (
        <div className="p-2">
        <div className="shadow-es text-center pb-2 overflow-hidden  rounded">
            <img src={img} className="w-100"/>
            <p>{title}</p>
            <Rate rating={rating} onRating={(rate) => setRating(rate)} />
        </div>

    </div>
  );
}

export default Card;
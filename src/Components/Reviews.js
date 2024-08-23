import React, { useState } from "react";
import "../Styles/Reviews.css";

import dongeui from '../Assets/images/dongeui.jpg'
import cheongnam from '../Assets/images/cheongam.jpg'
import kangwon from '../Assets/images/kangwon.jpg'
import kyundong from '../Assets/images/kyundong.jpg'

 const customerReviews = [
    {
      "name": "Dong-eui University",
      "location": "South Korea",
      "image": dongeui,
    },
    {
      "name": "Kangwon National University",
      "location": "South Korea",
      "image": kangwon,
    },
    {
      "name": "Cheongam University",
      "location": "South Korea",
      "image": cheongnam,
    },
    {
      "name": "Kyungdong University",
      "location": "South Korea",
      "image": kyundong,
    },
    
];


function Reviews() {
  let  rName, rLocation;
  const reviewsLength = customerReviews.length - 1;
  const [review, setReview] = useState(0);

  // back to previous review
  const backBtnClick = () => {
    setReview(review <= 0 ? reviewsLength : review - 1);
    handleReviewsUpdation();
  };

  // go to newer review
  const frontBtnClick = () => {
    setReview(review >= reviewsLength ? 0 : review + 1);
    handleReviewsUpdation();
  };

  // update reviews
  const handleReviewsUpdation = () => {
    const reviewMessage = customerReviews[review];
    rName = reviewMessage.name;
    rLocation = reviewMessage.location;
  };

  // list review on visit
  handleReviewsUpdation();

  return (
    <div className="review-section" id="universities">
      <div className="rw-text-content">
        {/* <p className="rw-text-title">
          More over <span className="rw-text-num">1500+ Customers</span>
        </p> */}

        <p className="rw-text-desc">Our university partners</p>

        <p className="rw-text-format">
          {/* <span className="rw-text-quote1">''</span> */}
          <img className="rw-review" src={rName ==='Dong-eui University' ? dongeui:rName ==='Kangwon National University'?kangwon :rName ==='Kyungdong University'?kyundong :  cheongnam} alt="university" />
          {/* <span className="rw-text-quote2">''</span> */}
        </p>

        <div className="rw-authors">
          <div className="rw-names">
            <p className="rw-reviewer-name">{rName}</p>
            <p className="rw-reviewer-place">{rLocation}</p>
          </div>

          <div className="rw-btns">
            <button
              className="rw-next-btn"
              type="button"
              onClick={backBtnClick}
            >
              ←
            </button>
            <button
              className="rw-next-btn"
              type="button"
              onClick={frontBtnClick}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;

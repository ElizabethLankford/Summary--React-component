import React from "react"

export default function Result(){
    return(
        
       <div className="result-container">
          <h3 className="lav-color">Your Result</h3>
            <div className="result-hero">
              <h1>76</h1>
              <p className="lav-color">of 100</p>
            </div>
          <h2 className="result-text">Great</h2>
          <p class="result-subtext lav-color">You scored higher than 65% of the people who have taken these tests.</p>
      </div>
       
    )
}
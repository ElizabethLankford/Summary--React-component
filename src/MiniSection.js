import React from "react"

export default function MiniSection(props){
    return(
    <div className={`mini-section ${props.category}`}>
      <img alt={`${props.category}`} src={`${props.icon}`} />
      <h4>{props.category}</h4>
      <p><span>{props.score}</span> / 100</p>
    </div>
    )
}
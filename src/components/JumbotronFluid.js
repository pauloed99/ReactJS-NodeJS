import React from "react";

export default function JumbotronFluid(props) {
  return (
    <div className="JumbotronFluid">
      <div className="jumbotron jumbotron-fluid" style={{backgroundColor:"PowderBlue"}}>
        <div className="container">
          <h1 className="display-4">{props.title}</h1>
          <p className="lead">
            {props.text}      
          </p>
        </div>
      </div>
    </div>
  );
}

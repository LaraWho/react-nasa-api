import React from "react";
import { Link } from "react-router-dom";

const CardLink = ( { apiName, apiDesc } ) => {

  return (
    <Link to="/apidetails" state={{ apiName, apiDesc }}>
      <div className="card-link" >
        <h1>{apiName}</h1>
        <h1>{apiDesc}</h1>
      </div>
    </Link>
  )
}

export default CardLink;
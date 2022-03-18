import React from "react";
import { useLocation } from "react-router-dom";

const ApiDetails = () => {
    const location = useLocation();
    let { apiName, apiDesc } = location.state;

    return(
      <div>
        { apiName }
        { apiDesc }
      </div>
    )
}


export default ApiDetails;
import React from "react";
import apiInfo from './../apiInfo.json';
import CardLink from "./CardLink";

const CardLinkContainer = ( props ) => {
  let componentsToDisplay = apiInfo.map((api, i) => {
    return (
      <CardLink key={`${api}-${i}`} apiName={api.apiName} apiDesc={api.apiDesc} />
    )
  })
  return (
    <div className="card-link-container" >
      { componentsToDisplay }
    </div>
  );
}

export default CardLinkContainer;
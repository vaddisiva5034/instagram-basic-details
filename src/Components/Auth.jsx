import React from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

export function Auth() {
  const location = useLocation();
  const queryParms = queryString.parse(location.search);

  return (
    <div>
      <h1>Auth componet - {queryParms?.code}</h1>
    </div>
  );
}

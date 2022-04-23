import React from "react";
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div className="error-404">
      <h1>Error 404</h1>
      <p>Sorry, we could not find that page.</p>
      <Link to="/">Return to the home page</Link>
    </div>
  );
}

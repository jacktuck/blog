import React, { useState, useEffect } from "react";

function NotFound() {
  useEffect(() => {
    document.title = "Not Found — jtuck.io"
  }, []);

  return (
    <div>
      <h1>Hmm, page not found 😕.<br/>Sorry about that!</h1>
    </div>
  )
}

export default NotFound;
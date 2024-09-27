"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const RecurrencePreview = ({ startDate, endDate, recurrence }) => {
  return (
    <div className="p-2">
      <h3>Recurrence Preview</h3>
      <p>Start Date: {startDate || "Not selected"}</p>
      <p>End Date: {endDate || "Not selected"}</p>
      <p>Recurrence: {recurrence || "Not selected"}</p>
    </div>
  );
};

export default RecurrencePreview;

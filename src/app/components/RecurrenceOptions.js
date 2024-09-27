"use client";

import React from "react";

const RecurrenceOptions = ({ onRecurrenceChange }) => {
  const handleRecurrenceChange = (e) => {
    onRecurrenceChange(e.target.value);
  };

  return (
    <div className="">
      <label>
        Recurrence:
        <select onChange={handleRecurrenceChange}>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </label>
    </div>
  );
};

export default RecurrenceOptions;

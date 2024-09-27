"use client";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const DateRangePicker = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    onDateChange({ startDate: e.target.value, endDate });
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
    onDateChange({ startDate, endDate: e.target.value });
  };

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-6 p-1">
        <label>
          Start Date:
          <input
            type="date"
            value={startDate || ""}
            onChange={handleStartDateChange}
          />
        </label>
      </div>
      <div className="col-12 col-md-6 p-1">
        <label>
          End Date (Optional):
          <input
            type="date"
            value={endDate || ""}
            onChange={handleEndDateChange}
          />
        </label>
      </div>
    </div>
  );
};

export default DateRangePicker;

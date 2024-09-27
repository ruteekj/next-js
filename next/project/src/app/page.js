"use client";

import React, { useState } from "react";
import DateRangePicker from "./components/DateRangePicker";
import RecurrenceOptions from "./components/RecurrenceOptions";
import RecurrencePreview from "./components/RecurrencePreview";
import "bootstrap/dist/css/bootstrap.min.css";

const RecurrenceComponent = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [recurrence, setRecurrence] = useState(null);

  const handleDateChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const handleRecurrenceChange = (recurrenceValue) => {
    setRecurrence(recurrenceValue);
  };

  return (
    <div className="container text-center">
      <div
        className=" border  m-3 shadow-lg "
        style={{
          background: " rgb(34,193,195)",
          background:
            "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
        }}
      >
        <div className="">
          <h2 className="">Set Recurrence</h2>
          <DateRangePicker onDateChange={handleDateChange} />
          <RecurrenceOptions onRecurrenceChange={handleRecurrenceChange} />
          <RecurrencePreview
            startDate={startDate}
            endDate={endDate}
            recurrence={recurrence}
          />
        </div>
      </div>
    </div>
  );
};

export default RecurrenceComponent;

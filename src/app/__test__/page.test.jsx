import { render, screen, fireEvent } from "@testing-library/react";
import DateRangePicker from "../components/DateRangePicker";

test("reder fistly", () => {
  render(<DateRangePicker />);
});

test("it renders start and end date inputs", () => {
  render(<DateRangePicker onDateChange={() => {}} />);
  const startDateInput = screen.getByLabelText(/start date/i);
  const endDateInput = screen.getByLabelText(/end date/i);
  expect(startDateInput).toBeInTheDocument;
  expect(endDateInput).toBeInTheDocument;
});

test("it handles date change correctly", () => {
  const handleDateChange = jest.fn();
  render(<DateRangePicker onDateChange={handleDateChange} />);

  const startDateInput = screen.getByLabelText(/start date/i);
  fireEvent.change(startDateInput, { target: { value: "2024-09-01" } });

  expect(handleDateChange).toHaveBeenCalledWith({
    startDate: "2024-09-01",
    endDate: null,
  });
});

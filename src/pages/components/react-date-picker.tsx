import React, { ReactElement, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
interface Props {}

export default function ReactDatePicker({}: Props): ReactElement {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="flex justify-center items-center w-full h-50">
      <div className="flex w-36 items-center">
        <DatePicker
          selected={startDate}
          onChange={(date: any) => setStartDate(date)}
        />
      </div>
    </div>
  );
}

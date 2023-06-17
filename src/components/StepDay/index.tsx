import { DateTime } from "luxon";
import React from "react";

interface StepDayProps {
  title: string;
  dayInfo?: {
    title: string;
    time: DateTime;
  }[];
  actualMoment: DateTime;
}

const StepDay: React.FC<StepDayProps> = ({ title, dayInfo, actualMoment }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <ul className="steps steps-vertical">
        {dayInfo?.map((step) => (
          <li
            key={step.time.toString()}
            data-content="★"
            className={`step !text-start ${
              actualMoment >= step.time ? "step-primary" : "step"
            }`}
          >
            {step.time.toLocaleString(DateTime.TIME_24_SIMPLE)} - {step.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StepDay;

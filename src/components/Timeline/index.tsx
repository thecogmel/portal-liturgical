import { friday, saturday, sunday } from "@/utils/days";
import { DateTime } from "luxon";
import React from "react";
import StepDay from "../StepDay";

const Timeline: React.FC = () => {
  const actualMoment = DateTime.now();

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl text-center">
        Cronograma
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-4 px-4 place-content-center">
        <StepDay
          title="Sexta - 23/06"
          dayInfo={friday}
          actualMoment={actualMoment}
        />

        <StepDay
          title="Sábado - 24/06"
          dayInfo={saturday}
          actualMoment={actualMoment}
        />

        <StepDay
          title="Domingo - 25/06"
          dayInfo={sunday}
          actualMoment={actualMoment}
        />
      </div>
    </div>
  );
};

export default Timeline;

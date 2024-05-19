import React, { useState, useEffect } from "react";

import JoyCard from "@/components/joyCard";
import Bar from "../charts/barChart";
import Pie from "../charts/pieChart";

export default function Dashboard() {
  return (
    <>
      <section className="w-full flex flex-wrap justify-around gap-10">
        <JoyCard />

        <JoyCard />

        <JoyCard />

        <JoyCard />
      </section>

      <section className="w-full flex justify-around">
        <div className="my-10 border shadow-md ">
          <Bar />
        </div>

        <div className="my-10 border shadow-md flex items-center">
          <Pie />
        </div>
      </section>
    </>
  );
}

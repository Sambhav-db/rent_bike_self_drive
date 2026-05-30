"use client";

import { CalendarDays, Bike } from "lucide-react";

export default function SearchBox() {
  return (
    <div className="glass-effect card-shadow rounded-3xl p-5 md:p-6 w-full max-w-xl">

      <div className="grid gap-4">

        <div className="border rounded-2xl px-4 py-3 flex items-center gap-3">
          <CalendarDays className="text-orange-500" size={20} />

          <input
            type="date"
            className="w-full outline-none bg-transparent text-sm"
          />
        </div>

        <div className="border rounded-2xl px-4 py-3 flex items-center gap-3">
          <CalendarDays className="text-orange-500" size={20} />

          <input
            type="date"
            className="w-full outline-none bg-transparent text-sm"
          />
        </div>

        <div className="border rounded-2xl px-4 py-3 flex items-center gap-3">
          <Bike className="text-orange-500" size={20} />

          <select className="w-full outline-none bg-transparent text-sm">
            <option>Select Vehicle Type</option>
            <option>Scooty</option>
            <option>Bike</option>
            <option>Premium Bike</option>
            <option>Car</option>
          </select>
        </div>

        <button className="primary-btn w-full">
          Check Availability
        </button>

      </div>
    </div>
  );
}
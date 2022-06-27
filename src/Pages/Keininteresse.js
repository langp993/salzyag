import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRightIcon, PhoneIcon } from "@heroicons/react/outline";

function Keininteresse() {
  const [selected, setSelected] = useState(undefined);

  return (
    <div className="px-4">
      <p>
        Danke für die Information. Damit wir unseren Service verbessern können
        bitten wir Sie um Feedback:
      </p>
      <div className="flex flex-col my-4 space-y-4">
        <label
          className={`px-4 py-3 rounded-lg shadow-lg ${
            selected === 0 ? "bg-primary text-white" : ""
          }`}>
          <input
            type="radio"
            name="feedback"
            value="1"
            className="hidden"
            onChange={() => setSelected(0)}
          />
          Ich verstehe das Angebot nicht
        </label>
        <label
          className={`px-4 py-3 rounded-lg shadow-lg ${
            selected === 1 ? "bg-primary text-white" : ""
          }`}>
          <input
            type="radio"
            name="feedback"
            value="0"
            className="hidden"
            onChange={() => setSelected(1)}
          />
          Ich habe tatsächlich kein Interesse
        </label>
      </div>

      <div class="my-4 w-full">
        <label for="comment" className="text-sm font-bold text-gray-700">
          Kommentar
        </label>
        <textarea
          class="px-4 py-3 text-gray-600 rounded-2xl shadow-md focus:text-gray-700 focus:bg-white focus:outline-none w-full border-none"
          id="comment"
          rows="3"
          type="text"
          placeholder=""
        />
      </div>

      <Link
        to="/step5"
        className="flex justify-between px-4 py-3 mt-4 text-white rounded-lg bg-primary">
        Absenden
        <ChevronRightIcon className="w-6 h-6" />
      </Link>

      <Link to="tel:00436647674725" className="flex items-center my-8">
        <PhoneIcon className="w-8 h-8 mr-2 text-black" />
        <div>
          <strong className="block text-primary"> 0800 / 660 660</strong>
          Bei Fragen rufen Sie uns gerne an
        </div>
      </Link>
    </div>
  );
}

export default Keininteresse;

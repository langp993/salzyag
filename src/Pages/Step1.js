import React from "react";
import { Link } from "react-router-dom";
import { CursorClickIcon, ChevronRightIcon } from "@heroicons/react/outline";

export default function Step1() {
  return (
    <div className="px-4">
      <div className="bg-white max-w-[355px] mx-auto">
      <p className="p-4 font-medium text-center">
        Ihr persönliches Angebot für{" "}
        <span className="text-primary">Pfarrhofgutweg 39</span> Top{" "}
        <span className="text-primary">16</span> in 5400 Hallein
      </p>
      </div>
      <Link
        to="/step2"
        className="max-w-sm mx-auto flex items-center justify-between p-4 bg-white rounded-lg shadow-md mt-04">
        <div className="">
          <h3 className="font-bold">Solar-Top</h3>
          <p className="w-56">Den Strom der Solaranlage des Gebäudes nutzen.</p>
          <p className="flex items-center mt-4 text-sky-500">
            <span>Wie funktioniert das?</span>
            <CursorClickIcon className="ml-2 w-7 h-7" />
          </p>
        </div>
        <ChevronRightIcon className="w-12 h-12" />
      </Link>
    </div>
  );
}

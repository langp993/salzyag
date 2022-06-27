import React from "react";
import { useNavigate } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/solid";
import { PhoneIcon } from "@heroicons/react/outline";

function Erinnerung() {
  let navigate = useNavigate();

  return (
    <div className="">
      <p className="mb-4 font-bold">
        Wir senden Ihnen in einer Wohe eine Erinnerungsemail.
      </p>
      <p className="mb-4">
        Falls Sie fragen haben können Sie uns auch gerne zu Geschäftszeiten hier
        erreichen:
      </p>

      <a href="tel:00436647674725" className="flex my-8 font-bold text-primary">
        <PhoneIcon className="w-6 h-6 mr-2 text-black" />
        0800 / 660 660
      </a>

      <a
        href="https://www.salzburg-ag.at"
        className="flex my-8 font-bold text-primary">
        <HomeIcon className="w-6 h-6 mr-2" />
        Zu salzburg-ag.at
      </a>
    </div>
  );
}

export default Erinnerung;

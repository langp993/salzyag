import React from "react";
import { useNavigate } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/solid";
import { PhoneIcon } from "@heroicons/react/outline";

function Erinnerung() {
  let navigate = useNavigate();

  return (
    <div className="px-4 max-w-md mx-auto">
      <div className="mx-auto bg-white text-center">
      <p className="mb-4 font-bold">
        Wir senden Ihnen in einer Wohe eine Erinnerungsemail.
      </p>
      <p className="mb-4">
        Falls Sie fragen haben können Sie uns auch gerne zu Geschäftszeiten hier
        erreichen:
      </p>
      </div>

      <div class="mx-auto h-26 grid grid-cols-1 md:grid-cols-2 gap-4 content-start bg-white">
      <div className="bg-yellow-500 mx-auto">
      <a href="tel:00436647674725" className="flex my-0 font-bold text-primary">
        <PhoneIcon className="w-6 h-6 mr-2 text-black" />
        0800 / 660 660
      </a>
      </div> 
    <div className="bg-green-500 mx-auto">
      <a
        href="https://www.salzburg-ag.at"
        className="flex my-0 font-bold text-primary">
        <HomeIcon className="w-6 h-6 mr-2" />
        Zu salzburg-ag.at
      </a>
      </div>
     </div>

    </div>
  );
}

export default Erinnerung;

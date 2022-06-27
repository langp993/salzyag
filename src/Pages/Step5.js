import React from "react";
import { HomeIcon } from "@heroicons/react/solid";

export default function Angebotangenommen() {
  return (
    <div className="px-4 mb-6">
      <h3 className="font-bold">Vielen Dank für Ihr Vertrauen</h3>
      <p className="mb-4">
        Wir haben Ihnen die Bestätigung per Email zugesendet. In der Regel
        dauert es 4 Wochen bis Ihr Zugang aktiviert ist.
      </p>

      <a
        href="https://salzburg-ag.at"
        className="flex items-center font-bold text-primary">
        <HomeIcon className="w-6 h-6 mr-2" />
        Zu salzburg-ag.at
      </a>
    </div>
  );
}

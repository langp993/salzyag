import React from "react";
import { DownloadIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

export default function Step2() {
  return (
    <div className="mb-8">
      <div className="px-4">
        <h3 className="font-bold">Solar Top:</h3>
        <p>
          Sie haben eine 100KW Anlage auf dem Dach Ihres Gebäudes, die Strom um-
          Weltfreundlich produziert.
        </p>
        <h2 className="my-4 text-lg font-bold uppercase text-primary">
          Zusammen Stromkosten sparen
          <span className="block text-gray-600">Was ist Solar.Top?</span>
        </h2>

        <iframe
          className="max-w-full"
          width="560"
          height="215"
          src="https://www.youtube.com/embed/vY_WN7hAczA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>

        <p className="my-4">
          <strong class="font-bold text-lg block">
            Für Ihr Gebäude möglich:
          </strong>
          Wir haben bereits mit Ihrer Gebäude Hausverwaltung den Anschluss
          vorbereitet:
        </p>

        <button className="flex w-full px-4 py-3 mx-auto mb-6 bg-white rounded-lg shadow-md">
          <DownloadIcon className="w-6 h-6" />
          Rahmenvertrag ansehen
        </button>

        <p className="my-4">Ihr Beitritt ist selbstverständlich freiwilig.</p>
      </div>
      <Link
        className="flex justify-between px-4 py-3 mx-4 font-bold text-white rounded-lg shadow-md bg-primary"
        to="/step3">
        Unverbindlich mehr erfahren.
        <ChevronRightIcon className="w-6 h-6" />
      </Link>

      <Link to="/keininteresse" className="block p-4 text-center">
        Kein Interesse.
      </Link>
    </div>
  );
}

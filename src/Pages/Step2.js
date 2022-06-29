import React from "react";
import { DownloadIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

export default function Step2() {
  return (
    <div className="mb-8">
      <div className="px-4">
        <div className="bg-yellow-200 max-w-sm">
        <h3 className="font-bold text-center md:text-left">Solar Top:</h3>
        </div>
        <div className="bg-green-200 max-w-sm mx-auto md:ml-0">
        <p className="">
          Sie haben eine 100KW Anlage auf dem Dach Ihres Gebäudes, die Strom um-
          Weltfreundlich produziert.
        </p>
        </div>
        <h2 className="my-4 text-lg font-bold uppercase text-primary">
          Zusammen Stromkosten sparen
          <span className="block text-gray-600">Was ist Solar.Top?</span>
        </h2>

        {/* <iframe
          className="max-w-full"
          width="560"
          height="215"
          width="560"
          height="215"
          src="https://www.youtube.com/embed/vY_WN7hAczA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe> */}
{/* 

        <iframe
          className="max-w-full sm:max-w-xl mx-auto"
          width="560"
          height="215"
          src="https://www.youtube.com/embed/vY_WN7hAczA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
 */}

        <div className="py-4"></div>

        <div className="aspect-w-16 aspect-h-9">
          <iframe src="https://www.youtube.com/embed/vY_WN7hAczA" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>

        <div className="py-4"></div>

        <div className="bg-green-200 max-w-sm my-4 mx-auto md:ml-0">
        <h1 className="font-bold text-lg">Für Ihr Gebäude möglich:</h1>
        <p className="">
          Wir haben bereits mit Ihrer Gebäude Hausverwaltung den Anschluss
          vorbereitet:
        </p>
        </div>

        <button className="flex w-full px-4 py-3 mx-auto md:ml-0 mb-6 bg-white rounded-lg shadow-md max-w-sm">
          <DownloadIcon className="w-6 h-6" />
          Rahmenvertrag ansehen
        </button>

              {/* <div class="h-56 grid grid-cols-3 gap-4 content-start bg-green-500">
        <div className="bg-yellow-200">01</div>
        <div className="bg-yellow-200">02</div>
        <div className="bg-yellow-200">03</div>
        <div>04</div>
        <div>05</div>
      </div> */}

        <p className="my-4 text-center">Ihr Beitritt ist selbstverständlich freiwilig.</p>
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

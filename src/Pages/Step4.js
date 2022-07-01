import React from "react";
import { Link } from "react-router-dom";
import { DownloadIcon, ChevronRightIcon } from "@heroicons/react/outline";

export default function Step4() {
  return (
    <div className="px-[6%] mb-6 bg-pink-100 mx-auto">
      <h3 className="font-bold">Ihr persönliches Angebot:</h3>
      <p className="mb-4">
        Wir haben auf Ihre Email Adresse folgende Dokumente zugesendet.
      </p>

      <div class="p-2 bg-yellow-500 w-[100%] -sm:h-[250px] sm:h-[100px] h-26 grid grid-cols-1 sm:grid-cols-3 gap-4 content-start">

      <button className="flex w-md px-4 py-3 h-[50px] mx-auto mb-6 bg-white rounded-lg shadow-md">
        <DownloadIcon className="w-6 h-6 mr-4 text-black" />
        Rahmenvertrag ansehen
      </button>
      <button className="flex w-md px-4 py-3 mx-auto mb-6 bg-white rounded-lg shadow-md">
        <DownloadIcon className="w-6 h-6 mr-4 text-black" />
        Allgemeine Vertragsunterlagen
      </button>
      <button className="flex w-md px-4 py-3 mx-auto mb-6 bg-white rounded-lg shadow-md">
        <DownloadIcon className="w-6 h-6 mr-4 text-black" />
        Beitrittserklärung
      </button>

      </div>

      {/* <p className="mt-6">
        Wir schätzen Ihre monatliche Strom Ersparnis auf etwa{" "}
        <strong className="font-bold">130,00 Euro.* </strong>
      </p>

      <p className="mt-6 text-sm italic">
        *Dies ist nur ein Richtwert. Diese Schätzung bezieht sich auf
        durchschnittliche Werte der Salzburg AG der letzten 12 Monate. Der
        genaue Bertrag kann erst nach Betrieb Ermittelt werden. <br /> <br />
      </p> */}

      <p className="mt-6 text-black">
        Florian Bauer <br />
        Pfarrhofgutweg 39 Top 16 <br />
        5400 Hallein
      </p>

      <div className="flex items-center py-4 mt-4 text-black border-t border-black ">
        <p className="flex-1">
          <strong className="block font-bold">Einmalige Kosten:</strong>
          Installation, Instandsetzung
        </p>

        <div className="font-bold">€ 0,00</div>
      </div>
      <div className="flex items-center py-4 mb-4 text-black border-t border-b border-black">
        <p className="flex-1">
          <strong className="block font-bold">Energiepreis
          </strong>
          Pro kWh in Cent netto / brutto
        </p>
        <div className="font-bold">¢ 23,0000 / 27,6000</div>
      </div>

      <div className="flex items-center pb-4 mb-4 text-black border-b border-black">
        <p className="flex-1">
          <strong className="block font-bold">Gesamtpreis
          </strong>
          Pro kWh in Cent netto / brutto
        </p>
        <div className="font-bold">¢ 28,0408 / 33,6490</div>
      </div>
    
      <div className="ismaincontainer bg-green-300 h-[400px]">
      <div className="bg-blue-200 h-[200px] flex items-center -sm:justify-center relative">
      <div className="bg-yellow-200 h-[180px] flex -sm:justify-center sm:right-0 max-w-md absolute">
        <div className="bg-pink-500 flex justify-center h-full">
      <label className="flex py-0 px-0">
        <input type="checkbox" className="w-4 h-4 rounded mt-1.5 mr-4" />
      </label>
      </div>
      <div>
      <p>
      Hiermit erkläre ich ausdrücklich, dass die Salzburg <br/>
        AG mit der von mir beauftragte Dienstleitung vor Ablauf <br/>
        der 14 tägigen Rücktrittsfrist gemäß § 11 FAGG beginnen soll. <br/>
        </p>
      </div>
      </div>
      </div>

      <div className="bg-red-500 p-4 sm:p-14 relative flex items-center -sm:justify-center">
      <div className="bg-green-500 p-4 items-center justify-center sm:right-0 sm:absolute">
      <Link
        to="/Step5"
        className="flex justify-between px-4 py-3 mt-0 text-white rounded-lg bg-primary max-w-md">
        Bestellung/Angebot kostenpflichtig abschicken
        <ChevronRightIcon className="w-6 h-6" />
      </Link>
      </div>
      </div>

      <div className="bg-yellow-500 py-4 mt-[100px]">
      <div className="bg-white flex -sm:justify-center items-center py-8 relative">
      <Link
        to="/erinnerung"
        className="px-4 py-3 mt-0 text-center rounded-lg shadow-lg max-w-md bg-green-200 sm:absolute sm:right-0">
        Erinnern Sie mich in einer Woche
      </Link>
      </div>
      </div>

      <div className="bg-purple-500">
      <Link to="/keininteresse" className="block px-4 py-3 mt-4 text-center">
        Kein Interesse
      </Link>
      </div>

      </div>

    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { DownloadIcon, ChevronRightIcon } from "@heroicons/react/outline";

export default function Step4() {
  return (
    <div className="px-[4%] h-[2000px] mb-0 bg-white">
      <h3 className="font-bold">Ihr persönliches Angebot:</h3>
      <p className="mb-4">
        Wir haben auf Ihre Email Adresse folgende Dokumente zugesendet.
      </p>
{/* 
      <div class="p-2 bg-yellow-500 w-[100%] -sm:h-[250px] sm:h-[100px] grid grid-cols-1 sm:grid-cols-3 gap-4 content-start">

      <button className="flex w-md px-4 py-3 h-[50px] mx-auto mb-0 bg-white rounded-lg shadow-md w-[350px]">
        <DownloadIcon className="w-6 h-6 mr-4 text-black" />
        Rahmenvertrag ansehen
      </button>
      <button className="flex w-md px-4 py-3 mx-auto mb-0 bg-white rounded-lg shadow-md w-[350px]">
        <DownloadIcon className="w-6 h-6 mr-4 text-black" />
        Allgemeine Vertragsunterlagen
      </button>
      <button className="flex w-md px-4 py-3 mx-auto mb-0 bg-white rounded-lg shadow-md w-[350px]">
        <DownloadIcon className="w-6 h-6 mr-4 text-black" />
        Beitrittserklärung
      </button>

      </div> */}

      <div class="p-2 bg-white lg:h-[70px] -lg:h-[170px] grid grid-cols-1 lg:grid-cols-3 gap-4 content-start mt-4 flex items-center justify-center">

      <button className="flex w-md px-4 py-3 h-[50px] mx-auto mb-0 bg-white rounded-lg shadow-md w-[310px]">
        <DownloadIcon className="w-6 h-6 mr-4 text-black" />
        Rahmenvertrag ansehen
      </button>
      <button className="flex w-md px-4 py-3 mx-auto mb-0 bg-white rounded-lg shadow-md w-[310px]">
        <DownloadIcon className="w-6 h-6 mr-4 text-black" />
        Allgemeine Vertragsunterlagen
      </button>
      <button className="flex w-md px-4 py-3 mx-auto mb-0 bg-white rounded-lg shadow-md w-[310px]">
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

      <div className="flex items-center pb-4 mb-14 text-black border-b border-black">
        <p className="flex-1">
          <strong className="block font-bold">Gesamtpreis
          </strong>
          Pro kWh in Cent netto / brutto
        </p>
        <div className="font-bold">¢ 28,0408 / 33,6490</div>
      </div>
    
      <div className="ismaincontainer bg-green-300 h-[320px]">
      <div className="bg-white h-[100px] flex items-center justify-center relative mt-4">
      <div className="bg-white h-[100px] flex justify-center lg:right-0 max-w-md lg:absolute">
        <div className="bg-white flex justify-center h-full">
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

      <div className="bg-white p-4 sm:p-14 relative flex items-center justify-center">
      <div className="bg-white p-4 items-center justify-center lg:right-0 lg:absolute">
      <Link
        to="/Step5"
        className="flex justify-between px-4 py-3 mt-0 text-white rounded-lg bg-primary max-w-md">
        Bestellung/Angebot kostenpflichtig abschicken
        <ChevronRightIcon className="w-6 h-6" />
      </Link>
      </div>
      </div>

      <div className="bg-white p-4 mt-[0px]">
      <div className="bg-white flex justify-center items-center py-8 relative">
      <Link
        to="/erinnerung"
        className="px-4 py-3 mt-0 text-center rounded-lg shadow-lg max-w-md bg-white lg:absolute lg:right-0">
        Erinnern Sie mich in einer Woche
      </Link>
      </div>
      </div>
      

      {/* <div className="bg-purple-500 p-4 mb-4 flex items-center -lg:justify-center">
      <div className="bg-green-500 p-4 max-w-md lg:absolute lg:right-0">
      <Link to="/keininteresse" className="p-4 mt-0 text-center">
        Kein Interesse
      </Link>
      </div>
      </div> */}

      {/* <div className="bg-red-500 p-0 lg:p-7 relative flex items-center justify-center">
      <div className="bg-green-500 p-4 items-center justify-center lg:right-5 lg:absolute">
      Kein Interesse
      </div>
      </div> */}

      <div className="bg-white p-0 lg:p-7 relative flex items-center justify-center">
      <div className="bg-white p-4 flex items-center justify-center lg:right-5 lg:absolute min-w-[265px]">
      <Link to="/keininteresse" className="p-0 mt-0 text-center">
        Kein Interesse
      </Link>
      </div>
      </div>

      </div>

    </div>
  );
}

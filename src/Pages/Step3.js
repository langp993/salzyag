import React from "react";
import { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

export default function Step3() {
  const [isCustomer, setIsCustomer] = useState(false);

  return (
    <div className="px-4">
      <p>
        Bitte geben Sie uns Ihre Stammdaten, damit wir Ihnen ein Angebot
        zusenden können.
      </p>

      <div class="my-4 w-full">
        <label for="customer_nr" className="text-sm font-bold text-gray-700">
          Kundennummer (falls Sie bereits Kunde sind){" "}
        </label>
        <input
          class="px-4 py-3 text-gray-600 rounded-2xl shadow-md focus:text-gray-700 focus:bg-white focus:outline-none w-full border-none"
          id="customer_nr"
          rows="3"
          type="text"
          placeholder=""
        />
      </div>

      <label className="flex items-center">
        <input
          type="checkbox"
          class="w-4 h-4 mr-3 rounded"
          checked={isCustomer}
          onChange={() => setIsCustomer((prev) => !prev)}
        />
        Ich bin noch kein Kunde
      </label>

      {isCustomer && (
        <>
          <p className="mt-6 ">
            Bitte um Ihre Kontaktdaten, wir behandeln diese vertraulich.
          </p>

          <form className="my-4" action="/" method="post">
            <div className="flex flex-col mb-4">
              <label
                className="text-sm font-bold text-gray-700"
                for="first_name">
                Vorname
              </label>
              <input
                class="px-4 py-3 text-gray-600 rounded-2xl shadow-md focus:text-gray-700 focus:bg-white focus:outline-none w-full border-none"
                type="text"
                name="first_name"
                id="first_name"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label
                className="text-sm font-bold text-gray-700"
                for="last_name">
                Nachname
              </label>
              <input
                class="px-4 py-3 text-gray-600 rounded-2xl shadow-md focus:text-gray-700 focus:bg-white focus:outline-none w-full border-none"
                type="text"
                name="last_name"
                id="last_name"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label className="text-sm font-bold text-gray-700" for="email">
                Email
              </label>
              <input
                class="px-4 py-3 text-gray-600 rounded-2xl shadow-md focus:text-gray-700 focus:bg-white focus:outline-none w-full border-none"
                type="email"
                name="email"
                id="email"
              />
            </div>

            <div className="flex flex-col mb-6">
              <label className="text-sm font-bold text-gray-700" for="phone">
                Rufnummer
              </label>
              <input
                class="px-4 py-3 text-gray-600 rounded-2xl shadow-md focus:text-gray-700 focus:bg-white focus:outline-none w-full border-none"
                type="phone"
                name="phone"
                id="phone"
              />
            </div>
          </form>
        </>
      )}
      <Link
        className="flex justify-between px-4 py-3 my-6 font-bold text-white rounded-lg shadow-md bg-primary"
        to="/step4">
        Angebote ansehen
        <ChevronRightIcon className="w-6 h-6" />
      </Link>
    </div>
  );
}

import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const [t] = useTranslation("global");

  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="w-full mt-20 text-gray-400">
        <div className="max-w-screen-2yl pb-10 px-14 text-xs flex justify-between flex-wrap md:flex-nowrap">
          <div className="text-center md:text-start w-full md:w-1/2 mb-2">
            <h3>
              <span>Joobadam &copy; 2023. All Rights Reserved.</span>
            </h3>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-end">
            <h3 className="text-xs uppercase">
              {t("Minőség és megbízhatóság egy helyen")}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
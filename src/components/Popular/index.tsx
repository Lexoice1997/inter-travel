import React from "react";
import PopularSwiper from "../PopularSwiper";
import { useTranslations } from "next-intl";
import Title from "../Title/Title";

function Popular() {
  const t = useTranslations("Popular");
  return (
    <section className="sm:mt-24 mt-16">
      <Title title={t("title")} />
      <div className="flex sm:justify-between mt-10 sm:mt-16 mt-10 justify-center h-[530px] sm:h-[550px]">
        <PopularSwiper />
      </div>
    </section>
  );
}

export default Popular;

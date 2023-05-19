"use client";

import { useFormik } from "formik";
import { useTranslations } from "next-intl";
import { Inter } from "next/font/google";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import * as Yup from "yup";
import SelectField from "../Select";

const inter = Inter({ subsets: ["latin"] });

const LOCATIONS = [
  { value: "1", label: "Nukus" },
  { value: "2", label: "Tashkent" },
  { value: "3", label: "New York" },
  { value: "4", label: "Berlin" },
  { value: "5 Design", label: "Chicago" },
];

const token = process.env.TELEGRAM_TOKEN;

interface IForm {
  phone: string;
  people: string;
}

function Order() {
  const [location, setLocation] = useState();
  const [startDate, setStartDate] = useState<any>(new Date());
  const t = useTranslations("Order");
  const formik = useFormik<IForm>({
    initialValues: {
      phone: "",
      people: "",
    },
    validationSchema: Yup.object({
      phone: Yup.string()
        .matches(/^\+\d{3}\d{2}\d{3}\d{2}\d{2}/, "неверный формат (+998911234567)")
        .max(13)
        .required("Required"),
      people: Yup.string().required("Required"),
    }),
    onSubmit: async (values: IForm) => {
      try {
        const payload = `
        Путешествуйте с нами!%0A%0AНомер Телефона: +${
          values.phone
        }%0AЛокация: ${location}%0AЧисло туристов: ${
          values.people
        }%0AДата путешествие: +${startDate.getFullYear()}-${startDate.getMonth()}-${startDate.getDate()}
    %0A
        `;
        const sendReq = await fetch(
          `https://api.telegram.org/bot${token}/sendmessage?chat_id=${`1282417766`}&parse_mode=html&text=${payload}`
        );
        toast.success("Ваша заявка принята.");
      } catch (error) {
        toast.success("Произошла ошибка.");
      } finally {
        formik.resetForm();
      }
    },
  });

  // const handlePhone = (e: ChangeEvent<HTMLInputElement>) => {
  //   setPhone(e.target.value);
  // };

  // const handlePeople = (e: ChangeEvent<HTMLInputElement>) => {
  //   setPeople(e.target.value);
  // };

  const handleLocation = (e: any) => {
    setLocation(e.label);
  };

  // const fetchBot = async () => {
  //   const payload = `
  //       Путешествуйте с нами!%0A%0AНомер Телефона: +${phone}%0AЛокация: ${location}%0AЧисло туристов: ${people}%0AДата путешествие: +${startDate.getFullYear()}-${startDate.getMonth()}-${startDate.getDate()}
  //   %0A
  //       `;
  //   const sendReq = await fetch(
  //     `https://api.telegram.org/bot${token}/sendmessage?chat_id=${`1282417766`}&parse_mode=html&text=${payload}`
  //   );
  // };

  return (
    <section className="sm:mt-24 mt-16">
      <form className={`bg-white p-8 rounded-xl ${inter.className}`} onSubmit={formik.handleSubmit}>
        <div className="flex justify-between sm:flex-row flex-col items-start ">
          <div className="sm:w-1/2 w-full sm:mr-10 mr-0">
            <div className="w-full mb-4 sm:mr-10 mr-0">
              <input
                id="phone"
                name="phone"
                type="text"
                className={`border-gray-400 border rounded-md w-full p-[14px] outline-none sm:mr-10 mr-0 ${
                  formik.touched.phone &&
                  formik.errors.phone &&
                  'border-red-500 "[&>*]:text-red-500'
                }`}
                placeholder="+998972411997"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              <div className={`text-left  mt-2 text-xs font-semibold text-red-500`}>
                {formik.errors.phone}
              </div>
              <p className="text-gray-500 text-lg mt-2">{t("phone")}</p>
            </div>
            <div className="w-full mb-4">
              <SelectField placeHolder="Location" options={LOCATIONS} onChange={handleLocation} />
              <p className="text-gray-500 text-lg mt-2">{t("location")}</p>
            </div>
          </div>
          <div className="sm:w-1/2 w-full">
            <div className="w-full mb-4">
              <input
                id="people"
                name="people"
                type="number"
                className={`border-gray-400 border rounded-md w-full p-[14px] outline-none sm:mr-10 mr-0 ${
                  formik.touched.people &&
                  formik.errors.people &&
                  'border-red-500 "[&>*]:text-red-500'
                }`}
                placeholder="5"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.people}
              />
              <div className={`text-left  mt-2 text-xs font-semibold text-red-500`}>
                {formik.errors.phone}
              </div>
              <p className="text-gray-500 text-lg mt-2">{t("people")}</p>
            </div>
            <div className="w-full mt-2">
              <DatePicker
                selected={startDate}
                onChange={(date: any) => setStartDate(date)}
                className="p-[14px] border rounded-md w-full outline-none border-gray-300 mb-2"
              />
              <p className="text-gray-500 text-lg">{t("date")}</p>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="block mx-auto mt-8 text-semibold sm:text-3xl text-2xl text-white bg-blue-500 sm:px-40 px-16 py-4 rounded-xl hover:bg-blue-700 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150"
        >
          {t("button")}
        </button>
      </form>

      <div className="mt-6">
        <h3 className="text-xl sm:text-3xl">
        {t("popular")}:{" "}
          <span className="text-gray-500">{t("popular-locations")}</span>
        </h3>
      </div>
    </section>
  );
}

export default Order;

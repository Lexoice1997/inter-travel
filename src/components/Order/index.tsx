"use client";

import axios from "axios";
import { useFormik } from "formik";
import { useTranslations } from "next-intl";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import * as Yup from "yup";
import SelectField from "../Select";
import Title from "../Title/Title";

const inter = Inter({ subsets: ["latin"] });

interface IForm {
  first_name: string;
  last_name: string;
  phone: string;
  people: string;
}

interface OrderProps {
  id: number;
  city: string;
  country: string;
}

function Order({ products }: any) {
  const [status, setStatus] = useState<boolean>(false);
  const [location, setLocation] = useState();
  const [startDate, setStartDate] = useState<any>(new Date());
  const t = useTranslations("Order");
  const [locations, setLocations] = useState();

  useEffect(() => {
    const res = products.map((item: any) => {
      return {
        value: item.id,
        label: `${item.city} (${item.country})`,
      };
    });
    setLocations(res);
  }, [products]);

  // useEffect(() => {
  //   if (typeof query.location_id === 'string') {
  //     setLocation(parseInt(query.location_id) as any)
  //   }
  // }, [query])

  const formik = useFormik<IForm>({
    initialValues: {
      first_name: "",
      last_name: "",
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
        Путешествуйте с нами!%0A
        %0AИмя: ${values.first_name}%0AФамилия: ${values.last_name}%0AНомер Телефона: +${
          values.phone
        }%0AЛокация: ${location}%0AЧисло туристов: ${
          values.people
        }%0AДата путешествие: +${startDate.getFullYear()}-${startDate.getMonth()}-${startDate.getDate()}
    %0A
        `;
        // const sendReq = await fetch(
        //   `https://api.telegram.org/bot${token}/sendmessage?chat_id=${`1282417766`}&parse_mode=html&text=${payload}`
        // );
        try {
          setStatus(true);
          const sendOrder = await axios.post(
            `https://sozle.qaraqalpaq.org/inter-travel/transactions`,
            {
              first_name: values.first_name,
              last_name: values.last_name,
              phone: values.phone,
              product_id: location,
              date: startDate,
              people: values.people,
            }
          );
          window.location.replace(
            `https://my.click.uz/services/pay?service_id=28015&merchant_id=20412&amount=${sendOrder.data.amount}&transaction_param=${sendOrder.data.transaction_id}`
          );
        } catch {
          toast.success("Произошла ошибка отправки данных.");
          setStatus(false);
        }

        toast.success("Ваша заявка принята.");
      } catch (error) {
        toast.success("Произошла ошибка.");
        setStatus(false);
      } finally {
        formik.resetForm();
        setStatus(false);
      }
    },
  });

  const handleLocation = (e: any) => {
    console.log(e);
    setLocation(e.value);
  };

  return (
    <section className="sm:mt-24 mt-16">
      <form className={`bg-white p-8 rounded-xl ${inter.className}`} onSubmit={formik.handleSubmit}>
        <Title title={t("title")} />
        <div className="flex justify-between sm:flex-row flex-col items-start mt-10">
          <div className="sm:w-1/2 w-full sm:mr-10 mr-0">
            <div className="w-full mb-4 sm:mr-10 mr-0">
              <input
                id="first_name"
                name="first_name"
                type="text"
                className={`border-gray-400 border rounded-md w-full p-[14px] outline-none sm:mr-10 mr-0 ${
                  formik.touched.first_name &&
                  formik.errors.first_name &&
                  'border-red-500 "[&>*]:text-red-500'
                }`}
                placeholder="Azamat"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.first_name}
              />
              <div className={`text-left  mt-2 text-xs font-semibold text-red-500`}>
                {formik.errors.first_name}
              </div>
              <p className="text-gray-500 text-lg mt-2">{t("first_name")}</p>
            </div>
            <div className="w-full mb-4 sm:mr-10 mr-0">
              <input
                id="last_name"
                name="last_name"
                type="text"
                className={`border-gray-400 border rounded-md w-full p-[14px] outline-none sm:mr-10 mr-0 ${
                  formik.touched.last_name &&
                  formik.errors.last_name &&
                  'border-red-500 "[&>*]:text-red-500'
                }`}
                placeholder="Berdimuratov"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.last_name}
              />
              <div className={`text-left mt-2 text-xs font-semibold text-red-500`}>
                {formik.errors.last_name}
              </div>
              <p className="text-gray-500 text-lg mt-2">{t("last_name")}</p>
            </div>
          </div>
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
                placeholder="+998911234567"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              <div className={`text-left mt-2 text-xs font-semibold text-red-500`}>
                {formik.errors.phone}
              </div>
              <p className="text-gray-500 text-lg mt-2">{t("phone")}</p>
            </div>
            <div className="w-full mb-4">
              <SelectField placeHolder="Location" options={locations} onChange={handleLocation} />
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
          disabled={status}
          type="submit"
          className="block mx-auto mt-8 text-semibold sm:text-3xl text-2xl text-white bg-greenColor sm:px-40 px-16 py-4 rounded-xl hover:bg-hoverGreen hover:cursor-pointer hover:transition-all transition ease-in-out delay-150"
        >
          {t("button")}
        </button>
      </form>

      <div className="mt-6">
        <h3 className="text-xl sm:text-3xl">
          {t("popular")}: <span className="text-gray-500">{t("popular-locations")}</span>
        </h3>
      </div>
    </section>
  );
}

export default Order;

import About from "@/components/About";
import Beat from "@/components/Beat";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Order from "@/components/Order";
import Popular from "@/components/Popular";
import Recently from "@/components/Recently";
import Service from "@/components/Service";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { Inter, Kalam } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "swiper/css";
import "swiper/css/pagination";

const inter = Inter({ subsets: ["latin"] });
const kalam = Kalam({ weight: "400", subsets: ["latin", "devanagari"] });

export const metadata = {
  title: "Inter Travel",
  description: "You can give us a tour to Remember forever!",
};

export default function Index() {
  return (
    <main className={`bg-gray-100 ${inter.className}`}>
      <div id="taost-wrapper">
        <Toaster position="top-center" />
      </div>
      <div className={`main-bg h-[100vh] ${kalam.className}`}>
        <div className="m-auto px-4 xl:max-w-[1440px] lg:max-w-[1280px]">
          <Header />
          <Main />
        </div>
      </div>

      <div className="m-auto px-4 xl:max-w-[1440px] lg:max-w-[1280px]">
        <Order />
        <Popular />
        <About />
        <Recently />
        <Service />
        {/* <Beat /> */}
        <Footer />
      </div>
    </main>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
}

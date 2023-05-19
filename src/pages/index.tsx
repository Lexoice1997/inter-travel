import About from '@/components/About'
import Beat from '@/components/Beat'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Main from '@/components/Main'
import Order from '@/components/Order'
import Popular from '@/components/Popular'
import Recently from '@/components/Recently'
import Service from '@/components/Service'
import { GetServerSideProps, GetStaticPropsContext } from 'next'
import { useTranslations } from 'next-intl'
import { Lobster, Open_Sans, Manrope } from 'next/font/google'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'
import 'swiper/css'
import 'swiper/css/pagination'

export const manrope = Manrope({ subsets: ['latin', 'cyrillic'] })
export const lobster = Lobster({
  weight: '400',
  subsets: ['latin', 'cyrillic'],
})

export const metadata = {
  title: 'Inter Travel',
  description: 'You can give us a tour to Remember forever!',
}

export default function Index({ locations }: any) {
  return (
    <main className={`bg-gray-100 ${manrope.className}`}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <div id="taost-wrapper">
        <Toaster position="top-center" />
      </div>
      <div className={`main-bg h-[100vh] ${lobster.className}`}>
        <div className="m-auto px-4 xl:max-w-[1440px] lg:max-w-[1280px]">
          <Header />
          <Main />
        </div>
      </div>

      <div className="m-auto px-4 xl:max-w-[1440px] lg:max-w-[1280px]">
        <Order products={locations.products} />
        <Popular />
        <About />
        <Recently />
        <Service />
        {/* <Beat /> */}
        <Footer />
      </div>
    </main>
  )
}

// export async function getServerSideProps() {
//   const res = await fetch("https://sozle.qaraqalpaq.org/inter-travel/products");
//   const locations = await res.json();

//   return { props: { locations } };
// }

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const res = await fetch('https://sozle.qaraqalpaq.org/inter-travel/products')
  const locations = await res.json()

  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
      locations,
    },
  }
}

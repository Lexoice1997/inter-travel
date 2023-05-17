import { NextIntlProvider } from "next-intl";
import { AppProps } from "next/app";
import "../styles/globals.css";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}

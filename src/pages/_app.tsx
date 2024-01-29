// import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Outfit } from "next/font/google";
import { useRouter } from 'next/router';
// import { SessionProvider } from 'next-auth/react';
import theme from "@/styles/theme";
import GlobalStyle from "@/styles/globals";
import { ThemeProvider } from "styled-components";
import Providers from '@/store/provider';

const outfit = Outfit({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      {/* <SessionProvider> */}
      <Providers>
        <Component {...pageProps} />
        </Providers>
      {/* </SessionProvider> */}
      <GlobalStyle />
    </ThemeProvider>
  );
}

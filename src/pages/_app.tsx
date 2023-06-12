import type { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";

import Header from "@/components/layout/header";
import Main from "@/components/layout/main";

import theme from "@/styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Main>
          <Component {...pageProps} />
        </Main>
      </ThemeProvider>
    </>
  );
}

export default MyApp;

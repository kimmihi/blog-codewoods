"use client";
import { ThemeProvider } from "styled-components";

import theme from "@/styles/theme";
import Header from "@/components/layout/header";
import Main from "@/components/layout/main";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body style={{ margin: 0 }}>
        <ThemeProvider theme={theme}>
          <Header />
          <Main>{children}</Main>
        </ThemeProvider>
      </body>
    </html>
  );
}

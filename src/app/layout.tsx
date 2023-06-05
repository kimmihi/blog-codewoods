"use client";
import ClientThemeProvider from "@/components/layout/client-theme-provider";
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
        <ClientThemeProvider>
          <Header />
          <Main>{children}</Main>
        </ClientThemeProvider>
      </body>
    </html>
  );
}

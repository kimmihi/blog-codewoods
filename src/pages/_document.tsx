import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body
        style={{
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

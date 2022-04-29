import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import { useAuthEffect } from "../hooks/auth"

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;

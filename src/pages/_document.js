import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" data-theme="winter">
      <Head />
      <body className="flex flex-col min-h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

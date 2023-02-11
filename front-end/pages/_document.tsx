import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

export default class MyDocument extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
          <link rel="icon" type="image/jpeg" href="/images/erenAvatar1.jpeg" />        
          <body>
            <ColorModeScript />
            <Main />
            <NextScript />
          </body>
      </Html>
    )
  }
}
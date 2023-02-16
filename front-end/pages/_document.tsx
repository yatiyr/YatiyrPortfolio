import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

export default class MyDocument extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
          <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
          <link rel="icon" type="image/jpeg" href="/images/erenAvatar.jpg" />        
          <body>
            <ColorModeScript />
            <Main />
            <NextScript />
          </body>
      </Html>
    )
  }
}
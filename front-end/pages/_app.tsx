import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import customTheme from 'styles/customTheme';
import GlobalStyle from 'styles/global';
import 'styles/globalSass.scss';
import { MDXProvider } from '@mdx-js/react';

import MDXComponents from 'components/mdx';

function MyApp({ Component, pageProps } : any) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <ColorModeProvider options={{initialColorMode: "dark", useSystemColorMode: true}}>
        <MDXProvider components={MDXComponents}>
          <GlobalStyle>
            <Component {...pageProps}/>
          </GlobalStyle>
        </MDXProvider>
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default MyApp
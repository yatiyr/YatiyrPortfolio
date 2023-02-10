import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// Importing Chakra Provider
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

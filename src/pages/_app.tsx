import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Box, ChakraProvider, Container } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider>
        <Box bg="gray.100" minH="100vh">
          <Container maxW={"container.xl"}>
            <Component {...pageProps} />
          </Container>
        </Box>
      </ChakraProvider>
    </>
  );
}

export default MyApp;

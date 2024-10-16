"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ClerkProvider } from "@clerk/nextjs";
import { dark, neobrutalism, shadesOfPurple } from "@clerk/themes";
const customTheme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={customTheme}>
      <ClerkProvider
        appearance={{
          baseTheme: neobrutalism,
          variables: { colorPrimary: "#008080", borderRadius: "1rem" },
        }}
      >
        {children}
      </ClerkProvider>
    </ChakraProvider>
  );
}

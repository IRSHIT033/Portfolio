import { extendTheme } from "@chakra-ui/react";

export const Customtheme = extendTheme({
  colors: {
    brand: {
      100: "#fbae3c",
    },
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "#001220",
        color: "#fbae3c",
      },
    },
  },
});

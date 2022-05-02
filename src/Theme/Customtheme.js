import { extendTheme } from "@chakra-ui/react";

export const Customtheme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "#001220",
        color: "#fbae3c",
      },
    },
  },
  colors: {
    brand: {
      100: "#fbae3c",
      200: "#001220",
    },
  },
});

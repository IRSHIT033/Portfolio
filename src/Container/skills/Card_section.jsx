import { Grid, Box, GridItem } from "@chakra-ui/react";
import React from "react";

export const Card_section = () => {
  return (
    <Grid>
      <GridItem>
        <Box
          height="500px"
          width="300px"
          bg="brand.100"
          overflow="hidden"
        ></Box>
      </GridItem>
    </Grid>
  );
};

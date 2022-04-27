import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { Box, Stack } from "@chakra-ui/react";
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <motion.ul variants={variants}>
    <Box
      fontWeight="bold"
      w="100%"
      d="flex"
      ml="6%"
      flexDirection="column"
      fontSize="1.2rem"
      justifyContent="center"
    >
      {itemIds.map((i) => (
        <MenuItem i={i} key={i} />
      ))}
    </Box>
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];

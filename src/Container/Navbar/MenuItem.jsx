import { motion } from "framer-motion";
import { Menu } from "./Allmenu.js";
import { Box } from "@chakra-ui/react";
const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ i, path }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <a href={"#" + Menu[i]}>
        <Box>{Menu[i]}</Box>
      </a>
    </motion.li>
  );
};

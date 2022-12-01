import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/cryp.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"#3B185F"} w={"full"} h={"85vh"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"74vh"}
          objectFit={"contain"}
          src={btcSrc}
          
          //filter={"grayscale(1)"}
        />
      </motion.div>

      <Text
        fontSize={"5xl"}
        textAlign={"center"}
        fontWeight={"medium"}
        color={"whiteAlpha.900"}
        mt={"-10"}
      >
        Wise-coin
      </Text>
    </Box>
  );
};

export default Home;

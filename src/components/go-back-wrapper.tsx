import { Box, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";

export default function GoBackWrapper({ children, title }: any) {
  return (
    <>
      <Box p="10">
        <Box _hover={{ color: "blue.300" }}>
          <Flex dir="row" align="center">
            <Box mr="2">
              <IoArrowBackOutline />
            </Box>
            <Link href="/">Go home</Link>
          </Flex>
        </Box>
        <Heading fontWeight="black" mb="5">
          {title}
        </Heading>
        {children}
      </Box>
    </>
  );
}

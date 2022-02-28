import { Box, Button, Text } from "@chakra-ui/react";
import Link from "next/link";

export function LinkCard(props) {
  return (
    <>
      <Link href={props.categorie.link} passHref>
        <Box
          as="button"
          textAlign="left"
          cursor="pointer"
          p="4"
          bg="white"
          rounded="lg"
          _hover={{
            shadow: "lg",
            color: "blue.300",
            borderColor: "blue.300",
            transition: "all 0.2s",
            transform: "translate(0px, -5px)",
          }}
          transition="all 0.3s"
          border="1px solid"
          borderColor="gray.300"
        >
          <Text fontSize="2xl" height={60}>
            {props.categorie.name}
          </Text>
        </Box>
      </Link>
    </>
  );
}

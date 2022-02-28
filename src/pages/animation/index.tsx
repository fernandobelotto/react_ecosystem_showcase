import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import GoBackWrapper from "../../components/go-back-wrapper";

import { animations } from "../../lists/animations";

export function LinkLib(props: any) {
  return (
    <a href={props.component.link} target="_blank" rel="noreferrer">
      <Box
        p="4"
        bg="white"
        rounded="lg"
        height={"full"}
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
        <Text fontSize="2xl" fontWeight={"bold"} mb="3">
          {props.component.title}
        </Text>
        <Text fontSize="lg">{props.component.description}</Text>
      </Box>
    </a>
  );
}

export default function Index() {
  return (
    <>
      <GoBackWrapper title="Animations">
        <SimpleGrid columns={3} minChildWidth={200} spacing={5}>
          {animations.map((component) => {
            return (
              <>
                <LinkLib component={component}></LinkLib>
              </>
            );
          })}
        </SimpleGrid>
      </GoBackWrapper>
    </>
  );
}

import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { categories } from "../lists/categories";
import { LinkCard } from "../components/LinkCard";

export default function Index() {
  return (
    <>
      <Box p="10">
        <Heading fontWeight="black">React Ecosystem Showcase</Heading>
        <Text fontSize="2xl" mb="5">
          A site for testing and demonstranting all things around the react
          showcase
        </Text>

        <SimpleGrid columns={3} minChildWidth={200} spacing={5}>
          {categories.map((categorie) => {
            return (
              <>
                <LinkCard categorie={categorie}></LinkCard>
              </>
            );
          })}
        </SimpleGrid>
      </Box>
    </>
  );
}

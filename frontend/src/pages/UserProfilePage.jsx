import { VStack, Flex, Center, Image } from "@chakra-ui/react";
import React from "react";

export default function UserProfilePage() {
  return (
    <VStack>
      <Flex
        justify="space-between"
        w="100%"
        maxW="950px"
        border="2px solid black"
        h="150px"
      >
        <Center w="50%">
          <Image
            src="https://picsum.photos/200/200"
            borderRadius="50%"
            w="100%"
          />
        </Center>
        <VStack></VStack>
      </Flex>
    </VStack>
  );
}

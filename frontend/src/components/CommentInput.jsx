import React from "react";
import {
  Icon,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { VscSmiley } from "react-icons/vsc";
const CommentInput = () => {
  return (
    <Flex w="100%" h="53px" justify="center" align="center" padding="10px 2%">
      <InputGroup>
        <InputLeftElement>
          <Icon as={VscSmiley} />
        </InputLeftElement>
        <Input placeholder="Add a comment" />
        <InputRightElement padding="23px 4%">
          <Button
            colorScheme="white"
            color="active"
            variant="tranparent"
            style={{ padding: "10px" }}
          >
            Post
          </Button>
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};
export default CommentInput;

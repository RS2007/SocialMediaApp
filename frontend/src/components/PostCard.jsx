import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import CommentInput from "./CommentInput";
import UserDetails from "./UserDetails";
const PostCard = () => {
  return (
    <Flex
      direction="column"
      w="100%"
      maxW="630px"
      justify-content="center"
      align="center"
      border="1px solid #dbdbdb"
    >
      <UserDetails />
      <Image src="https://picsum.photos/200/300" w="100%" />
      <CommentInput />
    </Flex>
  );
};

export default PostCard;

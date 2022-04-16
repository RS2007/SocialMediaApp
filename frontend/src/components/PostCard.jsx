import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import CommentInput from "./CommentInput";
import UserDetails from "./UserDetails";
/* eslint-disable react/prop-types*/
const PostCard = ({ picURL, username }) => {
  return (
    <Flex
      direction="column"
      w="100%"
      maxW="630px"
      justify-content="center"
      align="center"
      border="1px solid #dbdbdb"
      marginBottom="20px"
    >
      <UserDetails username={username} />
      <Image src={picURL} w="100%" />
      <CommentInput />
    </Flex>
  );
};

export default PostCard;

import React, { useEffect, useState } from "react";
import { Flex, Image } from "@chakra-ui/react";
import CommentInput from "./CommentInput";
import UserDetails from "./UserDetails";
import PostActions from "../PostActions";
import moment from "moment";

/* eslint-disable react/prop-types*/
const PostCard = ({
  picURL,
  desc,
  username,
  likeCount,
  commentCount,
  createdTime,
  id,
  isPostLiked,
}) => {
  const [likeCountState, setLikeCountState] = useState(0);
  useEffect(() => {
    setLikeCountState(likeCount);
  }, []);
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
      <PostActions
        id={id}
        isPostLiked={isPostLiked}
        setLikeCountState={setLikeCountState}
      />
      <Flex justify="left" w="95%" marginBottom="5px">
        Liked by &nbsp;<strong>{likeCountState} </strong>&nbsp;people
      </Flex>
      <Flex justify="left" flexDirection="horizontal" w="95%" fontSize="16px">
        <span>
          <strong>{username}</strong>&nbsp;&nbsp;{desc}
        </span>
      </Flex>
      <Flex
        justify="left"
        w="95%"
        fontWeight="400"
        fontSize="16px"
        color="rgb(142, 142, 142)"
        margin="5px 0px"
      >
        View all {commentCount} comments
      </Flex>
      <Flex
        justify="left"
        w="95%"
        fontWeight="400"
        fontSize="16px"
        color="rgb(142, 142, 142)"
        margin="5px 0px"
      >
        {Math.floor(
          Math.abs(Number(new Date()) - moment(createdTime)._d.getTime()) / 36e5
        )}{" "}
        Hours
      </Flex>
      <CommentInput />
    </Flex>
  );
};

export default PostCard;

import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Grid,
  GridItem,
  Image,
  Flex,
  VStack,
  Divider,
  Spinner,
} from "@chakra-ui/react";
import CommentInput from "./CommentInput";
import UserDetails from "./UserDetails";
import { getDifferenceInHoursFromPresent } from "../utils/dateUtils";

/* eslint-disable react/prop-types*/
export default function ExpandedPostCard({
  isOpen,
  onClose,
  picURL,
  username,
  desc,
  postId,
  createdTime,
  commentArray,
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent minW="50vw" minH="80vh">
        <ModalBody padding="0">
          <Grid gridTemplateColumns="1.5fr 1fr">
            <GridItem border="2px solid black">
              <Image src={picURL} h="80vh" />
            </GridItem>
            <GridItem>
              <VStack>
                <UserDetails username={username} />
                <Divider />
                <Flex
                  justify="left"
                  flexDirection="horizontal"
                  w="95%"
                  fontSize="16px"
                  marginTop="20px"
                >
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
                  {getDifferenceInHoursFromPresent(createdTime)} Hours
                </Flex>
                <Divider />
                <Flex justify="left" w="95%" direction="column">
                  {commentArray.map((elem) => (
                    <span key={elem}>
                      <strong>{elem.user.username}</strong>&nbsp;&nbsp;
                      {elem.content}
                    </span>
                  ))}
                </Flex>
                )
                <CommentInput postId={postId} />
              </VStack>
            </GridItem>
          </Grid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

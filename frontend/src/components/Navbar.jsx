import React from "react";
import { Flex, Heading, Icon, HStack } from "@chakra-ui/react";
import "../pages/login.css";
import SearchBar from "./SearchBar";
import { FaHome } from "react-icons/fa";
import { BiMessageRoundedDetail } from "react-icons/bi";
import {
  AiOutlineCompass,
  AiOutlineHeart,
  AiOutlinePlusSquare,
} from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";

const Navbar = () => {
  return (
    <Flex justify="center" w="100%" h="60px" borderBottom="1px solid #efefef">
      <Flex w="100%" maxW="950px" h="60px" justify="space-between">
        <Flex w="20%" h="60px" colSpan={6} align="center" justify="center">
          <Heading
            style={{
              fontFamily: "'Pacifico'",
              height: "45px",
              fontSize: "25px",
            }}
          >
            Instaclone
          </Heading>
        </Flex>
        <Flex w="25%" h="60px" align="center" justify="100%" colSpan={8}>
          <SearchBar />
        </Flex>

        <HStack w="35%">
          <Flex w="10%" justify="center" align="center">
            <Icon as={FaHome} h="100%" w="80%" />
          </Flex>
          <Flex w="10%" justify="center" align="center">
            <Icon as={BiMessageRoundedDetail} h="100%" w="80%" />
          </Flex>
          <Flex w="10%" justify="center" align="center">
            <Icon as={AiOutlinePlusSquare} h="100%" w="80%" />
          </Flex>
          <Flex w="10%" justify="center" align="center">
            <Icon as={AiOutlineCompass} h="100%" w="80%" />
          </Flex>
          <Flex w="10%" justify="center" align="center">
            <Icon as={AiOutlineHeart} h="100%" w="80%" />
          </Flex>
          <Flex w="10%" align="center" justify="center">
            <Icon as={HiOutlineUserCircle} h="100%" w="80%" />
          </Flex>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Navbar;

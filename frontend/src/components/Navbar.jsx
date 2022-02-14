import React from "react";
import {Flex, Heading, Icon, HStack, useMediaQuery} from "@chakra-ui/react";
import "../pages/login.css";
import SearchBar from "./SearchBar";
import {FaHome} from "react-icons/fa";
import {BiMessageRoundedDetail} from "react-icons/bi";
import {
  AiOutlineCompass,
  AiOutlineHeart,
  AiOutlinePlusSquare,
} from "react-icons/ai";
import {HiOutlineUserCircle} from "react-icons/hi";

const Navbar = () => {
  const [searchBarDisplay] = useMediaQuery("(min-width:741px)");
  return (
    <Flex justify="center" w="100%" h="60px" borderBottom="1px solid #efefef">
      <Flex w="100%" maxW="950px" h="60px" justify="space-between">
        <Flex w={{base: "50%", md: "20%"}} h="60px" justify="center" padding="0">
          <Heading
            as="h3"
            style={{
              fontFamily: "'Pacifico'",
              height: "45px",
              fontSize: "25px",
              margin: "0",
              position: "absolute",
              bottom: "0",
            }}
          >
            Instaclone
          </Heading>
        </Flex>
        {searchBarDisplay && (<Flex w="25%" h="60px" align="center" justify="100%" colSpan={8}>
          <SearchBar />
        </Flex>)}

        <HStack w={searchBarDisplay ? "35%" : "60%"}>
          <Flex w="20%" maxW="40px" justify="center" align="center">
            <Icon as={FaHome} h="100%" w="80%" />
          </Flex>
          <Flex w="20%" maxW="40px" justify="center" align="center">
            <Icon as={BiMessageRoundedDetail} h="100%" w="80%" />
          </Flex>
          <Flex w="20%" maxW="40px" justify="center" align="center">
            <Icon as={AiOutlinePlusSquare} h="100%" w="80%" />
          </Flex>
          <Flex w="20%" maxW="40px" justify="center" align="center">
            <Icon as={AiOutlineCompass} h="100%" w="80%" />
          </Flex>
          <Flex w="20%" maxW="40px" justify="center" align="center">
            <Icon as={AiOutlineHeart} h="100%" w="80%" />
          </Flex>
          <Flex w="20%" maxW="40px" align="center" justify="center">
            <Icon as={HiOutlineUserCircle} h="100%" w="80%" />
          </Flex>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Navbar;

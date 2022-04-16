import { React, useState } from "react";
import {
  Input,
  Icon,
  InputGroup,
  InputLeftElement,
  VStack,
  Image,
  Flex,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import _axios from "../utils/_axios";
const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchedUserArray, setSearchedUserArray] = useState(null);

  const getUsers = async () => {
    try {
      const res = await _axios.get(`/user/search?q=${searchInput}`);
      setSearchedUserArray(res.data);
      console.log(searchedUserArray);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <VStack>
      <InputGroup>
        <InputLeftElement>
          <Icon as={FaSearch} color="gray.300" />
        </InputLeftElement>
        <Input
          w="100%"
          placeholder="Search"
          bg="#efefef"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
            getUsers();
          }}
          onBlur={() => {
            setSearchedUserArray([]);
          }}
        />
      </InputGroup>
      <VStack
        bg="white"
        h="auto"
        w="100%"
        boxShadow="rgba(0, 0, 0, 0.098) 0px 0px 5px 1px"
        zIndex={5}
      >
        {searchedUserArray?.map((elem) => (
          <Flex
            key={elem}
            h="fit-content"
            flexDirection="row"
            justify="left"
            w="100%"
          >
            <VStack w="30%">
              <Image
                src="/profile-image.jpg"
                h="60px"
                w="auto"
                borderRadius="50%"
                padding="5px"
              />
            </VStack>
            <VStack justify="center" h="60px" w="70%">
              <p key={elem} style={{ fontWeight: "600", fontSize: "14px" }}>
                {elem.username}
              </p>
              <p key={elem} style={{ color: "rgba(142,142,142,1)" }}>
                {elem.fullName}
              </p>
            </VStack>
          </Flex>
        ))}
      </VStack>
    </VStack>
  );
};

export default SearchBar;

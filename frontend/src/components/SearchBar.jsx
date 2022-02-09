import { React } from "react";
import { Input, Icon, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
const SearchBar = () => {
  return (
    <InputGroup>
      <InputLeftElement>
        <Icon as={FaSearch} color="gray.300" />
      </InputLeftElement>
      <Input w="100%" placeholder="Search" bg="#efefef" />
    </InputGroup>
  );
};

export default SearchBar;

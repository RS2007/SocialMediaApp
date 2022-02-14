import {React, useState} from "react";
import {Input, Icon, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {FaSearch} from "react-icons/fa";
const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("")
  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value)
  }
  return (
    <InputGroup>
      <InputLeftElement>
        <Icon as={FaSearch} color="gray.300" />
      </InputLeftElement>
      <Input w="100%" placeholder="Search" bg="#efefef" value={searchInput} onClick={handleSearchInputChange} />
    </InputGroup>
  );
};

export default SearchBar;

import React from "react";
import { Textarea } from "@chakra-ui/react";

/* eslint-disable react/prop-types*/
const SetDescription = ({ description, setDescription }) => {
  return (
    <Textarea
      value={description}
      onChange={(e) => {
        setDescription(e.target.value);
      }}
    />
  );
};

export default SetDescription;

import React from "react";
import { Grid, GridItem, Spinner } from "@chakra-ui/react";
import useSWR from "swr";
import PostCard from "./PostCard";
import CurrentUserCard from "./CurrentUserCard";
import { fetcher } from "../utils/_axios";

export default function PostList() {
  const { data, isValidating: isFetching, error } = useSWR("/post", fetcher);

  if (error) {
    return <div>{error.message}</div>;
  }
  if (isFetching) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }
  return (
    <Grid
      templateColumns="2fr 1fr"
      w="100%"
      maxW="909px"
      marginTop="40px"
      gridGap="1vw"
      display={{ base: "block", md: "grid" }}
      placeContent="center"
    >
      <GridItem w={{ base: "100%", lg: "" }} h="fit-content">
        {!isFetching &&
          data.map((elem) => (
            <PostCard
              picURL={elem.pic}
              key={elem}
              username={elem.user.username}
            />
          ))}
      </GridItem>
      <GridItem>
        <CurrentUserCard />
      </GridItem>
    </Grid>
  );
}

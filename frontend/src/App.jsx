import "./App.css";
import React from "react";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import PostCard from "./components/PostCard";
import CurrentUserCard from "./components/CurrentUserCard";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <Flex direction="column" justify="center" align="center" w="100%">
              <Navbar />
              <Grid
                templateColumns="2fr 1fr"
                w="100%"
                maxW="909px"
                marginTop="40px"
                gridGap="1vw"
                display={{ base: "block", md: "grid" }}
                placeContent="center"
              >
                <GridItem w={{ base: "100%", lg: "" }}>
                  <PostCard />
                </GridItem>
                <GridItem>
                  <CurrentUserCard />
                </GridItem>
              </Grid>
            </Flex>
          }
        />
        <Route path="/abcd" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;

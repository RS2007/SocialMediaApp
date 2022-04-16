import "./App.css";
import React from "react";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import PostList from "./components/PostList";

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
              <PostList />
            </Flex>
          }
        />
        <Route path="/abcd" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;

import { Button, FormControl, Input, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FaFacebook } from "react-icons/fa";

export default function Register() {
  return (
    <VStack as="form" w="85%">
      <Text color="#8e8e8e" fontSize="17px">
        Sign up to see photos and videos from your friends.
      </Text>
      <Button
        colorScheme="facebook"
        variant="primary"
        leftIcon={<FaFacebook />}
      >
        Log in with Facebook
      </Button>
      <Text>OR</Text>
      <FormControl isRequired>
        <Input
          id="email"
          type="email"
          placeholder="Email"
          bg="background"
          color="loginFontColor"
          fontSize="16px"
          fontFamily="-apple-system,system-ui"
          lineHeight="18px"
          w="100%"
          marginBottom="10px"
        />
        {/* {errors.email && <FormErrorMessage>Invalid Email</FormErrorMessage>} */}
      </FormControl>
      <FormControl isRequired>
        <Input
          id="fullName"
          type="text"
          placeholder="Full Name"
          bg="background"
          color="loginFontColor"
          fontSize="16px"
          fontFamily="-apple-system,system-ui"
          lineHeight="18px"
          w="100%"
          marginBottom="10px"
        />
        {/* {errors.email && <FormErrorMessage>Invalid Email</FormErrorMessage>} */}
      </FormControl>
      <FormControl isRequired>
        <Input
          id="username"
          type="text"
          placeholder="Username"
          bg="background"
          color="loginFontColor"
          fontSize="16px"
          fontFamily="-apple-system,system-ui"
          lineHeight="18px"
          w="100%"
          marginBottom="10px"
        />
        {/* {errors.email && <FormErrorMessage>Invalid Email</FormErrorMessage>} */}
      </FormControl>
      <FormControl isRequired>
        <Input
          id="password"
          type="password"
          placeholder="Password"
          bg="background"
          color="loginFontColor"
          fontSize="16px"
          fontFamily="-apple-system,system-ui"
          lineHeight="18px"
          w="100%"
          marginBottom="10px"
        />
        {/* {errors.email && <FormErrorMessage>Invalid Email</FormErrorMessage>} */}
      </FormControl>
      <Button type="submit" w="100%" variant="primary">
        Sign up
      </Button>
      <Text
        color="#8e8e8e"
        fontSize="14px"
        paddingTop="20px"
        paddingBottom="20px"
      >
        By signing up, you agree to our <strong>Terms</strong> ,{" "}
        <strong>Data Policy</strong> and <strong>Cookies Policy</strong> .
      </Text>
    </VStack>
  );
}

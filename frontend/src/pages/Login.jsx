import { React } from "react";
import {
  Heading,
  Image,
  Flex,
  Button,
  Box,
  VStack,
  FormControl,
  Input,
  Text,
  HStack,
  Icon,
  Link,
  FormErrorMessage,
} from "@chakra-ui/react";
import { FaFacebookSquare } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";
import phones from "/phones.png";
import "./login.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const postData = async (data) => {
    console.log(data);
    try {
      await axios.post("http://localhost:5000/user/login", data, {
        withCredentials: true,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Flex h="100vh" w="100%" align="center" justify="center" bg="background">
      <Flex w="90%" align="center" justify="center" h="90%">
        <Box display={{ xxs: "none", md: "block" }}>
          <Image src={phones} alt="The insta login image" />
        </Box>
        <VStack gap="10px" h="55%">
          <VStack
            bg="white"
            border="1px solid #efefef"
            h="85%"
            w={{ xs: "100%", smLogin: "350px" }}
          >
            <Heading
              style={{
                fontFamily: "'Pacifico'",
                margin: "22px auto 12px",
                height: "51px",
              }}
            >
              Instaclone
            </Heading>
            <VStack>
              <form onSubmit={handleSubmit(postData)}>
                <FormControl isRequired isInvalid={errors.email}>
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
                    {...register("email", {
                      required: "Required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email adress",
                      },
                    })}
                  />
                  {errors.email && (
                    <FormErrorMessage>Invalid Email</FormErrorMessage>
                  )}
                </FormControl>
                <FormControl isRequired isInvalid={errors.password}>
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
                    {...register("password", { required: "Required" })}
                  />
                  {errors.password && (
                    <FormErrorMessage>Invalid Password</FormErrorMessage>
                  )}
                </FormControl>
                <Button
                  type="submit"
                  w="100%"
                  variant="primary"
                  style={{ marginBottom: "7px !important" }}
                >
                  Login
                </Button>
              </form>
              <Text>OR</Text>
              <HStack marginTop="50px" cursor="pointer" marginBottom="50px">
                <Icon as={FaFacebookSquare} color="facebook" />
                <Text color="facebook" fontWeight="600">
                  Log in with facebook
                </Text>
              </HStack>
              <Text
                cursor="pointer"
                fontSize="12px"
                lineHeight="16px"
                marginTop="12px"
                textAlign="center"
                color="#00376b"
              >
                Forgot Password?
              </Text>
            </VStack>
          </VStack>
          <HStack
            bg="white"
            w="100%"
            h="63px"
            border="1px solid #efefef"
            margin="auto"
            justify="center"
          >
            <Text>
              Don&apos;t have an account, <Link color="active">Sign up</Link>
            </Text>
          </HStack>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Login;

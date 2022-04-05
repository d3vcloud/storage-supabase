import { useContext } from "react";
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";

import { AuthContext } from "../context/AuthContext";
import { logout } from "../services/auth";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Text fontSize="xl" color="orange.400" fontWeight="bold">
            User: {user?.email}
          </Text>
          <Flex alignItems={"center"}>
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"pink.400"}
              href={"#"}
              _hover={{
                bg: "pink.300",
              }}
              onClick={() => logout()}
            >
              Logout
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
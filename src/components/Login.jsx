import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { signInWithMagicLink } from "../services/auth";

const Login = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signInWithMagicLink(email);
    setEmail("");
  };

  return (
    <Grid placeContent="center" height="100vh">
      <Box w='350px' h='auto'>
        <Heading fontSize="2xl" mb="15px">
          Login
        </Heading>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <Stack spacing={6}>
              <Button type="submit" bg={"blue.400"} color={"white"}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Grid>
  );
};

export default Login;

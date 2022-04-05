import {
  Box,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";
import { Link as ReachLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Bucket = ({ id, name, public: isPublic }) => {
  const colorVisibility = isPublic ? "green.500" : "red.500";
  const textVisibility = isPublic ? "Public" : "Private";
  return (
    <>
      <Box
        rounded='md'
        width='250px'
        bg='blue.700'
        padding={"1rem"}
      >
        <Stack spacing={5}>
          <Text
            color={colorVisibility}
            textTransform='uppercase'
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            {textVisibility}
          </Text>
          <Heading
            fontSize='2xl'
            color='gray.100'
          >
            {name}
          </Heading>
          <Link style={{
            fontWeight: 'bold',
            color: '#0BC5EA',
          }} as={ReachLink} to={'/' + id}>Details</Link>
        </Stack>
      </Box>
    </>
  );
};

export default Bucket;

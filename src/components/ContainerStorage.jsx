import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";

import { listBuckets } from "../services/storage";

import { CreateFolderButton } from "./ActionButtons";
import ListBuckets from "./ListBuckets";
import ModalNewFolder from "./Modals/ModalNewFolder";

const ContainerStorage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [buckets, setBuckets] = useState([]);

  useEffect(() => {
    listBuckets().then((response) => {
      setBuckets(response);
    });
  }, []);

  return (
    <>
      <Flex flexDirection="row" justifyContent="space-between">
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="#">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Stack direction="row" spacing={4}>
          <CreateFolderButton onClick={onOpen} />
        </Stack>
      </Flex>
      <ListBuckets buckets={buckets} />
      {isOpen && <ModalNewFolder isOpen={isOpen} onClose={onClose} setBuckets={setBuckets}/>}
    </>
  );
};

export default ContainerStorage;

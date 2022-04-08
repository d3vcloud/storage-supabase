import { useParams, Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Stack, useDisclosure } from "@chakra-ui/react";

import { UploadFileButton } from "./ActionButtons";
import ModalUpload from "./Modals/ModalUpload";
import ListFiles from "./ListFiles";
import useFile from "../hooks/useFile";

const DetailsBucket = () => {
  const {bucketId} = useParams();
  const {isOpen, onOpen, onClose} = useDisclosure();
  const {files, uploadFile, saveFile} = useFile(bucketId);

  return (
    <>
      <Flex flexDirection="row" justifyContent="space-between">
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to='/dashboard'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink as={Link} to='#'>Details</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Stack direction="row" spacing={4}>
          <UploadFileButton onClick={onOpen} />
        </Stack>
      </Flex>
      <ListFiles files={files}/>
      {isOpen && <ModalUpload 
        isOpen={isOpen} 
        onClose={onClose} 
        upload={uploadFile} 
        save={saveFile}
        />}
    </>
  );
};

export default DetailsBucket;

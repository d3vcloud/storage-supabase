import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Button,
  Input,
  Switch,
} from "@chakra-ui/react";
import { createBucket, getBucketDetails } from "../../services/storage";

const initialState = {
  isPublic: true,
  bucketName: "",
};

const ModalNewFolder = ({ isOpen, onClose, setBuckets }) => {
  const [data, setData] = useState(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createBucket(data);
    const infoBucket = await getBucketDetails(data.bucketName);
    setData(initialState);
    setBuckets((prevBuckets) => prevBuckets.concat(infoBucket));
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Bucket</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <ModalBody pb={6}>
              <FormControl id="folder" mb={4}>
                <FormLabel htmlFor="folder">Bucket Name</FormLabel>
                <Input
                  name="folder"
                  type="text"
                  value={data.bucketName}
                  placeholder="i.e photos"
                  onChange={(e) =>
                    setData({ ...data, bucketName: e.target.value })
                  }
                />
              </FormControl>
              <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="isPublic" mb="0">
                  Public
                </FormLabel>
                <Switch
                  id="isPublic"
                  defaultChecked={data.isPublic}
                  name="isPublic"
                  value={data.isPublic}
                  onChange={(e) =>
                    setData({ ...data, isPublic: e.target.checked })
                  }
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button type="submit" colorScheme="blue" mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalNewFolder;

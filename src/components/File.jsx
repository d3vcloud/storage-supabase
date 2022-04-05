import {
  Box,
  Heading,
  Stack,
} from "@chakra-ui/react";
import fileDownload from "js-file-download";
import { useParams } from "react-router-dom";

import { copyTextToClipboard } from '../utils/copyText';
import { downloadFileFromBucket, getSignedUrl } from "../services/storage";

import { DownloadFileButton, ShareFileButton } from "./ActionButtons";
import IconContent from "./IconContent";

const File = ({mimetype, name}) => {
  const {bucketId} = useParams();

  const downloadFile = async () => {
    console.log('Downloading file');
    const data = await downloadFileFromBucket(bucketId,name)
    fileDownload(data, name);
  }

  const getUrl = async () => {
    console.log('Getting Link');
    const link = await getSignedUrl(bucketId,name);
    await copyTextToClipboard(link);
  }

  return (
    <>
      <Box
        rounded='md'
        borderWidth={"1px"}
        borderColor={"gray.200"}
        padding={"1rem"}
        bg={"gray.100"}
        width='280px'
      >
        <Stack>
          <IconContent content={mimetype}/>
          <Heading
            fontSize={"2xl"}
            color='gray.700'
          >
            {name}
          </Heading>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4}>
          <DownloadFileButton 
            bg='gray.500' 
            color='white' 
            _hover={{ bg: "#A0AEC0" }}
            onClick={downloadFile}/>
          <ShareFileButton 
            bg='gray.500' 
            color='white' 
            _hover={{ bg: "#A0AEC0" }}
            onClick={getUrl}/>
        </Stack>
      </Box>
    </>
  )
}

export default File;
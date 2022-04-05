import { Flex } from '@chakra-ui/react';
import File from './File';

const ListFiles = ({files}) => {
  return (
    <>
      <Flex flexDirection='row' flexWrap='wrap' gap={8} mt={10}>
        {files.length === 0 && <h1>No Files...</h1>}
        {files.length > 0 && files.map(file => (
          <File key={file.id} {...file}/>
        ))}
      </Flex>
    </>
  )
}

export default ListFiles;
import { Flex } from '@chakra-ui/react';
import Bucket from './Bucket';

const ListBuckets = ({buckets}) => {
  return (
    <>
      <Flex flexDirection='row' flexWrap='wrap' gap={8} mt={10}>
        {buckets.length === 0 && <h1>No buckets...</h1>}
        {buckets.length > 0 && buckets.map(bucket => (
          <Bucket key={bucket.id} {...bucket} />
        ))}
      </Flex>
    </>
  )
}

export default ListBuckets;
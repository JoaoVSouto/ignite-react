import Head from 'next/head';
import { Box, Flex, Heading, Img, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <Head>
        <title>worldtrip</title>
      </Head>

      <Flex justify="center" align="center" py={4}>
        <Img src="/img/logo.svg" alt="world trip" w={20} />
      </Flex>

      <Box
        bgImage="/img/banner-bg.jpg"
        bgRepeat="no-repeat"
        bgSize="cover"
        backgroundPosition="center -23vw"
        px={4}
        py={7}
      >
        <Heading
          color="gray.50"
          fontWeight="medium"
          fontSize="xl"
          lineHeight={7}
        >
          5 Continentes, <br />
          infinitas possibilidades.
        </Heading>
        <Text color="gray.200" fontSize="sm" mt={2} lineHeight={5}>
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>
    </>
  );
}

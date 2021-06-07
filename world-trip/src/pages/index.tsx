import Head from 'next/head';
import {
  Box,
  Flex,
  Heading,
  Img,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

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

      <Flex
        as={UnorderedList}
        flexWrap="wrap"
        justify="center"
        listStyleType="none"
        css={{ gap: '1.75rem' }}
        mx={12}
        my={9}
      >
        <ListItem
          fontSize="large"
          fontWeight="medium"
          _before={{
            content: '""',
            bgColor: 'yellow.400',
            height: '8px',
            width: '8px',
            borderRadius: '50%',
            display: 'inline-block',
            marginRight: '1rem',
          }}
        >
          vida noturna
        </ListItem>
        <ListItem
          fontSize="large"
          fontWeight="medium"
          _before={{
            content: '""',
            bgColor: 'yellow.400',
            height: '8px',
            width: '8px',
            borderRadius: '50%',
            display: 'inline-block',
            marginRight: '1rem',
          }}
        >
          praia
        </ListItem>
        <ListItem
          fontSize="large"
          fontWeight="medium"
          _before={{
            content: '""',
            bgColor: 'yellow.400',
            height: '8px',
            width: '8px',
            borderRadius: '50%',
            display: 'inline-block',
            marginRight: '1rem',
          }}
        >
          moderno
        </ListItem>
        <ListItem
          fontSize="large"
          fontWeight="medium"
          _before={{
            content: '""',
            bgColor: 'yellow.400',
            height: '8px',
            width: '8px',
            borderRadius: '50%',
            display: 'inline-block',
            marginRight: '1rem',
          }}
        >
          clássico
        </ListItem>
        <ListItem
          fontSize="large"
          fontWeight="medium"
          _before={{
            content: '""',
            bgColor: 'yellow.400',
            height: '8px',
            width: '8px',
            borderRadius: '50%',
            display: 'inline-block',
            marginRight: '1rem',
          }}
        >
          e mais...
        </ListItem>
      </Flex>
    </>
  );
}

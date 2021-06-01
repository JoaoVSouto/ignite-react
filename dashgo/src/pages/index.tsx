import {
  Flex,
  Input,
  FormLabel,
  FormControl,
  Button,
  Stack,
} from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" justify="center" align="center">
      <Flex
        as="form"
        w="100%"
        maxW={360}
        direction="column"
        bg="gray.800"
        p={8}
        mx={4}
        borderRadius={8}
      >
        <Stack spacing={4}>
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              id="email"
              name="email"
              type="email"
              focusBorderColor="pink.500"
              bg="gray.900"
              variant="filled"
              _hover={{ bgColor: 'gray.900' }}
              size="lg"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input
              id="password"
              name="password"
              type="password"
              focusBorderColor="pink.500"
              bg="gray.900"
              variant="filled"
              _hover={{ bgColor: 'gray.900' }}
              size="lg"
            />
          </FormControl>
        </Stack>

        <Button type="submit" mt={6} colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}

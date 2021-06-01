import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormLabel,
  FormControl,
} from '@chakra-ui/react';

type InputProps = {
  name: string;
  label?: string;
} & ChakraInputProps;

export default function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        id={name}
        name={name}
        focusBorderColor="pink.500"
        bg="gray.900"
        variant="filled"
        _hover={{ bgColor: 'gray.900' }}
        size="lg"
        {...rest}
      />
    </FormControl>
  );
}

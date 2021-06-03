import { Text, Link as ChakraLink, LinkProps, Icon } from '@chakra-ui/react';
import Link from 'next/link';

type NavLinkProps = {
  icon: React.ElementType;
  children: string;
  href: string;
} & LinkProps;

export default function NavLink({
  children,
  icon,
  href,
  ...rest
}: NavLinkProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize={20} />
        <Text ml={4} fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </Link>
  );
}

import { Text, Link, LinkProps, Icon } from '@chakra-ui/react';

type NavLinkProps = {
  icon: React.ElementType;
  children: string;
} & LinkProps;

export default function NavLink({ children, icon, ...rest }: NavLinkProps) {
  return (
    <Link href="#!" display="flex" align="center" {...rest}>
      <Icon as={icon} fontSize={20} />
      <Text ml={4} fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
}

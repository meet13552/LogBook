import { HStack, Heading, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <>
      <HStack justifyContent="space-between" padding="10px">
        <HStack>
          <Image src={logo} boxSize="60px" />
          <Heading padding="5px">LogBook</Heading>
        </HStack>
        <HStack>
          <ColorModeSwitch />
        </HStack>
      </HStack>
    </>
  );
};

export default NavBar;

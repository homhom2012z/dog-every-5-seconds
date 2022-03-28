import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";

import Link from "next/link";
import { BsClockFill } from "react-icons/bs";

import ThemeToggle from "../../components/ThemeToggle";
import DurationDrawer from "../../components/DurationDrawer";

function DrawerExample() {
  return (
    <>
      <Button leftIcon={<AddIcon />} colorScheme="teal" onClick={onOpen}>
        Create user
      </Button>
    </>
  );
}
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();

  return (
    <>
      <Flex as="header" width="full" align="center">
        <Heading as="h1" size="md">
          <Link href="/">Dogs every 5 seconds</Link>
        </Heading>

        <Box marginLeft="auto">
          <Stack direction={{ base: "row" }} spacing={4}>
            <Button
              colorScheme={"blue"}
              leftIcon={<BsClockFill />}
              onClick={onOpen}
            >
              Duration
            </Button>
            <ThemeToggle />
          </Stack>
        </Box>
      </Flex>
      <DurationDrawer
        isOpen={isOpen}
        onClose={onClose}
        firstField={firstField}
      />
    </>
  );
};

export default Header;

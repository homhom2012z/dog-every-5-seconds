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
import HelperText from "../../components/HelperText";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();

  return (
    <>
      <Flex as="header" width="full" align="center">
        <HelperText label={"Github: dog-every-5-seconds"}>
          <Heading as="h1" size="md">
            <Link href="https://github.com/homhom2012z/dog-every-5-seconds">
              Dogs every 5 seconds
            </Link>
          </Heading>
        </HelperText>

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

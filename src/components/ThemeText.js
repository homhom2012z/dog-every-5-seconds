import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";

const ThemeText = () => {
  const { colorMode } = useColorMode();
  const bgColor = useColorModeValue("white", "gray.800");

  return (
    <>
      <Box display={{ md: "flex" }} alignItems={"center"} w={"full"}>
        <Stack>
          <HStack>
            <Text as={"p"} fontWeight={"medium"}>
              Theme Mode:
            </Text>
            <Text>{colorMode}</Text>
          </HStack>
          <HStack>
            <Text as={"p"} fontWeight={"medium"}>
              Background Color:
            </Text>
            <Text>{bgColor}</Text>
          </HStack>
        </Stack>
      </Box>
    </>
  );
};

export default ThemeText;

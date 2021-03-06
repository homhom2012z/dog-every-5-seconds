import {
  Box,
  Button,
  Stack,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  FormLabel,
  Text,
  HStack,
  IconButton,
  Switch,
  FormControl,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsPatchPlusFill, BsPatchMinusFill } from "react-icons/bs";
import HelperText from "./HelperText";

const DurationDrawer = ({ isOpen, onClose, firstField }) => {
  const localDuration = 5;
  const localFadeEffect = false;
  if (typeof window !== "undefined") {
    localDuration = localStorage.getItem("dogeveryfiveseconds_duration");
    localFadeEffect = localStorage.getItem("dogeveryfiveseconds_fadeeffect");
  }

  const [duration, setDuration] = useState(Number(localDuration));
  const [fadeEffect, setFadeEffect] = useState(
    localFadeEffect === "true" ? true : false
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("dogeveryfiveseconds_duration", duration);
    }
  }, [duration]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("dogeveryfiveseconds_fadeeffect", fadeEffect);
      // console.log(
      //   "re render" + localStorage.getItem("dogeveryfiveseconds_fadeeffect")
      // );
    }
  }, [fadeEffect]);

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Set duration</DrawerHeader>

          <DrawerBody>
            <Stack spacing="8px">
              <Box>
                <Box>
                  <FormLabel>Second unit</FormLabel>
                </Box>

                <Stack direction={"row"}>
                  <HelperText label="Current transition time in seconds">
                    <Box w={"100%"} borderWidth="1px" borderRadius="lg" p={2}>
                      <Text align={"center"}>{duration}</Text>
                    </Box>
                  </HelperText>

                  <HStack>
                    <HelperText label="Increase time">
                      <IconButton
                        aria-label="increase duration"
                        variant="outline"
                        icon={<BsPatchPlusFill />}
                        rounded="full"
                        onClick={() => setDuration(duration + 1)}
                      />
                    </HelperText>
                    <HelperText label="Decrease time">
                      <IconButton
                        aria-label="decrease duration"
                        variant="outline"
                        icon={<BsPatchMinusFill />}
                        rounded="full"
                        onClick={() =>
                          duration > 3 && setDuration(duration - 1)
                        }
                      />
                    </HelperText>
                  </HStack>
                </Stack>
              </Box>
              <Box>
                <Box>
                  <FormLabel>Transition effect</FormLabel>
                </Box>

                <Stack direction={"row"}>
                  <Box w={"-moz-fit-content"} p={2}>
                    <Text align={"left"}>Fade</Text>
                  </Box>

                  <HStack>
                    <HelperText label="Switch effect">
                      <FormControl display="flex" alignItems="center">
                        <Switch
                          size={"lg"}
                          onChange={() => {
                            setFadeEffect(fadeEffect ? false : true);
                            // console.log("set Fade Effect");
                          }}
                          isChecked={fadeEffect ? true : false}
                        />
                      </FormControl>
                    </HelperText>
                  </HStack>
                </Stack>
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={onClose}>
              Ok
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DurationDrawer;

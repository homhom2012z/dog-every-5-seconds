import { Tooltip, Box } from "@chakra-ui/react";

const HelperText = ({ label, children }) => {
  return (
    <Tooltip hasArrow aria-label={label} label={label} placement={"auto-end"}>
      {children}
    </Tooltip>
  );
};

export default HelperText;

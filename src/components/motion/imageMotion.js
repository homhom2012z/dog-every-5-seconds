import { motion, AnimatePresence } from "framer-motion";

const ImageMotion = ({ trigger, children }) => {
  const variants = {
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 2.1,
      },
    },
    hide: {
      y: 0,
      opacity: 0,
      //   delay: 2.4,
    },
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={trigger}
          variants={variants}
          animate={"show"}
          initial="hide"
          exit={{ opacity: 0 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default ImageMotion;

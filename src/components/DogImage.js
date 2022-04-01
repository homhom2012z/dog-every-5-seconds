import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";

import { Image } from "@chakra-ui/react";
import ImageMotion from "./motion/imageMotion";

const DogImage = () => {
  const [dogImage, setDogImage] = useState([]);
  // const [fadeEffect, setFadeEffect] = useState(false);

  const loadLocalStorageDuration = () => {
    if (typeof window !== "undefined") {
      // fadeEffect = localStorage.getItem("dogeveryfiveseconds_fadeeffect");
      return Number(localStorage.getItem("dogeveryfiveseconds_duration"));
    }
  };

  const loadLocalStorageEffect = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("dogeveryfiveseconds_fadeeffect");
    }
  };

  const setDefaultDuration = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("dogeveryfiveseconds_duration", 5);
      localStorage.setItem("dogeveryfiveseconds_fadeeffect", false);
    }

    return 5;
  };

  const duration = loadLocalStorageDuration()
    ? loadLocalStorageDuration()
    : setDefaultDuration();

  const fadeEffect = loadLocalStorageEffect()
    ? loadLocalStorageEffect()
    : false;

  const fetchImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonResponse) => setDogImage(jsonResponse));
  };

  useEffect(() => {
    const interval = setInterval(
      () => {
        fetchImage();
        if (typeof window !== "undefined") {
          const readLocal = Number(
            localStorage.getItem("dogeveryfiveseconds_duration")
          );
          duration = readLocal ? readLocal : setDefaultDuration();
        }
      },
      duration ? duration * 1000 : 5000
    );
    return () => clearInterval(interval);
  }, [dogImage]);

  const preTrigger = () => {
    fetchImage();
    return dogImage.message;
  };

  const imageNoEffect = () => {
    return (
      <Box>
        <ImageMotion>
          <Image
            src={dogImage.message ? dogImage.message : preTrigger()}
            opacity={dogImage.message ? 1 : 0}
            boxSize={"100%"}
            alt="Dog Images"
          />
        </ImageMotion>
      </Box>
    );
  };

  const imageWithEffect = () => {
    return (
      <Box>
        <ImageMotion trigger={dogImage.message}>
          <Image
            src={dogImage.message ? dogImage.message : preTrigger()}
            opacity={dogImage.message ? 1 : 0}
            boxSize={"100%"}
            alt="Dog Images"
          />
        </ImageMotion>
      </Box>
    );
  };

  return (
    <>
      <Box>{fadeEffect === "true" ? imageWithEffect() : imageNoEffect()}</Box>
    </>
  );
};

export default DogImage;
2110;

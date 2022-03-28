import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";

import { Image } from "@chakra-ui/react";

const DogImage = () => {
  const loadLocalStorage = () => {
    if (typeof window !== "undefined") {
      return Number(localStorage.getItem("dogeveryfiveseconds_duration"));
    }
  };

  const setDefaultDuration = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("dogeveryfiveseconds_duration", 5);
    }

    return 5;
  };

  const duration = loadLocalStorage()
    ? loadLocalStorage()
    : setDefaultDuration();

  console.log(duration * 1000);

  const [dogImage, setDogImage] = useState([]);

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

  return (
    <>
      <Box>
        <Image
          src={dogImage.message ? dogImage.message : preTrigger()}
          opacity={dogImage.message ? 1 : 0}
          boxSize={"100%"}
          alt="Dog Images"
        />
      </Box>
    </>
  );
};

export default DogImage;

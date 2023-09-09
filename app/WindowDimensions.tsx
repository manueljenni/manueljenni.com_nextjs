import { useEffect, useState } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    setIsLoading(false);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    ...windowDimensions,
    isLoading,
  };
}

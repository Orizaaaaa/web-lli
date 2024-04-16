'use client'

import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage("color-theme", "light");

  useEffect(() => {
    if (typeof window !== "undefined") {
      //jika di classname terdapat dark akan menjadi warna hitam
      //jika tidak akan menjadi warna putih karena dark nya di remove lewat className
      const className = "dark";
      const bodyClass = window.document.body.classList;

      colorMode === "dark"
        ? bodyClass.add(className)
        : bodyClass.remove(className);
    }
  }, [colorMode]);

  return [colorMode, setColorMode];
};

export default useColorMode;

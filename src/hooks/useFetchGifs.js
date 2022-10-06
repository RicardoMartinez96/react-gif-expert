import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        //aqui solo se ejecuta una unica vez, y así se evita que se cargue cada vez que se realiza un cambio en las variables
        getImages();
    }, []);


  return {
    images,
    isLoading
  }
}

import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'; //petición a la API de Giphy

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async () => {
    const newImages = await getGifs(category) //Obtiene los GIFs de la categoría
    setImages(newImages) //Actualiza el estado con los nuevos GIFs
    setIsLoading(false) //Indica que terminó la carga
  }

  useEffect(() => {
    getImages() //Llama a getImages() cuando el componente se monta
  }, [])

  return {
    images,
    isLoading //Estado de carga
  }
}
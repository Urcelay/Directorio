import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const ProyectoGif = () => {
  //Estado que contiene las categorías de búsqueda de GIFs
  //Inicialmente tiene una sola categoría: "Dragon Ball"
  const [categories, setCategories] = useState(['Dragon Ball'])

  //Función para agregar una nueva categoría
  // Evita duplicados comprobando si ya existe en el estado
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return
    setCategories([newCategory, ...categories])
  }

  return (
    <>
      <h1>ProyectoGif</h1>
      <AddCategory onNewCategory={onAddCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  )
}

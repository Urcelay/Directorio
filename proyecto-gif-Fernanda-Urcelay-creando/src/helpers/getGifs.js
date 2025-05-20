export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=3DjbD92CHU1CfWk4Nap06pifi9FGBbYb&q=${category}&limit=10`; //crea la url de Giphy
  const resp = await fetch(url)
  const { data } = await resp.json()

  return data.map(img => ({ //transforma cada elemento del array en data y representa cada objeto gif en array
    id: img.id, //identificador de giphy
    title: img.title, //texto alternativo
    url: img.images.downsized_medium.url
  }))
}
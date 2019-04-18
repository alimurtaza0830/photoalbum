import axios from 'axios';


// export default getAlbum;

export async function getAlbum() {
  const albums = await axios.get("https://jsonplaceholder.typicode.com/albums?_start=0&_limit=15");
  return albums;
}


export async function getDetails() {
  const albumDetails = await axios.get("https://jsonplaceholder.typicode.com/photos?albumId=5&_start=0&_limit=15");
  return albumDetails;
}



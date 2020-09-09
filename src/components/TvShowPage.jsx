import React, { useEffect, useState } from "react";
import { Image, Grid } from "semantic-ui-react"
import axios from "axios";

const TvShowPage = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    getImages()
  }, []);

  const getImages = async () => {
    let response = await axios.get("https://content.viaplay.se/pc-se/serier/samtliga")
    setImages(response.data._embedded['viaplay:blocks'][0]._embedded['viaplay:products'])
    debugger
  }

  let showList = images.map((image) => (
    <Grid>
    <Image id="show-image" src={image.content.images.landscape.url} data-id={image.id} />
    </Grid>
  ))

  return <div>{showList}</div>
}

export default TvShowPage;
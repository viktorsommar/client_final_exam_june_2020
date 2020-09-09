import React, { useEffect, useState } from "react";
import { Image, Grid } from "semantic-ui-react";
import axios from "axios";

const TvShowPage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    let response = await axios.get(
      "https://content.viaplay.se/pc-se/serier/samtliga"
    );
    setImages(
      response.data._embedded["viaplay:blocks"][0]._embedded["viaplay:products"]
    );
    debugger;
  };

  let showList = images.map((image) => {
    // <Grid>
    //   <Grid.Column columns={4}>
    //     <Grid.Row>
    //       <Image
    //         size="medium"
    //         id="show-image"
    //         src={image.content.images.landscape.url}
    //         data-id={image.id}
    //       />
    //     </Grid.Row>
    //   </Grid.Column>
    // </Grid>
    return (
      <div className="display-show">
        <img src={image.content.images.landscape.url} alt="" id={image.publicPath}/>
      </div>
    );
  });

  return <div>{showList}</div>;
};

export default TvShowPage;

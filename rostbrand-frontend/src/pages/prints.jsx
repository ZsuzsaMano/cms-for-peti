import React, { useState } from "react";
import Layout from "../components/layout";
import Lightbox from "yet-another-react-lightbox";
import PhotoAlbum from "react-photo-album";
import { prints } from "../components/imgs";

const Prints = () => {
  const [index, setIndex] = useState(-1);

  const displayPrints = prints.map((img) => ({
    width: 400,
    height: 300,
    src: `/images/${img.src}`,
  }));

  return (
    <Layout>
      <div className="gallery">
        <PhotoAlbum
          layout="rows"
          spacing={40}
          photos={displayPrints}
          targetRowHeight={200}
          onClick={({ index }) => setIndex(index)}
        />

        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={displayPrints}
        />
      </div>
    </Layout>
  );
};

export default Prints;

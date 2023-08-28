import React, { useState } from "react";
import Layout from "../components/layout";
import Lightbox from "yet-another-react-lightbox";
import PhotoAlbum from "react-photo-album";
import {sculptures} from "../components/imgs"

import "yet-another-react-lightbox/styles.css";


const Sculptures = () => {
  const [index, setIndex] = useState(-1);

const displaySculptures= sculptures.map(img => ({width:400, height:300, src:`/images/${img.src}`}))

  return (
    <Layout>
      <div className="gallery">
        <PhotoAlbum
          layout="rows"
          spacing={40}
          photos={displaySculptures}
          targetRowHeight={200}
          onClick={({ index }) => setIndex(index)}
        />

        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={displaySculptures}
        />
      </div>
    </Layout>
  );
};

export default Sculptures;

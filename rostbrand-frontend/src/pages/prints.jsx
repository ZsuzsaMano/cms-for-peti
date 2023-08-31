import { useState, useEffect } from "react";
import Layout from "../components/layout";
import Lightbox from "yet-another-react-lightbox";
import PhotoAlbum from "react-photo-album";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const Prints = () => {
  const [index, setIndex] = useState(-1);

  const [imgArray, setImgArray] = useState([]);

  useEffect(() => {
    // update the about data
    // when the component is rendered for the first time
    get();
  }, []);

  // This function updates the component with the
  // current about data stored in the server
  function get() {
    fetch(`${process.env.REACT_APP_BACKEND}api/prints?populate=*`)
      .then((res) => res.json())
      .then((prints) => {
        setImgArray(prints.data[0].attributes.Prints.data);
      });
  }


  const displayPrintsThumbnail = imgArray.map((img) => ({
    width: img.attributes.formats.small.width,
    height: img.attributes.formats.small.height,
    src:
      process.env.REACT_APP_BACKEND +
      img.attributes.formats.small.url.substring(1),
  }));

  const displayPrints = imgArray.map((img) => ({
    width: img.attributes.formats.medium.width,
    height: img.attributes.formats.medium.height,
    src:
      process.env.REACT_APP_BACKEND +
      img.attributes.formats.medium.url.substring(1),
  }));



  return (
    <Layout>
      <div className="gallery">
        <PhotoAlbum
          layout="rows"
          spacing={40}
          photos={displayPrintsThumbnail}
          targetRowHeight={200}
          onClick={({ index }) => setIndex(index)}
        />

        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={displayPrints}
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
      </div>
    </Layout>
  );
};

export default Prints;

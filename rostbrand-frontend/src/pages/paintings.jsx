import React, { useState } from "react";
import Layout from "../components/layout";
import Lightbox from "yet-another-react-lightbox";
import PhotoAlbum from "react-photo-album";
import { paintings } from "../components/imgs";

const Paintings = () => {
   const [index, setIndex] = useState(-1);

   const displayPaintings = paintings.map((img) => ({
     width: 400,
     height: 300,
     src: `/images/${img.src}`,
   }));

   const thumbPaintings = paintings.map((img) => ({
     width: 400,
     height: 300,
     src: `/images/Thumb/${img.src}`,
   }));

   return (
     <Layout>
       <div className="gallery">
         <PhotoAlbum
           layout="rows"
           spacing={40}
           photos={thumbPaintings}
           targetRowHeight={200}
           onClick={({ index }) => setIndex(index)}
         />

         <Lightbox
           open={index >= 0}
           index={index}
           close={() => setIndex(-1)}
           slides={displayPaintings}
         />
       </div>
     </Layout>
   );
};

export default Paintings;

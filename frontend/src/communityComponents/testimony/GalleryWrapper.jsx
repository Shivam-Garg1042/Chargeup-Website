
import {galleryItems} from "./GalleryData.jsx";
import DesktopGallery from "./DesktopGallery.jsx";


const GalleryWrapper = () => {
    return (
      <>
        <DesktopGallery items={galleryItems} />
        {/* <MobileGallery items={galleryItems} /> */}
      </>
    );
  };
  
  export default GalleryWrapper;
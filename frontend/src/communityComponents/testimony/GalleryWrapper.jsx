
import {galleryItems} from "./GalleryData.jsx";
import DesktopGallery from "./DesktopGallery.jsx";
import MobileGallery from "./MobileGallery.jsx";

const GalleryWrapper = () => {
    return (
      <>
        <DesktopGallery items={galleryItems} />
        <MobileGallery items={galleryItems} />
      </>
    );
  };
  
  export default GalleryWrapper;
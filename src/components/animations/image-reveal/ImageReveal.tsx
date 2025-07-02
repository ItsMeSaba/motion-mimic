import { ImageRevealImage } from "./components/ImageRevealAnimation";
import { Content } from "./components/Content";
import Image from "./assets/image.webp";

export function ImageReveal() {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto h-screen grid items-center grid-cols-2">
        <ImageRevealImage src={Image} alt="Hero Image" />

        <Content />
      </div>
    </div>
  );
}

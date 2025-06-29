import Image from "next/image";
import ImageSquare from "@/assets/animations/cross-section-image/image-square.png";
import ImageHorizontal from "@/assets/animations/cross-section-image/image-horizontal.png";
import ImageVertical from "@/assets/animations/cross-section-image/image-vertical.png";

interface Props {
  startingDiv: React.RefObject<HTMLDivElement | null>;
  imageProperties: {
    width: number;
    height: number;
    x: number;
    y: number;
  };
  isImageDisplayed: boolean;
}

export function UpperSection({
  startingDiv,
  imageProperties,
  isImageDisplayed,
}: Props) {
  return (
    <div className="py-16 px-12 grid h-[1000px] lg:grid-cols-2">
      <div className="flex flex-col justify-center">
        <h1 className="text-[48px] font-bold">
          Empowering Business Growth Through Innovation
        </h1>

        <p className="text-[18px] my-3">
          From Fundation and Camino Financial, we redefine business lending with
          tech and human touch.
        </p>

        <button className="w-fit bg-white text-black px-4 py-2 rounded-md my-5">
          Partner With Us
        </button>
      </div>

      <div className="flex items-center justify-center">
        <div className="h-fit">
          <div className="mb-5">
            <Image
              alt="hero image horizontal"
              src={ImageHorizontal}
              width={266}
              height={145}
              className="m-auto rounded-lg w-[266px] h-[145px]"
            />
          </div>

          <div className="flex gap-4 w-fit m-auto">
            <Image
              alt="hero image vertical"
              src={ImageVertical}
              width={178}
              height={266}
              className="rounded-lg translate-y-[104px]"
            />

            <div className="w-[267px] h-[267px]" ref={startingDiv}>
              <Image
                alt="test image"
                src={ImageSquare}
                style={{
                  width: `${imageProperties.width}px`,
                  height: `${imageProperties.height}px`,
                  top: `${imageProperties.y}px`,
                  left: `${imageProperties.x}px`,
                  display: isImageDisplayed ? "initial" : "none",
                }}
                className="absolute transition-all duration-300 rounded-lg w-[600] h-[600] block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

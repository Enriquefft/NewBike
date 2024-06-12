"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

/**
 * @param props - component props
 * @param props.img - image source
 * @param props.text - image text
 * @returns CarouselImage component
 */
function CarouselImage({ img, text }: { img: string; text: string }) {
  return (
    <>
      <Image
        alt="NewBike"
        className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
        height="550"
        src={`/${img}.jpg`}
        width="550"
      />
      <p className="text-center text-3xl font-semibold">{text}</p>
    </>
  );
}

/**
 * @returns BikeCarousel component
 */
export default function BikeCarousel() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem>
          <CarouselImage img="bike1" text="easy to use" />
        </CarouselItem>
        <CarouselItem>
          <CarouselImage img="couple" text="to share with your couple" />
        </CarouselItem>
        <CarouselItem>
          <CarouselImage img="man" text="give yourself a modern style" />
        </CarouselItem>
        <CarouselItem>
          <CarouselImage img="old" text="or remember the old times" />
        </CarouselItem>
        <CarouselItem>
          <CarouselImage img="style" text="or create new ones" />
        </CarouselItem>
        <CarouselItem>
          <CarouselImage img="wheels" text="just like when you where a kid" />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

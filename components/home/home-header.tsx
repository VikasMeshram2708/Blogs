import Image from "next/image";
import heroImg from "@/public/home/image.png";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function HomeHeader() {
  // Carousel slides data
  const slides = [
    {
      title: "Compassionate Care for Your Beloved Pets",
      description:
        "Professional veterinary services with a personal touch. Your pet's health and happiness are our top priorities.",
      cta: "Book an Appointment",
      bgOpacity: "bg-black/40",
    },
    {
      title: "24/7 Emergency Services",
      description:
        "Immediate care when you need it most. Our emergency team is always ready to help your pet in critical situations.",
      cta: "Emergency Contact",
      bgOpacity: "bg-black/50",
    },
    {
      title: "Wellness & Preventive Care",
      description:
        "Regular check-ups to keep your pet healthy and prevent future health issues. Prevention is better than cure!",
      cta: "Learn More",
      bgOpacity: "bg-black/30",
    },
    {
      title: "Advanced Surgical Procedures",
      description:
        "State-of-the-art surgical facilities with experienced veterinarians for your pet's complex medical needs.",
      cta: "Our Services",
      bgOpacity: "bg-black/40",
    },
    {
      title: "Grooming & Spa Services",
      description:
        "Pamper your pet with our premium grooming services that keep them looking and feeling their best.",
      cta: "View Packages",
      bgOpacity: "bg-black/30",
    },
    {
      title: "Pet Boarding Facilities",
      description:
        "Safe and comfortable boarding options when you're away. We treat your pets like family!",
      cta: "Reserve Now",
      bgOpacity: "bg-black/40",
    },
  ];

  return (
    <div className="max-w-7xl h-auto mx-auto p-5">
      <Carousel className="rounded-xl overflow-hidden shadow-xl">
        <CarouselContent>
          {slides.map((slide, idx) => (
            <CarouselItem
              key={idx}
              className="relative w-full h-[250px] md:h-[500px]"
            >
              <Image
                src={heroImg}
                alt={slide.title}
                fill
                sizes="100vw"
                className="object-cover"
                priority={idx === 0}
              />
              <div
                className={`absolute inset-0 z-10 ${slide.bgOpacity} transition-opacity duration-300 hover:opacity-90`}
              ></div>
              <div className="z-40 max-w-2xl mx-auto relative text-white flex flex-col items-center gap-5 justify-center h-full px-6 text-center">
                <h2 className="text-2xl md:text-5xl font-bold drop-shadow-lg animate-fade-in">
                  {slide.title}
                </h2>
                <p className="text-sm md:text-lg leading-relaxed max-w-lg drop-shadow-md">
                  {slide.description}
                </p>
                <Button
                  size={"lg"}
                  variant={"default"}
                  className="bg-amber-600 hover:bg-amber-700 text-white font-semibold shadow-lg transform transition-transform hover:scale-105"
                >
                  {slide.cta}
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 md:left-4 opacity-80 hover:opacity-100 hover:bg-white/20" />
        <CarouselNext className="right-2 md:right-4 opacity-80 hover:opacity-100 hover:bg-white/20" />
      </Carousel>
    </div>
  );
}

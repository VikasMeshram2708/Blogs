import Image from "next/image";
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
      url: "https://assets.grok.com/users/b67c3829-02a3-4beb-bb72-57a36d3c0a70/generated/1LRsB8MJo8KFi3rg/image.jpg",
    },
    {
      title: "24/7 Emergency Services",
      description:
        "Immediate care when you need it most. Our emergency team is always ready to help your pet in critical situations.",
      cta: "Emergency Contact",
      bgOpacity: "bg-black/50",
      url: "https://assets.grok.com/users/b67c3829-02a3-4beb-bb72-57a36d3c0a70/generated/5WY9d6sEagZmO5ej/image.jpg",
    },
    {
      title: "Wellness & Preventive Care",
      description:
        "Regular check-ups to keep your pet healthy and prevent future health issues. Prevention is better than cure!",
      cta: "Learn More",
      bgOpacity: "bg-black/30",
      url: "https://assets.grok.com/users/b67c3829-02a3-4beb-bb72-57a36d3c0a70/generated/Ia1C1Q88mzuQj1SN/image.jpg",
    },
    {
      title: "Advanced Surgical Procedures",
      description:
        "State-of-the-art surgical facilities with experienced veterinarians for your pet's complex medical needs.",
      cta: "Our Services",
      bgOpacity: "bg-black/40",
      url: "https://assets.grok.com/users/b67c3829-02a3-4beb-bb72-57a36d3c0a70/generated/CJR48pPjC0bgItLY/image.jpg",
    },
    {
      title: "Grooming & Spa Services",
      description:
        "Pamper your pet with our premium grooming services that keep them looking and feeling their best.",
      cta: "View Packages",
      bgOpacity: "bg-black/30",
      url: "https://assets.grok.com/users/b67c3829-02a3-4beb-bb72-57a36d3c0a70/generated/cbhmqo2OVj3CtmmC/image.jpg",
    },
    {
      title: "Pet Boarding Facilities",
      description:
        "Safe and comfortable boarding options when you're away. We treat your pets like family!",
      cta: "Reserve Now",
      bgOpacity: "bg-black/40",
      url: "https://assets.grok.com/users/b67c3829-02a3-4beb-bb72-57a36d3c0a70/generated/syuXB9NQiFnbSCwH/image.jpg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <Carousel className="rounded-xl overflow-hidden shadow-xl">
        <CarouselContent>
          {slides.map((slide, idx) => (
            <CarouselItem key={idx} className="relative w-full">
              <div className="relative w-full min-h-[300px] md:min-h-[500px] lg:min-h-[650px]">
                <Image
                  src={slide.url}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={idx === 0}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10"></div>

                {/* Content */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 text-white">
                  <h2 className="text-2xl md:text-5xl font-bold drop-shadow-md mb-4 animate-fade-in">
                    {slide.title}
                  </h2>
                  <p className="max-w-xl text-sm md:text-lg drop-shadow">
                    {slide.description}
                  </p>
                  <Button className="mt-6 bg-amber-600 hover:bg-amber-700 shadow-lg transition-transform hover:scale-105">
                    {slide.cta}
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-2 md:left-4 z-30 opacity-80 hover:opacity-100 hover:bg-white/20" />
        <CarouselNext className="right-2 md:right-4 z-30 opacity-80 hover:opacity-100 hover:bg-white/20" />
      </Carousel>
    </div>
  );
}

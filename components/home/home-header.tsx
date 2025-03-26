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
      url: "https://ik.imagekit.io/wciw9sobc/Pashucare/carousel/Compassionate%20Care%20for%20Your%20Beloved%20Pets?updatedAt=1742973363696",
    },
    {
      title: "24/7 Emergency Services",
      description:
        "Immediate care when you need it most. Our emergency team is always ready to help your pet in critical situations.",
      cta: "Emergency Contact",
      bgOpacity: "bg-black/50",
      url: "https://ik.imagekit.io/wciw9sobc/Pashucare/carousel/24_7%20Emergency%20Services?updatedAt=1742973120901",
    },
    {
      title: "Wellness & Preventive Care",
      description:
        "Regular check-ups to keep your pet healthy and prevent future health issues. Prevention is better than cure!",
      cta: "Learn More",
      bgOpacity: "bg-black/30",
      url: "https://ik.imagekit.io/wciw9sobc/Pashucare/carousel/Wellness%20&%20Preventive%20Care?updatedAt=1742973170837",
    },
    {
      title: "Advanced Surgical Procedures",
      description:
        "State-of-the-art surgical facilities with experienced veterinarians for your pet's complex medical needs.",
      cta: "Our Services",
      bgOpacity: "bg-black/40",
      url: "https://ik.imagekit.io/wciw9sobc/Pashucare/carousel/Advanced%20Surgical%20Procedures?updatedAt=1742973241105",
    },
    {
      title: "Grooming & Spa Services",
      description:
        "Pamper your pet with our premium grooming services that keep them looking and feeling their best.",
      cta: "View Packages",
      bgOpacity: "bg-black/30",
      url: "https://ik.imagekit.io/wciw9sobc/Pashucare/carousel/Grooming%20&%20Spa%20Services?updatedAt=1742973305053",
    },
    {
      title: "Pet Boarding Facilities",
      description:
        "Safe and comfortable boarding options when you're away. We treat your pets like family!",
      cta: "Reserve Now",
      bgOpacity: "bg-black/40",
      url: "https://ik.imagekit.io/wciw9sobc/Pashucare/carousel/Pet%20Boarding%20Facilities?updatedAt=1742973556592",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <Carousel className="rounded-xl overflow-hidden shadow-xl">
        <CarouselContent>
          {slides.map((slide, idx) => (
            <CarouselItem key={idx} className="">
              <div className="relative aspect-video">
                <Image
                  src={slide.url}
                  alt={slide.title}
                  fill
                  className="object-cover max-w-full h-auto"
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

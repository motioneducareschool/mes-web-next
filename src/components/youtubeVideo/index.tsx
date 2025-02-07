"use client";
import { Play, Youtube } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// YouTube video data array
const youtubeVideos = [
  {
    id: "wupTND58B1A",
    title: "Annual Sports Day 2024 Highlights",
    thumbnail: "https://img.youtube.com/vi/wupTND58B1A/hqdefault.jpg",
  },
  {
    id: "wupTND58B1A",
    title: "Science Fair Exhibition Tour",
    thumbnail: "https://img.youtube.com/vi/wupTND58B1A/hqdefault.jpg",
  },
  {
    id: "wupTND58B1A",
    title: "School Anniversary Celebration",
    thumbnail: "https://img.youtube.com/vi/wupTND58B1A/hqdefault.jpg",
  },
  {
    id: "wupTND58B1A",
    title: "Cultural Fest Performance",
    thumbnail: "https://img.youtube.com/vi/wupTND58B1A/hqdefault.jpg",
  },
];

export function VideoGallery() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Campus Life Videos
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Experience the vibrant life at Motion Educare through our videos
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {youtubeVideos.map((video, i) => (
              <CarouselItem
                key={video.id + i}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="group relative cursor-pointer rounded-xl overflow-hidden  transition-shadow border-[1px] border-sky-100">
                      <div className="aspect-video relative">
                        <Image
                          src={video.thumbnail}
                          alt={video.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="w-8 h-8 text-white fill-current" />
                        </div>
                      </div>
                      <div className="p-4 bg-white">
                        <h3 className="font-semibold text-gray-900 line-clamp-2">
                          {video.title}
                        </h3>
                      </div>
                    </div>
                  </DialogTrigger>

                  <DialogContent className="max-w-4xl p-0 bg-black border-none">
                    <DialogHeader className="px-6 pt-6">
                      <DialogTitle className="text-white">
                        {video.title}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="aspect-video">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="border-0"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:inline-flex" />
          <CarouselNext className="hidden md:inline-flex" />
        </Carousel>

        <div className="mt-8 text-center">
          <Button
            asChild
            variant="outline"
            className="bg-blue-600 hover:bg-blue-700 text-white hover:text-white"
          >
            <a
              href="https://youtube.com/@MotionEducareSchool"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Youtube className="w-5 h-5" />
              Visit Our YouTube Channel
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

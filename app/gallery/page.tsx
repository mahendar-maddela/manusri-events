"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null)

  const categories = ["All", "Magic Shows", "Birthday Parties", "Weddings", "Corporate Events", "School Shows"]

  const galleryItems = [
    {
      id: 1,
      type: "image",
      src: "/gallery/magic-show-1.png",
      alt: "Magic show performance with children audience",
      category: "Magic Shows",
      title: "Interactive Magic Performance",
      description: "Kids mesmerized by card tricks at birthday party",
    },
    {
      id: 2,
      type: "image",
      src: "/gallery/birthday-party-1.png",
      alt: "Birthday party celebration with magic entertainment",
      category: "Birthday Parties",
      title: "Birthday Magic Celebration",
      description: "Complete birthday party entertainment package",
    },
    {
      id: 3,
      type: "video",
      src: "/gallery/wedding-performance.mp4",
      poster: "/gallery/wedding-performance-poster.png",
      alt: "Wedding entertainment performance",
      category: "Weddings",
      title: "Wedding Sangeet Entertainment",
      description: "Traditional and modern entertainment for wedding celebrations",
    },
    {
      id: 4,
      type: "image",
      src: "/gallery/corporate-event-1.png",
      alt: "Corporate team building game show",
      category: "Corporate Events",
      title: "Corporate Team Building",
      description: "Interactive games for office annual day",
    },
    {
      id: 5,
      type: "image",
      src: "/gallery/school-show-1.png",
      alt: "School annual day magic performance",
      category: "School Shows",
      title: "School Annual Day Performance",
      description: "Educational magic show for 500+ students",
    },
    {
      id: 6,
      type: "image",
      src: "/gallery/magic-show-2.png",
      alt: "Close-up magic tricks demonstration",
      category: "Magic Shows",
      title: "Close-up Magic Demonstration",
      description: "Mind-bending illusions up close",
    },
    {
      id: 7,
      type: "video",
      src: "/gallery/game-show-highlights.mp4",
      poster: "/gallery/game-show-poster.png",
      alt: "Game show highlights with audience participation",
      category: "Corporate Events",
      title: "Game Show Highlights",
      description: "Exciting games and audience participation",
    },
    {
      id: 8,
      type: "image",
      src: "/gallery/birthday-party-2.png",
      alt: "Balloon twisting at birthday party",
      category: "Birthday Parties",
      title: "Balloon Art Creation",
      description: "Creative balloon twisting entertainment",
    },
    {
      id: 9,
      type: "image",
      src: "/gallery/wedding-anchoring.png",
      alt: "Professional anchoring at wedding ceremony",
      category: "Weddings",
      title: "Wedding Ceremony Anchoring",
      description: "Professional MC services for wedding events",
    },
    {
      id: 10,
      type: "image",
      src: "/gallery/talking-doll-show.png",
      alt: "Talking doll performance for children",
      category: "Birthday Parties",
      title: "Talking Doll Performance",
      description: "Adorable puppet show for young children",
    },
    {
      id: 11,
      type: "image",
      src: "/gallery/orchestra-performance.png",
      alt: "Live orchestra performance at wedding",
      category: "Weddings",
      title: "Live Orchestra Performance",
      description: "Traditional musical entertainment",
    },
    {
      id: 12,
      type: "video",
      src: "/gallery/magic-tricks-compilation.mp4",
      poster: "/gallery/magic-compilation-poster.png",
      alt: "Compilation of best magic tricks",
      category: "Magic Shows",
      title: "Magic Tricks Compilation",
      description: "Best moments from various magic performances",
    },
  ]

  const filteredItems =
    selectedCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  const nextMedia = () => {
    if (selectedMedia !== null) {
      const currentIndex = filteredItems.findIndex((item) => item.id === selectedMedia)
      const nextIndex = (currentIndex + 1) % filteredItems.length
      setSelectedMedia(filteredItems[nextIndex].id)
    }
  }

  const prevMedia = () => {
    if (selectedMedia !== null) {
      const currentIndex = filteredItems.findIndex((item) => item.id === selectedMedia)
      const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length
      setSelectedMedia(filteredItems[prevIndex].id)
    }
  }

  const selectedItem = galleryItems.find((item) => item.id === selectedMedia)

  return (
    <div className="min-h-screen">
      {/* <Header /> */}

      {/* Hero Section */}
      <section className="bg-magical-gradient-light py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary">Event Gallery</h1>
            <p className="text-lg text-muted-foreground">
              Witness the magic and joy from our memorable events across Telangana and Andhra Pradesh
            </p>
            <p className="text-base text-primary/80 font-medium">మా ఈవెంట్ల ఫోటోలు మరియు వీడియోలు</p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {filteredItems.map((item) => (
              <Dialog key={item.id}>
                <DialogTrigger asChild>
                  <Card
                    className="break-inside-avoid cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                    onClick={() => setSelectedMedia(item.id)}
                  >
                    <CardContent className="p-0 relative group">
                      <div className="relative">
                        <Image
                          src={item.type === "video" ? item.poster! : item.src}
                          alt={item.alt}
                          width={400}
                          height={300}
                          className="w-full h-auto object-cover"
                          loading="lazy"
                        />

                        {item.type === "video" && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                            <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                              <Play className="h-6 w-6 text-primary ml-1" />
                            </div>
                          </div>
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                            <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                            <p className="text-xs opacity-90">{item.description}</p>
                          </div>
                        </div>

                        <Badge variant="secondary" className="absolute top-2 right-2 text-xs bg-background/90">
                          {item.category}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>

                <DialogContent className="max-w-4xl w-full p-0 bg-black border-0">
                  <div className="relative">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                      onClick={() => setSelectedMedia(null)}
                    >
                      <X className="h-4 w-4" />
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                      onClick={prevMedia}
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                      onClick={nextMedia}
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>

                    {selectedItem && (
                      <div className="relative">
                        {selectedItem.type === "video" ? (
                          <video
                            src={selectedItem.src}
                            controls
                            className="w-full h-auto max-h-[80vh] object-contain"
                            poster={selectedItem.poster}
                          />
                        ) : (
                          <Image
                            src={selectedItem.src || "/placeholder.svg"}
                            alt={selectedItem.alt}
                            width={800}
                            height={600}
                            className="w-full h-auto max-h-[80vh] object-contain"
                          />
                        )}

                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                          <h3 className="text-xl font-semibold mb-2">{selectedItem.title}</h3>
                          <p className="text-sm opacity-90 mb-2">{selectedItem.description}</p>
                          <Badge variant="secondary" className="bg-white/20 text-white">
                            {selectedItem.category}
                          </Badge>
                        </div>
                      </div>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No items found for the selected category.</p>
            </div>
          )}
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  )
}

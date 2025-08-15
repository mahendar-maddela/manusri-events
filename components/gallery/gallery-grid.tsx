"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react"

const eventTypes = ["All", "Magic Shows", "Birthday Parties", "Weddings", "School Events", "Corporate Events"]

const galleryItems = [
  {
    id: 1,
    type: "image",
    category: "Magic Shows",
    title: "Magic Show at Birthday Party",
    description: "Children amazed by card tricks and illusions",
    src: "/birthday-magic-show.png",
    alt: "Magician A. Ramesh performing card tricks for excited children at a birthday party in Hyderabad",
  },
  {
    id: 2,
    type: "video",
    category: "Weddings",
    title: "Wedding Reception Entertainment",
    description: "Grand magic show at wedding reception",
    src: "/wedding-magic-show.png",
    alt: "Wedding reception magic show with bride, groom and guests enjoying the performance",
    videoSrc: "#",
  },
  {
    id: 3,
    type: "image",
    category: "Birthday Parties",
    title: "Talking Doll Performance",
    description: "Kids enjoying interactive puppet show",
    src: "/children-puppet-show.png",
    alt: "Children sitting in circle watching colorful talking doll puppet show performance",
  },
  {
    id: 4,
    type: "image",
    category: "School Events",
    title: "School Annual Day Magic",
    description: "Educational magic show for students",
    src: "/school-auditorium-magic-show.png",
    alt: "School auditorium filled with students watching educational magic show performance",
  },
  {
    id: 5,
    type: "image",
    category: "Corporate Events",
    title: "Corporate Fun Day",
    description: "Team building through entertainment",
    src: "/placeholder-0ao6u.png",
    alt: "Corporate employees and families enjoying magic show at company fun day event",
  },
  {
    id: 6,
    type: "video",
    category: "Magic Shows",
    title: "Mind-Reading Performance",
    description: "Audience participation in mentalism",
    src: "/magician-mind-reading.png",
    alt: "Magician performing mind reading trick with volunteer from audience",
    videoSrc: "#",
  },
  {
    id: 7,
    type: "image",
    category: "Birthday Parties",
    title: "Game Show Activities",
    description: "Interactive games with prizes",
    src: "/placeholder-gkbk4.png",
    alt: "Children actively participating in game show activities with colorful prizes",
  },
  {
    id: 8,
    type: "image",
    category: "Weddings",
    title: "Sangeet Night Entertainment",
    description: "Magic and music combination",
    src: "/placeholder-vgb4t.png",
    alt: "Sangeet ceremony featuring magic show combined with traditional music and dance",
  },
  {
    id: 9,
    type: "image",
    category: "School Events",
    title: "Prize Distribution Magic",
    description: "Special performance for achievers",
    src: "/placeholder-15ehd.png",
    alt: "School prize distribution ceremony enhanced with special magic show performance",
  },
]

export function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [lightboxItem, setLightboxItem] = useState<(typeof galleryItems)[0] | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const filteredItems = galleryItems.filter((item) => selectedCategory === "All" || item.category === selectedCategory)

  const openLightbox = (item: (typeof galleryItems)[0]) => {
    const index = filteredItems.findIndex((i) => i.id === item.id)
    setLightboxIndex(index)
    setLightboxItem(item)
  }

  const closeLightbox = () => {
    setLightboxItem(null)
  }

  const navigateLightbox = (direction: "prev" | "next") => {
    const newIndex = direction === "prev" ? lightboxIndex - 1 : lightboxIndex + 1
    if (newIndex >= 0 && newIndex < filteredItems.length) {
      setLightboxIndex(newIndex)
      setLightboxItem(filteredItems[newIndex])
    }
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {eventTypes.map((type) => (
              <Button
                key={type}
                variant={selectedCategory === type ? "default" : "outline"}
                onClick={() => setSelectedCategory(type)}
                className={
                  selectedCategory === type ? "bg-magical-gradient hover:opacity-90" : "bg-transparent hover:bg-muted"
                }
              >
                {type}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="group overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                onClick={() => openLightbox(item)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {item.type === "video" && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors duration-300">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                        <Play className="h-8 w-8 text-primary ml-1" />
                      </div>
                    </div>
                  )}
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="text-xs">
                      {item.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Lightbox */}
          {lightboxItem && (
            <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
              <div className="relative max-w-4xl max-h-full">
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute -top-12 right-0 text-white hover:text-white hover:bg-white/20 z-10"
                  onClick={closeLightbox}
                >
                  <X className="h-6 w-6" />
                </Button>

                {/* Navigation Buttons */}
                {lightboxIndex > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-white hover:bg-white/20 z-10"
                    onClick={() => navigateLightbox("prev")}
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </Button>
                )}

                {lightboxIndex < filteredItems.length - 1 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-white hover:bg-white/20 z-10"
                    onClick={() => navigateLightbox("next")}
                  >
                    <ChevronRight className="h-8 w-8" />
                  </Button>
                )}

                {/* Content */}
                <div className="bg-white rounded-lg overflow-hidden">
                  <div className="relative">
                    {lightboxItem.type === "video" ? (
                      <video controls className="w-full max-h-[70vh] object-contain" poster={lightboxItem.src} autoPlay>
                        <source src={lightboxItem.videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img
                        src={lightboxItem.src || "/placeholder.svg"}
                        alt={lightboxItem.alt}
                        className="w-full max-h-[70vh] object-contain"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{lightboxItem.category}</Badge>
                      {lightboxItem.type === "video" && <Badge variant="outline">Video</Badge>}
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-2">{lightboxItem.title}</h3>
                    <p className="text-muted-foreground">{lightboxItem.description}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

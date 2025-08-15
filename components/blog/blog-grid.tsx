import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: "best-birthday-party-magicians-hyderabad-2025",
    title: "Best Birthday Party Magicians in Hyderabad: Checklist & Prices (2025)",
    excerpt:
      "Complete guide to hiring the perfect magician for your child's birthday party in Hyderabad. Includes pricing, what to look for, and questions to ask before booking.",
    category: "Birthday Parties",
    readTime: "8 min read",
    publishDate: "2024-12-15",
    author: "A. Ramesh",
    featured: true,
  },
  {
    id: "top-10-school-annual-day-entertainment-telangana",
    title: "Top 10 School Annual Day Entertainment Ideas in Telangana",
    excerpt:
      "Creative and engaging entertainment options for school annual day functions. From educational magic shows to interactive performances that students will remember.",
    category: "School Events",
    readTime: "10 min read",
    publishDate: "2024-12-10",
    author: "A. Ramesh",
    featured: false,
  },
  {
    id: "wedding-entertainment-ideas-magic-orchestra-sangeet",
    title: "Wedding Entertainment Ideas: Magic + Orchestra for Sangeet",
    excerpt:
      "How to combine traditional music with modern entertainment for unforgettable sangeet ceremonies. Tips for coordinating multiple performers and keeping guests engaged.",
    category: "Weddings",
    readTime: "12 min read",
    publishDate: "2024-12-05",
    author: "A. Ramesh",
    featured: true,
  },
  {
    id: "apartment-community-events-games-magic-night-plan",
    title: "Apartment Community Events: Games & Magic Night Plan",
    excerpt:
      "Step-by-step guide to organizing successful community events in apartment complexes. Budget-friendly entertainment ideas that bring neighbors together.",
    category: "Community Events",
    readTime: "7 min read",
    publishDate: "2024-11-28",
    author: "A. Ramesh",
    featured: false,
  },
  {
    id: "how-to-book-magician-vijayawada-vizag-what-to-ask",
    title: "How to Book a Magician in Vijayawada & Vizag — What to Ask",
    excerpt:
      "Essential questions to ask when booking entertainment for your event in coastal Andhra Pradesh. Local considerations, pricing guides, and red flags to avoid.",
    category: "Event Planning",
    readTime: "9 min read",
    publishDate: "2024-11-20",
    author: "A. Ramesh",
    featured: false,
  },
]

export function BlogGrid() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Latest Articles</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Practical advice and creative ideas from our years of experience in event entertainment
            </p>
          </div>

          {/* Featured Posts */}
          <div className="space-y-8">
            <h3 className="text-2xl font-heading font-semibold">Featured Articles</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {blogPosts
                .filter((post) => post.featured)
                .map((post) => (
                  <Card
                    key={post.id}
                    className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{post.category}</Badge>
                        <Badge variant="outline" className="text-xs">
                          Featured
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-heading group-hover:text-primary transition-colors">
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                      </CardTitle>
                      <CardDescription className="leading-relaxed">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {post.author}
                        </div>

                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </div>
                      </div>
                      <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80" asChild>
                        <Link href={`/blog/${post.id}`} className="flex items-center gap-2">
                          Read More <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* All Posts */}
          <div className="space-y-8">
            <h3 className="text-2xl font-heading font-semibold">All Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      {post.featured && (
                        <Badge variant="outline" className="text-xs">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg font-heading group-hover:text-primary transition-colors line-clamp-2">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </CardTitle>
                    <CardDescription className="leading-relaxed line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
             
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80" asChild>
                      <Link href={`/blog/${post.id}`} className="flex items-center gap-2">
                        Read More <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

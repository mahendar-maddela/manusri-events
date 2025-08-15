import type { BlogPostData } from "@/lib/blog-data"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, User, Calendar } from "lucide-react"
import Link from "next/link"

interface BlogPostProps {
  post: BlogPostData
  featured?: boolean
}

export function BlogPost({ post, featured = false }: BlogPostProps) {
  return (
    <Card className={`group hover:shadow-lg transition-all duration-300 ${featured ? "md:col-span-2" : ""}`}>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="secondary" className="text-xs">
            {post.category}
          </Badge>
          {post.featured && (
            <Badge variant="default" className="text-xs bg-magical-gradient">
              Featured
            </Badge>
          )}
        </div>

        <h3 className={`font-bold mb-3 group-hover:text-primary transition-colors ${featured ? "text-xl" : "text-lg"}`}>
          <Link href={`/blog/${post.id}`} className="hover:underline">
            {post.title}
          </Link>
        </h3>

        <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{new Date(post.publishDate).toLocaleDateString("en-IN")}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t">
          <Link
            href={`/blog/${post.id}`}
            className="text-primary hover:text-primary/80 font-medium text-sm transition-colors"
          >
            Read More →
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

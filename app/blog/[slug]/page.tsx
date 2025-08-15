import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { PhoneCTA } from "@/components/phone-cta"
import { BlogPost } from "@/components/blog/blog-post"
import { blogPostsData } from "@/lib/blog-data"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return Object.keys(blogPostsData).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = blogPostsData[params.slug]

  if (!post) {
    return {
      title: "Post Not Found | Manusri Events Blog",
    }
  }

  return {
    title: `${post.title} | Manusri Events Blog`,
    description: post.excerpt,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    publishedTime: post.publishDate,
    modifiedTime: post.publishDate,
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPostsData[params.slug]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <BlogPost post={post} />
      </main>
      <Footer />
      <WhatsAppFloat />
      <PhoneCTA />
    </div>
  )
}

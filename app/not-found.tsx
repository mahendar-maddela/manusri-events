import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full text-center">
        <CardContent className="p-8">
          <div className="relative mb-6">
            <div className="text-8xl font-bold text-purple-200">404</div>
            <Sparkles className="absolute top-2 right-8 h-8 w-8 text-purple-400 animate-pulse" />
            <Sparkles className="absolute bottom-2 left-8 h-6 w-6 text-pink-400 animate-pulse delay-500" />
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-4">Oops! This Page Disappeared Like Magic</h1>

          <p className="text-gray-600 mb-8">
            The page you're looking for seems to have vanished into thin air. Don't worry, even the best magicians
            sometimes misplace things!
          </p>

          <div className="space-y-4">
            <Button asChild className="w-full">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Return Home
              </Link>
            </Button>

            <Button variant="outline" asChild className="w-full bg-transparent">
              <Link href="/services">
                <Search className="mr-2 h-4 w-4" />
                Browse Services
              </Link>
            </Button>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Need help? Contact us at{" "}
              <a href="tel:+919848012345" className="text-purple-600 hover:underline">
                +91 9848012345
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

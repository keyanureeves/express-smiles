import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-9xl font-bold text-primary">404</h1>
          <h2 className="text-2xl font-semibold mt-4 mb-2">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button>
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Button>
            </Link>
            <Link href="/blog">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Visit Blog
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
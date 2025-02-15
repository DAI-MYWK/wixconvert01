import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">株式会社プロパゲート</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            ホーム
          </Link>
          <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
            サービス
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            会社概要
          </Link>
          <Link href="#works" className="text-sm font-medium hover:text-primary transition-colors">
            制作実績
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            お問い合わせ
          </Link>
          <Button>無料相談</Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">メニューを開く</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                ホーム
              </Link>
              <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
                サービス
              </Link>
              <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                会社概要
              </Link>
              <Link href="#works" className="text-sm font-medium hover:text-primary transition-colors">
                制作実績
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                お問い合わせ
              </Link>
              <Button className="w-full">無料相談</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}


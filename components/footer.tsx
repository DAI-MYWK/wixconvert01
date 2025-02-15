import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#43A047] to-[#1B5E20] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 会社情報 */}
          <div>
            <h3 className="text-xl font-bold mb-4">株式会社プロパゲート</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>〒100-0005 東京都千代田区丸の内1-1-1</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:0312345678" className="hover:text-[#FFD700] transition-colors">
                  03-1234-5678
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:info@propagate.co.jp" className="hover:text-[#FFD700] transition-colors">
                  info@propagate.co.jp
                </a>
              </li>
            </ul>
          </div>

          {/* サイトマップ */}
          <div>
            <h3 className="text-xl font-bold mb-4">サイトマップ</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[#FFD700] transition-colors">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#FFD700] transition-colors">
                  サービス
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#FFD700] transition-colors">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="#works" className="hover:text-[#FFD700] transition-colors">
                  制作実績
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#FFD700] transition-colors">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* SNSリンク */}
          <div>
            <h3 className="text-xl font-bold mb-4">SNS</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFD700] transition-colors"
              >
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFD700] transition-colors"
              >
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFD700] transition-colors"
              >
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFD700] transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* コピーライトと法的リンク */}
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p>&copy; 2025 株式会社プロパゲート. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy-policy" className="text-sm hover:text-[#FFD700] transition-colors">
              プライバシーポリシー
            </Link>
            <Link href="/terms-of-service" className="text-sm hover:text-[#FFD700] transition-colors">
              利用規約
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}


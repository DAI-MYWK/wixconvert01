"use client"

import { useState } from "react"
import { ChevronDown } from 'lucide-react'

type FAQItem = {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "プロパゲートのサービス料金体系を教えてください。",
    answer:
      "基本料金は月額98,000円からで、保守運用費が月額29,800円です。具体的な料金は、プロジェクトの規模や要件によって変動しますので、無料相談でお見積りをご提案させていただきます。",
  },
  {
    question: "Webサイトの制作にはどのくらいの期間がかかりますか？",
    answer:
      "プロジェクトの規模にもよりますが、最短で2週間から納品が可能です。一般的なコーポレートサイトであれば、1〜2ヶ月程度で完成させることができます。具体的な期間は、初回のヒアリングでご要望をお伺いした上で設定いたします。",
  },
  {
    question: "スマートフォンやタブレットにも対応していますか？",
    answer:
      "はい、すべてのWebサイトをレスポンシブデザインで制作しています。スマートフォン、タブレット、デスクトップなど、あらゆるデバイスで最適な表示が可能です。",
  },
  {
    question: "サイトの更新は自分でできますか？",
    answer:
      "はい、可能です。直感的で使いやすい管理画面を提供しており、専門知識がなくても簡単に更新できます。また、更新方法についてのトレーニングも行っていますので、ご安心ください。",
  },
  {
    question: "SEO対策は含まれていますか？",
    answer:
      "はい、すべてのプランにSEO対策が含まれています。検索エンジン最適化を考慮したサイト構造の設計、メタタグの最適化、コンテンツ戦略のアドバイスなど、包括的なSEOサービスを提供しています。",
  },
  {
    question: "制作後のサポート体制はどうなっていますか？",
    answer:
      "24時間365日のサポート体制を整えています。技術的な問題やサイトの運用に関するご質問には、迅速に対応いたします。また、定期的なメンテナンスや性能改善の提案も行っています。",
  },
]

const FAQItem = ({ item }: { item: FAQItem }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b-2 border-[#4CAF50]">
      <button
        className="flex justify-between items-center w-full py-4 px-6 text-left bg-[#E8F5E9]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-lg">{item.question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? "transform rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white">
          <p className="text-gray-600">{item.answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">よくある質問</h2>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden border-2 border-[#4CAF50]">
          {faqData.map((item, index) => (
            <FAQItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}


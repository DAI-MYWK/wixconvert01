export default function LogoCloud() {
  return (
    <section className="py-12 bg-gradient-to-br from-[#43A047]/10 to-[#1B5E20]/10">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-lg font-medium text-gray-600 mb-8">多くの企業様にご利用いただいています</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center justify-items-center">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-64 h-24 relative animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ogimage-JP7ZbAmvOtGHXDVvguCLGn9tjjsgkJ.png"
                alt={`クライアントロゴ ${i + 1}`}
                className="w-full h-full object-contain opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


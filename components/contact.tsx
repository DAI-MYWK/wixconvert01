import ContactForm from "./contact-form"

export default function Contact() {
  return (
    <section id="contact" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">お問い合わせ</h2>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden border-2 border-[#4CAF50]">
          <div className="bg-[#E8F5E9] p-6 border-b-2 border-[#4CAF50]">
            <p className="text-center text-lg font-medium">
              ご質問やご相談がございましたら、以下のフォームよりお気軽にお問い合わせください。
              <br />
              通常2営業日以内にご返答いたします。
            </p>
          </div>
          <div className="p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}


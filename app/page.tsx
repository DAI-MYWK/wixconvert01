import Header from "@/components/header"
import Hero from "@/components/hero"
import ContactSection from "@/components/contact-section";
import LogoCloud from "@/components/logo-cloud"
import Services from "@/components/services"
import Features from "@/components/features"
import Comparison from "@/components/comparison"
import Works from "@/components/works"
import FAQ from "@/components/faq"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ContactSection />
        <LogoCloud />
        <Services />
        <Features />
        <Comparison />
        <Works />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}


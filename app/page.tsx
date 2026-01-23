import Header from "@/components/Layout/Header"
import Footer from "@/components/Layout/Footer"
import HeroSection from "@/components/Sections/HeroSection"
import HowItWorksSection from "@/components/Sections/HowItWorksSection"
import FeaturesSection from "@/components/Sections/FeaturesSection"

export default function Home() {
    return (
        <main className="min-h-screen relative flex flex-col">
            <Header />
            <HeroSection />
            <HowItWorksSection />
            <FeaturesSection />
            <Footer />
        </main>
    )
}

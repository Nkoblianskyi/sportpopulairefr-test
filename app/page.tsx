import { Hero } from "@/components/hero"
import { RatingSection } from "@/components/rating-section"
import { InfoSections } from "@/components/info-sections"
import { OurChoiceSection } from "@/components/our-choice-section"
import { AgeVerificationModal } from "@/components/age-verification-modal"

export default function HomePage() {
  return (
    <div className="min-h-screen relative bg-white">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(/football-field-aerial-view-green.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Black transparent overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <RatingSection />
        <InfoSections />
        <OurChoiceSection />
        <AgeVerificationModal />
      </div>
    </div>
  )
}

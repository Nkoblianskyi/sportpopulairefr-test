import { BettingSiteCard } from "./betting-site-card"
import { bettingSites } from "@/lib/mock-data"

export function RatingSection() {
  return (
    <section className="w-full py-12 relative max-w-[1250px] mx-auto">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="space-y-4">
          {bettingSites.map((site, index) => (
            <BettingSiteCard key={site.id} site={site} rank={index + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

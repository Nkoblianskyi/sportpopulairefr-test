import { Star, ExternalLink } from "lucide-react"
import { bettingSites } from "@/lib/mock-data"
import Link from "next/link"

export function OurChoiceSection() {
  const ourChoice = bettingSites[0]

  const renderStars = (rating: number) => {
    const stars = []
    const starRating = (rating / 10) * 5

    for (let i = 0; i < 5; i++) {
      const fillPercentage = Math.min(Math.max(starRating - i, 0), 1) * 100

      if (fillPercentage === 0) {
        stars.push(<Star key={i} className="w-4 h-4 text-gray-300" />)
      } else if (fillPercentage === 100) {
        stars.push(<Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />)
      } else {
        stars.push(
          <div key={i} className="relative w-4 h-4">
            <Star className="absolute w-4 h-4 text-gray-300" />
            <div className="absolute overflow-hidden" style={{ width: `${fillPercentage}%` }}>
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            </div>
          </div>,
        )
      }
    }
    return stars
  }

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Notre Recommandation</h2>
          <p className="text-lg text-gray-600">La plateforme qui se distingue par son excellence</p>
        </div>

        <Link href={ourChoice.url} target="_blank" rel="noopener noreferrer nofollow" className="block group">
          <div className="relative rounded-lg p-6 transition-all duration-300 border-2 bg-white border-green-600 shadow-xl max-w-4xl mx-auto group-hover:shadow-2xl">
            {/* Badge */}
            <div className="absolute -top-3 -left-3 z-20">
              <div className="bg-green-600 text-white border-2 border-white shadow-lg px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg">
                NOTRE CHOIX
              </div>
            </div>

            <div className="relative z-10">
              {/* Desktop Layout */}
              <div className="hidden md:flex md:items-center md:gap-6 pt-2">
                <div className="w-12 h-12 font-bold rounded-full flex items-center justify-center text-xl border-4 shadow-md bg-green-600 text-white border-white">
                  1
                </div>

                <div className=" p-4 rounded-lg border-2 border-gray-200 bg-black">
                  <img
                    src={ourChoice.logo || "/placeholder.svg"}
                    alt={`Logo ${ourChoice.name}`}
                    className="w-[140px] h-[86px] object-contain"
                    loading="lazy"
                  />
                </div>

                <div className="flex-1">
                  <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-1">Bonus</div>
                  <p className="font-bold text-xl text-gray-900">{ourChoice.bonus}</p>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {ourChoice.rating.toFixed(1)}
                    <span className="text-lg text-gray-500">/10</span>
                  </div>
                  <div className="flex items-center justify-center mb-1">{renderStars(ourChoice.rating)}</div>
                  <div className="text-gray-500 text-xs">({ourChoice.reviews} avis)</div>
                </div>

                <div>
                  <span className="font-bold px-8 py-6 text-base flex items-center gap-2 transition-all hover:scale-105 bg-green-600 hover:bg-green-700 text-white rounded-md">
                    VISITER
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden pt-2">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg border-2 border-gray-200 bg-black">
                    <img
                      src={ourChoice.logo || "/placeholder.svg"}
                      alt={`Logo ${ourChoice.name}`}
                      className="w-[100px] h-[60px] object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 pl-4">
                    <div className="text-xs font-semibold text-gray-600 uppercase mb-1">Bonus</div>
                    <p className="font-bold text-base text-gray-900">{ourChoice.bonus}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-2xl text-gray-900">{ourChoice.rating.toFixed(1)}</span>
                    <div className="flex items-center">{renderStars(ourChoice.rating)}</div>
                  </div>
                  <div className="text-gray-500 text-sm">({ourChoice.reviews} avis)</div>
                </div>

                <span className="w-full py-4 flex items-center justify-center gap-2 transition-all bg-green-600 hover:bg-green-700 text-white font-bold rounded-md">
                  VISITER SITE
                  <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-gray-600 text-xs text-center leading-relaxed">
                18+ | Jeu responsable | Site licencié ANJ | Aide : 09 74 75 13 13
              </p>
            </div>
          </div>
        </Link>

        {/* Advantages */}
        <div className="mt-6 bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="font-bold text-gray-900 text-base mb-1">Sécurité</div>
              <div className="text-gray-600 text-sm">Licence ANJ vérifiée</div>
            </div>
            <div>
              <div className="font-bold text-gray-900 text-base mb-1">Cotes</div>
              <div className="text-gray-600 text-sm">Très compétitives</div>
            </div>
            <div>
              <div className="font-bold text-gray-900 text-base mb-1">Support</div>
              <div className="text-gray-600 text-sm">Service client français</div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-600 rounded-r-lg">
          <p className="text-red-800 text-sm font-semibold text-center">
            18+ • Jeu responsable • Les paris peuvent créer une dépendance
          </p>
        </div>
      </div>
    </section>
  )
}

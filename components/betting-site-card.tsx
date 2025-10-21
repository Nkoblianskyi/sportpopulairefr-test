"use client"

import type React from "react"
import { Star, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { BettingSite } from "@/lib/mock-data"

interface BettingSiteCardProps {
  site: BettingSite
  rank: number
}

export function BettingSiteCard({ site, rank }: BettingSiteCardProps) {
  const getPrimaryBadge = () => {
    if (site.isTopRating)
      return {
        text: "RECOMMANDÉ",
        color: "bg-green-600 text-white",
      }
    if (site.isTopLine)
      return {
        text: "MEILLEUR CHOIX",
        color: "bg-blue-900 text-white",
      }
    if (site.isPopular)
      return {
        text: "POPULAIRE",
        color: "bg-gray-900 text-white",
      }
    return null
  }

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

  const primaryBadge = getPrimaryBadge()
  const isFirstItem = rank === 1

  const handleLinkClick = (e: React.MouseEvent) => {
    if (!site.url || !site.url.startsWith("https://")) {
      e.preventDefault()
      return
    }
  }

  return (
    <a
      href={site.url}
      target="_blank"
      rel="noopener noreferrer nofollow"
      onClick={handleLinkClick}
      className="block group"
    >
      <div
        className={`relative rounded-lg bg-white border-4 p-6 transition-all duration-300 group-hover:shadow-xl ${
          isFirstItem ? "border-green-600 shadow-lg" : "border-gray-200 hover:border-gray-300"
        }`}
      >
        {/* Rank badge */}
        <div className="absolute -top-3 -left-3 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
          {rank}
        </div>

        {/* Primary badge */}
        {primaryBadge && (
          <div className="absolute top-4 right-4">
            <Badge className={`${primaryBadge.color} px-3 py-1 text-xs font-bold uppercase tracking-wider`}>
              {primaryBadge.text}
            </Badge>
          </div>
        )}

        <div className="relative z-10 pt-2">
          {/* Desktop Layout */}
          <div className="hidden md:flex md:items-center md:gap-6">
            {/* Logo */}
            <div className="p-4 rounded-lg border-2 border-gray-200 bg-black">
              <img
                src={site.logo || "/placeholder.svg"}
                alt={`Logo ${site.name}`}
                className="w-[140px] h-[86px] object-contain"
                loading="lazy"
              />
            </div>

            {/* Bonus */}
            <div className="flex-1">
              <div className="text-sm text-center font-semibold text-gray-600 uppercase tracking-wide mb-1">Bonus</div>
              <p className="font-bold text-xl text-center text-gray-900">{site.bonus}</p>
            </div>

            {/* Rating */}
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {site.rating.toFixed(1)}
                <span className="text-lg text-gray-500">/10</span>
              </div>
              <div className="flex items-center justify-center mb-1">{renderStars(site.rating)}</div>
              <div className="text-gray-500 text-xs">({site.reviews} avis)</div>
            </div>

            {/* Button */}
            <div>
              <Button
                className={`font-bold px-8 py-6 text-base flex items-center gap-2 transition-all hover:scale-105 rounded-md ${
                  isFirstItem
                    ? "bg-green-600 hover:bg-green-700 text-white"
                    : "bg-blue-900 hover:bg-blue-800 text-white"
                }`}
              >
                VISITER
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="flex items-start justify-between mb-4">
              <div className=" p-3 rounded-lg border-2 border-gray-200 bg-black">
                <img
                  src={site.logo || "/placeholder.svg"}
                  alt={`Logo ${site.name}`}
                  className="w-[100px] h-[60px] object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 pl-4">
                <div className="text-xs font-semibold text-gray-600 uppercase mb-1">Bonus</div>
                <p className="font-bold text-base text-gray-900">{site.bonus}</p>
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="font-bold text-2xl text-gray-900">{site.rating.toFixed(1)}</span>
                <div className="flex items-center">{renderStars(site.rating)}</div>
              </div>
              <div className="text-gray-500 text-sm">({site.reviews} avis)</div>
            </div>

            <Button
              className={`font-bold w-full py-4 flex items-center justify-center gap-2 transition-all rounded-md ${
                isFirstItem ? "bg-green-600 hover:bg-green-700 text-white" : "bg-blue-900 hover:bg-blue-800 text-white"
              }`}
            >
              VISITER SITE
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-gray-600 text-xs text-center leading-relaxed">
            18+ | Jeu responsable | Site licencié ANJ | Aide : 09 74 75 13 13
          </p>
        </div>
      </div>
    </a>
  )
}

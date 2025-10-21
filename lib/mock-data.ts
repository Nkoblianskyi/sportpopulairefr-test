export interface BettingSite {
  id: number
  name: string
  logo: string
  bonus: string
  url: string
  rating: number
  stars: number
  reviews: number
  badges: string[]
  isTopRating?: boolean
  isTopLine?: boolean
  isPopular?: boolean
  isTrending?: boolean
}

export const bettingSites: BettingSite[] = [
  {
    id: 1,
    name: "PMU.FR",
    logo: "/pmu.svg",
    bonus: "100% Jusqu'à 100€ Remboursés",
    url: "https://www.pmu.fr/",
    rating: 9.8,
    stars: 4.8,
    reviews: 2415,
    badges: ["TOP LINE", "POPULAIRE"],
    isTopLine: true,
    isPopular: true,
  },
  {
    id: 2,
    name: "Parions Sport En Ligne",
    logo: "/psel.svg",
    bonus: "100% Jusqu'à 100€ de Bonus 1er Pari Doublé",
    url: "https://www.enligne.parionssport.fdj.fr",
    rating: 9.7,
    stars: 4.7,
    reviews: 1874,
    badges: ["POPULAIRE"],
    isPopular: true,
  },
  {
    id: 3,
    name: "CircusBet",
    logo: "/circus-bet.png",
    bonus: "Booste Automatiquement 3 éléments dans Votre Pari Combiné",
    url: "https://www.circusbet.fr/",
    rating: 9.6,
    stars: 4.7,
    reviews: 2365,
    badges: ["TENDANCE"],
    isPopular: true,
    isTrending: true,
  },
  {
    id: 4,
    name: "NetBet",
    logo: "/netbet.png",
    bonus: "100% Jusqu'à 100€ + 100 Paris Gratuits",
    url: "https://www.netbet.fr/",
    rating: 9.5,
    stars: 4.6,
    reviews: 1574,
    badges: [],
  },
  {
    id: 5,
    name: "Winamax",
    logo: "/winamax.png",
    bonus: "1er Pari Remboursé En Cash Jusqu'à 100 €",
    url: "https://winamax.fr/",
    rating: 9.2,
    stars: 4.4,
    reviews: 2745,
    badges: [],
  },


]

export function validateBettingSiteUrl(url: string): boolean {
  const allowedDomains = ["circusbet.fr", "netbet.fr", "winamax.fr", "pmu.fr", "parionssport.fdj.fr"]

  try {
    const urlObj = new URL(url)
    return urlObj.protocol === "https:" && allowedDomains.some((domain) => urlObj.hostname.includes(domain))
  } catch {
    return false
  }
}

import type React from "react"
import type { Metadata } from "next"
import { Inter, Merriweather } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { Header } from "@/components/header"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
})

export const metadata: Metadata = {
  title: "sportpopulairefr - Analyse Professionnelle des Paris Sportifs 2025",
  description:
    "Analyse approfondie et comparaison objective des plateformes de paris sportifs licenciées ANJ. Guide professionnel pour parieurs avertis. 18+",
  keywords:
    "paris sportifs France, analyse professionnelle, sites licenciés ANJ, comparaison bookmakers, stratégies paris sportifs",
  authors: [{ name: "sportpopulairefr" }],
  creator: "sportpopulairefr",
  publisher: "sportpopulairefr",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://sportpopulairefr.com",
    title: "sportpopulairefr - Analyse Professionnelle Paris Sportifs",
    description:
      "Analyse approfondie et comparaison objective des plateformes de paris sportifs licenciées ANJ pour parieurs professionnels. 18+",
    siteName: "sportpopulairefr",
  },
  twitter: {
    card: "summary_large_image",
    title: "sportpopulairefr - Analyse Professionnelle",
    description: "Guide professionnel paris sportifs France 2025. Analyse objective. 18+",
  },

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${merriweather.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https:; frame-ancestors 'none'; base-uri 'self'; form-action 'self';"
        />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta
          httpEquiv="Permissions-Policy"
          content="geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), speaker=()"
        />
        <meta httpEquiv="Strict-Transport-Security" content="max-age=31536000; includeSubDomains; preload" />
        <meta name="rating" content="general" />
        <meta name="audience" content="adults" />
        <meta name="distribution" content="global" />
        <meta name="classification" content="educational informational comparison guide" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://sportpopulairefr.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta
          name="description-extended"
          content="Plateforme d'analyse professionnelle - Contenu éducatif et comparatif - 18+ - Jeu responsable"
        />
        <meta name="age-restriction" content="18+" />
        <meta
          name="gambling-disclaimer"
          content="Plateforme d'analyse uniquement - Ne fournit aucun service de paris"
        />
        <meta name="help-resources" content="Joueurs Info Service: 09 74 75 13 13 - www.joueurs-info-service.fr" />
      </head>
      <body className={inter.className}>
        <noscript>
          <div style={{ padding: "20px", textAlign: "center" }}>
            Ce site nécessite JavaScript pour fonctionner correctement. Veuillez l'activer dans votre navigateur.
          </div>
        </noscript>
        <div className="min-h-screen w-full">
          <Header />
          {children}
          <Footer />
          <CookieBanner />
        </div>
      </body>
    </html>
  )
}

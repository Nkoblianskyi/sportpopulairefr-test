"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  const [show18Modal, setShow18Modal] = useState(false)
  const [showRulesModal, setShowRulesModal] = useState(false)

  const currentDate = new Date()
  const formattedDate = currentDate.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <>
      <section className="relative w-full py-16 border-b border-white/10 overflow-hidden">
        {/* Mobile background image */}
        <div
          className="absolute inset-0 z-0 md:hidden bg-cover bg-center"
          style={{
            backgroundImage: "url('/modern-football-stadium-aerial-view-professional-s.jpg')",
          }}
        />

        {/* Mobile dark overlay */}
        <div className="absolute inset-0 z-0 md:hidden bg-black/60" />

        {/* Desktop gradient background */}
        <div className="absolute inset-0 z-0 hidden md:block bg-black/30"></div>

        {/* Content */}
        <div className="relative z-10 w-full px-4">
          <div className="max-w-5xl mx-auto">
            {/* Date and metadata */}
            <div className="flex items-center text-white justify-center space-x-4 mb-6 text-sm">
              <time dateTime={new Date().toISOString()}>{formattedDate}</time>
              <span className="text-gray-300">•</span>
              <span className="flex items-center text-white space-x-2">
                <Image src="/flag.png" alt="flag" width={16} height={16} />
                <span className="font-medium">Licencié ANJ</span>
              </span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 leading-tight text-white text-shadow-strong">
              Analyse Professionnelle des <span className="text-blue-300">Sites de Paris Sportifs</span> en France
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-center text-white/90 leading-relaxed max-w-3xl mx-auto mb-8">
              Comparaison objective et détaillée des plateformes licenciées ANJ. Guide expert pour parieurs avertis.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => {
                  
                  setShow18Modal(true)
                }}
                className="px-6 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors text-sm uppercase tracking-wide"
              >
                18+ Information
              </button>

              <button
                onClick={() => {
                  
                  setShowRulesModal(true)
                }}
                className="px-6 py-2 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-md hover:bg-white/20 transition-colors text-sm uppercase tracking-wide border border-white/20"
              >
                Règles & Conditions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal 18+ */}
      <Dialog
        open={show18Modal}
        onOpenChange={(open) => {
          console.log("[v0] 18+ modal state changed to:", open)
          setShow18Modal(open)
        }}
      >
        <DialogContent className="max-w-md mx-4 bg-white text-gray-900 border border-gray-200">
          <DialogHeader>
            <DialogTitle className="text-center text-red-600 text-xl font-bold">18+ Réservé aux Adultes</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-gray-700 text-sm">
            <p>
              <strong>Limite d'âge :</strong> Vous devez avoir au moins 18 ans pour accéder aux informations sur les
              sites de paris sportifs licenciés en France.
            </p>

            <p>
              <strong>Jeu responsable :</strong> Les paris sportifs doivent être considérés comme un divertissement,
              jamais comme un moyen de gagner de l'argent.
            </p>

            <div className="p-4 rounded-lg border border-gray-200 bg-gray-50">
              <p className="font-semibold mb-2">Besoin d'aide ?</p>
              <ul className="text-sm space-y-1">
                <li>Joueurs Info Service - 09 74 75 13 13</li>
                <li>www.joueurs-info-service.fr</li>
              </ul>
            </div>
          </div>
          <Button onClick={() => setShow18Modal(false)} className="w-full bg-gray-900 hover:bg-gray-800 text-white">
            Compris
          </Button>
        </DialogContent>
      </Dialog>

      {/* Modal Règles */}
      <Dialog
        open={showRulesModal}
        onOpenChange={(open) => {
          console.log("[v0] Rules modal state changed to:", open)
          setShowRulesModal(open)
        }}
      >
        <DialogContent className="max-w-2xl mx-4 max-h-[80vh] overflow-y-auto bg-white text-gray-900 border border-gray-200">
          <DialogHeader>
            <DialogTitle className="text-center text-gray-900 text-xl font-bold">
              Règles et Conditions d'Utilisation
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 text-gray-700 text-sm">
            <div>
              <h3 className="font-bold mb-2 text-gray-900">Conditions Générales</h3>
              <p className="text-sm">
                Tous les sites recommandés sont licenciés par l'ANJ et respectent la réglementation française.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2 text-gray-900">Jeu Responsable</h3>
              <ul className="text-sm space-y-1">
                <li>• Fixez des limites de dépôt et de temps</li>
                <li>• Ne pariez que ce que vous pouvez perdre</li>
                <li>• Contactez Joueurs Info Service si besoin</li>
              </ul>
            </div>
          </div>
          <Button onClick={() => setShowRulesModal(false)} className="w-full bg-gray-900 hover:bg-gray-800 text-white">
            Accepter et Fermer
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}

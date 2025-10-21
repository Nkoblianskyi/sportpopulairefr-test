"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Shield, Phone } from "lucide-react"

export function AgeVerificationModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [showRestrictionWarning, setShowRestrictionWarning] = useState(false)

  useEffect(() => {
    console.log("[v0] AgeVerificationModal mounted")
    const timer = setTimeout(() => {
      console.log("[v0] Opening age verification modal")
      setIsOpen(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    console.log("[v0] Modal state changed - isOpen:", isOpen, "showRestrictionWarning:", showRestrictionWarning)
    if (isOpen || showRestrictionWarning) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen, showRestrictionWarning])

  const handleConfirmAge = () => {
    console.log("[v0] Age confirmed")
    setIsOpen(false)
  }

  const handleRejectAge = () => {
    console.log("[v0] Age rejected")
    setIsOpen(false)
    setShowRestrictionWarning(true)
  }

  const handleCloseRestriction = () => {
    console.log("[v0] Closing restriction warning")
    setShowRestrictionWarning(false)
    window.location.href = "https://www.joueurs-info-service.fr"
  }

  return (
    <>
      <style jsx global>{`
        [data-radix-dialog-overlay] {
          position: fixed !important;
          inset: 0 !important;
          z-index: 50 !important;
          background-color: rgba(0, 0, 0, 0.6) !important;
          backdrop-filter: blur(4px) !important;
        }
        
        [data-radix-dialog-content] {
          position: fixed !important;
          left: 50% !important;
          top: 50% !important;
          transform: translate(-50%, -50%) !important;
          z-index: 51 !important;
          max-height: 90vh !important;
          width: 95vw !important;
          max-width: 32rem !important;
        }

        [data-radix-dialog-content] button[aria-label="Close"] {
          display: none !important;
        }

        @media (max-width: 640px) {
          [data-radix-dialog-content] {
            max-width: 95vw !important;
          }
        }
      `}</style>

      <Dialog open={isOpen} onOpenChange={() => {}} modal>
        <DialogContent className="bg-white text-slate-900 border border-slate-200 shadow-xl rounded-xl p-0 overflow-hidden flex flex-col">
          <div className="bg-slate-900 p-6 text-center ">
            <DialogTitle className="text-white text-2xl font-bold flex items-center justify-center gap-3">
              <Shield className="w-7 h-7 text-white" />
              <span>Vérification d'Âge</span>
            </DialogTitle>
          </div>

          <div className="p-6 space-y-5 overflow-y-auto flex-1">
            <div className="bg-red-50 border-l-4 border-red-600 rounded-r-lg p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-600 mt-0.5" />
                <div>
                  <h3 className="font-bold text-red-600 text-base mb-2">Accès Réservé aux Adultes</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Ce site est strictement réservé aux personnes majeures (18 ans et plus) conformément à la
                    législation française sur les jeux d'argent.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
              <h4 className="font-bold text-slate-900 text-sm mb-3 uppercase tracking-wide">Conditions d'Accès</h4>
              <div className="space-y-2.5">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2"></div>
                  <span className="text-slate-700 text-sm">Avoir 18 ans ou plus</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2"></div>
                  <span className="text-slate-700 text-sm">Comprendre les risques liés aux paris sportifs</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 "></div>
                  <span className="text-slate-700 text-sm">S'engager à jouer de manière responsable</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 "></div>
                  <span className="text-slate-700 text-sm">Respecter la réglementation en vigueur</span>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg p-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-600" />
                <div className="flex-1">
                  <p className="text-emerald-900 font-semibold text-sm">Besoin d'aide ?</p>
                  <p className="text-emerald-700 text-sm">Joueurs Info Service</p>
                  <p className="text-emerald-900 font-mono text-base font-bold mt-1">09 74 75 13 13</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-4 text-center">
              <p className="text-amber-900 text-sm font-medium">Les paris sportifs doivent rester un divertissement</p>
            </div>
          </div>

          <div className="p-6 pt-4 border-t border-slate-200 bg-white">
            <p className="text-center font-semibold text-slate-900 text-base mb-4">
              Confirmez-vous avoir 18 ans ou plus ?
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Button
                onClick={handleConfirmAge}
                className="bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 rounded-lg text-base transition-colors"
              >
                Oui, j'ai 18 ans
              </Button>
              <Button
                onClick={handleRejectAge}
                variant="outline"
                className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold py-3 rounded-lg text-base transition-colors bg-white"
              >
                Non
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showRestrictionWarning} onOpenChange={() => {}} modal>
        <DialogContent className="bg-white text-slate-900 border border-red-200 shadow-xl rounded-xl p-0 overflow-hidden flex flex-col">
          <div className="bg-red-600 p-6 text-center ">
            <DialogTitle className="text-white text-2xl font-bold flex items-center justify-center gap-3">
              <AlertTriangle className="w-7 h-7 text-white" />
              Accès Refusé
            </DialogTitle>
          </div>

          <div className="p-6 text-center space-y-5 flex-1 overflow-y-auto">
            <div className="bg-red-50 border-l-4 border-red-600 rounded-r-lg p-5">
              <h3 className="font-bold text-xl mb-3 text-red-600">Accès Interdit aux Mineurs</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Ce site est strictement réservé aux personnes de 18 ans et plus, conformément à la législation française
                sur les jeux d'argent et les paris sportifs.
              </p>
            </div>

            <div className="space-y-3">
              <p className="font-semibold text-slate-600 text-sm">Vous allez être redirigé vers :</p>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                <Phone className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                <p className="text-emerald-600 font-bold text-lg mb-1">Joueurs Info Service</p>
                <p className="text-slate-600 text-sm">Service d'aide et d'accompagnement</p>
                <p className="text-emerald-900 font-mono text-lg font-bold mt-2">09 74 75 13 13</p>
              </div>
            </div>
          </div>

          <div className="p-6 pt-0 ">
            <Button
              onClick={handleCloseRestriction}
              className="bg-slate-900 hover:bg-slate-800 text-white font-semibold w-full py-3 rounded-lg text-base shadow-lg transition-colors"
            >
              Compris
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

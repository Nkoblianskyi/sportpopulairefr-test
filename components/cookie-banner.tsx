"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Cookie } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    preferences: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem("sportpopulairefr-cookie-consent")
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAcceptAll = () => {
    const consent = {
      essential: true,
      analytics: true,
      preferences: true,
      timestamp: Date.now(),
    }
    localStorage.setItem("sportpopulairefr-cookie-consent", JSON.stringify(consent))
    setIsVisible(false)
  }

  const handleRejectAll = () => {
    const consent = {
      essential: true,
      analytics: false,
      preferences: false,
      timestamp: Date.now(),
    }
    localStorage.setItem("sportpopulairefr-cookie-consent", JSON.stringify(consent))
    setIsVisible(false)
  }

  const handleSavePreferences = () => {
    const consent = {
      ...preferences,
      timestamp: Date.now(),
    }
    localStorage.setItem("sportpopulairefr-cookie-consent", JSON.stringify(consent))
    setIsVisible(false)
    setShowDetails(false)
  }

  const handlePreferenceChange = (type: keyof typeof preferences) => {
    if (type === "essential") return
    setPreferences((prev) => ({
      ...prev,
      [type]: !prev[type],
    }))
  }

  if (!isVisible) return null

  return (
    <>
      {!showDetails && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-gray-200 shadow-2xl">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <Cookie className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-sm text-gray-900 leading-tight">
                    <span className="font-medium">Cookies :</span> Nous utilisons des cookies pour améliorer votre
                    expérience.
                    <a href="/politique-cookies" className="text-blue-600 hover:text-blue-700 underline ml-1">
                      En savoir plus
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <Button
                  onClick={handleRejectAll}
                  variant="ghost"
                  size="sm"
                  className="text-red-600 hover:bg-red-50 text-xs px-3 py-1 h-8"
                >
                  Refuser
                </Button>
                <Button
                  onClick={handleAcceptAll}
                  size="sm"
                  className="bg-green-600 hover:bg-green-700 text-white text-xs px-4 py-1 h-8"
                >
                  Accepter
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Detailed Preferences Modal */}
      {showDetails && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">Préférences des Cookies</h3>
                <Button
                  onClick={() => setShowDetails(false)}
                  variant="ghost"
                  size="sm"
                  className="text-slate-500 hover:text-slate-700"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <p className="text-slate-600 mb-6">
                Choisissez quels cookies vous souhaitez accepter. Vous pouvez modifier ces préférences à tout moment.
              </p>

              <div className="space-y-4 mb-6">
                {/* Essential Cookies */}
                <div className="flex items-start justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex-1">
                    <h4 className="font-semibold text-green-800 mb-1">Cookies Essentiels</h4>
                    <p className="text-sm text-slate-700 mb-2">
                      Nécessaires au fonctionnement du site. Ne peuvent pas être désactivés.
                    </p>
                    <p className="text-xs text-slate-600">Sécurité, session, préférences de cookies</p>
                  </div>
                  <div className="ml-4">
                    <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-end px-1">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <p className="text-xs text-green-700 mt-1 text-center">Activé</p>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start justify-between p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-800 mb-1">Cookies Analytiques</h4>
                    <p className="text-sm text-slate-700 mb-2">
                      Nous aident à comprendre comment vous utilisez notre site.
                    </p>
                    <p className="text-xs text-slate-600">Google Analytics, statistiques de performance</p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => handlePreferenceChange("analytics")}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                        preferences.analytics ? "bg-blue-500 justify-end" : "bg-slate-300 justify-start"
                      }`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </button>
                    <p className="text-xs text-slate-600 mt-1 text-center">
                      {preferences.analytics ? "Activé" : "Désactivé"}
                    </p>
                  </div>
                </div>

                {/* Preference Cookies */}
                <div className="flex items-start justify-between p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-800 mb-1">Cookies de Préférences</h4>
                    <p className="text-sm text-slate-700 mb-2">
                      Mémorisent vos préférences pour personnaliser votre expérience.
                    </p>
                    <p className="text-xs text-slate-600">Langue, thème, région</p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => handlePreferenceChange("preferences")}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                        preferences.preferences ? "bg-amber-500 justify-end" : "bg-slate-300 justify-start"
                      }`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </button>
                    <p className="text-xs text-slate-600 mt-1 text-center">
                      {preferences.preferences ? "Activé" : "Désactivé"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-200">
                <Button
                  onClick={handleRejectAll}
                  variant="outline"
                  className="border-red-300 text-red-700 hover:bg-red-50 flex-1 sm:flex-none bg-transparent"
                >
                  Refuser Tout
                </Button>
                <Button
                  onClick={handleSavePreferences}
                  className="bg-blue-600 hover:bg-blue-700 text-white flex-1 sm:flex-none"
                >
                  Enregistrer
                </Button>
                <Button
                  onClick={handleAcceptAll}
                  className="bg-green-600 hover:bg-green-700 text-white flex-1 sm:flex-none"
                >
                  Accepter Tout
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

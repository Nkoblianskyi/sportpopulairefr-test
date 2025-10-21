import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-900 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <span className="text-xl font-bold text-gray-900">sportpopulairefr</span>
              <p className="text-xs text-gray-600 mt-1 uppercase tracking-wide">Analyse Professionnelle</p>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Comparatif objectif des sites de paris sportifs en France
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-gray-900 font-bold mb-4 text-sm uppercase tracking-wider">Navigation</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-600 hover:text-gray-900 transition-colors text-sm">
                Accueil
              </Link>
              <Link href="/a-propos" className="block text-gray-600 hover:text-gray-900 transition-colors text-sm">
                À Propos
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-gray-900 font-bold mb-4 text-sm uppercase tracking-wider">Légal</h3>
            <div className="space-y-2">
              <Link
                href="/politique-confidentialite"
                className="block text-gray-600 hover:text-gray-900 transition-colors text-sm"
              >
                Confidentialité
              </Link>
              <Link
                href="/politique-cookies"
                className="block text-gray-600 hover:text-gray-900 transition-colors text-sm"
              >
                Cookies
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-gray-900 font-bold mb-4 text-sm uppercase tracking-wider">Support</h3>
            <div className="space-y-3">
              <div>
                <p className="text-gray-600 text-xs mb-1">Joueurs Info Service</p>
                <p className="text-gray-900 font-semibold">09 74 75 13 13</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="px-3 py-1 bg-red-600 text-white rounded text-xs font-bold">18+</div>
                <div className="px-3 py-1 bg-blue-900 text-white rounded text-xs font-bold">ANJ</div>
              </div>
            </div>
          </div>
        </div>

        {/* Organizations Section */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <h4 className="text-gray-900 font-bold mb-6 text-center text-sm uppercase tracking-wider">
            Organismes Officiels
          </h4>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            <Link
              href="https://anj.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-gray-100 border border-gray-200 rounded p-3 flex items-center justify-center transition-colors"
              title="ANJ"
            >
              <img src="/logo-anj.svg" alt="ANJ" className="h-8 w-auto object-contain" />
            </Link>

            <Link
              href="https://www.joueurs-info-service.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-gray-100 border border-gray-200 rounded p-3 flex items-center justify-center transition-colors"
              title="Joueurs Info Service"
            >
              <img src="/jouers-info-service.png" alt="Joueurs Info Service" className="h-8 w-auto object-contain" />
            </Link>

            <Link
              href="https://www.gambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 border border-gray-200 rounded p-3 flex items-center justify-center transition-colors"
              title="GambleAware"
            >
              <img src="/gamble.webp" alt="GambleAware" className="h-8 w-auto object-contain" />
            </Link>

            <Link
              href="https://www.gamcare.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 border border-gray-200 rounded p-3 flex items-center justify-center transition-colors"
              title="GamCare"
            >
              <img src="/gamecare.svg" alt="GamCare" className="h-8 w-auto object-contain" />
            </Link>

            <Link
              href="https://www.gamstop.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 border border-gray-200 rounded p-3 flex items-center justify-center transition-colors"
              title="GAMSTOP"
            >
              <img src="/logo-gamstop.svg" alt="GAMSTOP" className="h-8 w-auto object-contain" />
            </Link>

            <Link
              href="https://www.sos-joueurs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 border border-gray-200 rounded p-3 flex items-center justify-center transition-colors"
              title="SOS Joueurs"
            >
              <img src="/logo-sos-joueurs.svg" alt="SOS Joueurs" className="h-8 w-auto object-contain" />
            </Link>

            <Link
              href="https://www.mediateur-jeux.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-gray-100 border border-gray-200 rounded p-3 flex items-center justify-center transition-colors"
              title="Médiateur des Jeux"
            >
              <img src="/logo-mediateurs-des-jeux.png" alt="Médiateur des Jeux" className="h-8 w-auto object-contain" />
            </Link>

            <Link
              href="https://www.adictel.eu"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-gray-100 border border-gray-200 rounded p-3 flex items-center justify-center transition-colors"
              title="ADICTEL"
            >
              <img src="/logo-adictel.svg" alt="ADICTEL" className="h-8 w-auto object-contain" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-xs">© 2025 sportpopulairefr.com - Tous droits réservés</p>
            <p className="text-gray-600 text-xs text-center">
              Site informatif • 18+ • Jouer comporte des risques • Jeu responsable
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

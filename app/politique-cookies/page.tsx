import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Politique des Cookies - sportpopulairefr",
  description: "Politique des cookies de sportpopulairefr - Informations sur l'utilisation des cookies sur notre site.",
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <div className="space-y-8">
          <div className="text-center border-b border-slate-200 pb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Politique des Cookies</h1>
            <p className="text-slate-600 text-sm">Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}</p>
          </div>

          <div className="prose prose-slate max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-blue-600 pl-4">
                1. Qu'est-ce qu'un Cookie ?
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Un cookie est un petit fichier texte stocké sur votre appareil (ordinateur, tablette, smartphone)
                lorsque vous visitez un site web. Les cookies permettent au site de mémoriser vos actions et préférences
                pendant une période donnée.
              </p>
              <p className="text-slate-700 leading-relaxed">
                <strong className="text-slate-900">sportpopulairefr</strong> utilise des cookies pour améliorer votre
                expérience de navigation et pour analyser l'utilisation de notre site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 border-l-4 border-blue-600 pl-4">
                2. Types de Cookies Utilisés
              </h2>

              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-3">2.1 Cookies Essentiels</h3>
                  <p className="text-slate-700 mb-3">
                    Ces cookies sont nécessaires au fonctionnement du site et ne peuvent pas être désactivés.
                  </p>
                  <ul className="list-disc pl-6 text-slate-700 space-y-1">
                    <li>
                      <strong>Cookies de session :</strong> Maintiennent votre session de navigation
                    </li>
                    <li>
                      <strong>Cookies de sécurité :</strong> Protègent contre les attaques malveillantes
                    </li>
                    <li>
                      <strong>Cookies de préférences :</strong> Mémorisent vos choix de cookies
                    </li>
                  </ul>
                  <p className="text-sm text-green-700 mt-3 font-medium">Durée : Session ou 1 an maximum</p>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">2.2 Cookies Analytiques</h3>
                  <p className="text-slate-700 mb-3">
                    Ces cookies nous aident à comprendre comment vous utilisez notre site.
                  </p>
                  <ul className="list-disc pl-6 text-slate-700 space-y-1">
                    <li>
                      <strong>Google Analytics :</strong> Statistiques de fréquentation anonymisées
                    </li>
                    <li>
                      <strong>Cookies de performance :</strong> Temps de chargement et erreurs
                    </li>
                    <li>
                      <strong>Cookies de comportement :</strong> Pages visitées et parcours utilisateur
                    </li>
                  </ul>
                  <p className="text-sm text-blue-700 mt-3 font-medium">
                    Durée : 13 mois maximum | Consentement requis
                  </p>
                </div>

                <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-800 mb-3">2.3 Cookies de Préférences</h3>
                  <p className="text-slate-700 mb-3">
                    Ces cookies mémorisent vos préférences pour personnaliser votre expérience.
                  </p>
                  <ul className="list-disc pl-6 text-slate-700 space-y-1">
                    <li>
                      <strong>Langue :</strong> Mémorisation de votre langue préférée
                    </li>
                    <li>
                      <strong>Thème :</strong> Mode sombre/clair (si applicable)
                    </li>
                    <li>
                      <strong>Région :</strong> Localisation pour le contenu pertinent
                    </li>
                  </ul>
                  <p className="text-sm text-amber-700 mt-3 font-medium">Durée : 1 an maximum | Consentement requis</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 border-l-4 border-blue-600 pl-4">
                3. Cookies Tiers
              </h2>
              <p className="text-slate-700 mb-4">
                Certains cookies sont déposés par des services tiers que nous utilisons :
              </p>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Services Tiers Utilisés</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-slate-800">Google Analytics</h4>
                      <p className="text-sm text-slate-600">Analyse du trafic et du comportement des utilisateurs</p>
                      <p className="text-xs text-slate-500">Politique : policies.google.com/privacy</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-slate-800">Hébergement Web</h4>
                      <p className="text-sm text-slate-600">Cookies techniques nécessaires au fonctionnement</p>
                      <p className="text-xs text-slate-500">Cookies essentiels uniquement</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 border-l-4 border-blue-600 pl-4">
                4. Gestion de vos Préférences
              </h2>

              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">4.1 Bannière de Consentement</h3>
                  <p className="text-slate-700 mb-3">
                    Lors de votre première visite, une bannière vous permet de choisir quels cookies accepter.
                  </p>
                  <ul className="list-disc pl-6 text-slate-700 space-y-1">
                    <li>Accepter tous les cookies</li>
                    <li>Refuser les cookies non essentiels</li>
                    <li>Personnaliser vos préférences</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">4.2 Paramètres du Navigateur</h3>
                  <p className="text-slate-700 mb-3">
                    Vous pouvez également gérer les cookies directement dans votre navigateur :
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">Chrome</h4>
                      <p className="text-slate-600">Paramètres → Confidentialité → Cookies</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">Firefox</h4>
                      <p className="text-slate-600">Options → Vie privée → Cookies</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">Safari</h4>
                      <p className="text-slate-600">Préférences → Confidentialité</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">Edge</h4>
                      <p className="text-slate-600">Paramètres → Cookies et autorisations</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 border-l-4 border-blue-600 pl-4">
                5. Conséquences du Refus
              </h2>
              <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-800 mb-3">Impact sur votre Expérience</h3>
                <p className="text-slate-700 mb-4">
                  Le refus de certains cookies peut affecter votre expérience sur notre site :
                </p>
                <ul className="list-disc pl-6 text-slate-700 space-y-2">
                  <li>
                    <strong>Cookies essentiels :</strong> Le site peut ne pas fonctionner correctement
                  </li>
                  <li>
                    <strong>Cookies analytiques :</strong> Nous ne pourrons pas améliorer le site selon vos besoins
                  </li>
                  <li>
                    <strong>Cookies de préférences :</strong> Vos choix ne seront pas mémorisés
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 border-l-4 border-blue-600 pl-4">
                6. Durée de Conservation
              </h2>
              <div className="bg-slate-50 p-6 rounded-lg">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold text-sm">E</span>
                    </div>
                    <h4 className="font-semibold text-slate-800 mb-1">Essentiels</h4>
                    <p className="text-sm text-slate-600">Session à 1 an</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold text-sm">A</span>
                    </div>
                    <h4 className="font-semibold text-slate-800 mb-1">Analytiques</h4>
                    <p className="text-sm text-slate-600">13 mois max</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold text-sm">P</span>
                    </div>
                    <h4 className="font-semibold text-slate-800 mb-1">Préférences</h4>
                    <p className="text-sm text-slate-600">1 an max</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 border-l-4 border-blue-600 pl-4">7. Vos Droits</h2>
              <p className="text-slate-700 mb-4">Concernant les cookies, vous avez le droit de :</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Consentement</h4>
                  <p className="text-slate-700 text-sm">Donner ou retirer votre consentement à tout moment</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Information</h4>
                  <p className="text-slate-700 text-sm">Être informé de l'utilisation des cookies</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-800 mb-2">Contrôle</h4>
                  <p className="text-slate-700 text-sm">Contrôler les cookies via votre navigateur</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Suppression</h4>
                  <p className="text-slate-700 text-sm">Supprimer les cookies existants</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-blue-600 pl-4">
                8. Modifications
              </h2>
              <p className="text-slate-700">
                Cette Politique des Cookies peut être modifiée pour refléter les changements dans nos pratiques ou pour
                des raisons légales. Nous vous informerons de tout changement significatif via une notification sur
                notre site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-blue-600 pl-4">9. Contact</h2>
              <div className="bg-slate-900 text-white p-6 md:p-8 rounded-xl shadow-lg">
                <p className="mb-4 leading-relaxed">Pour toute question concernant notre utilisation des cookies :</p>
                <div className="space-y-2 text-slate-100">
                  <p>
                    <strong className="text-white">Email :</strong> contact@sportpopulairefr.com
                  </p>
                  <p>
                    <strong className="text-white">Site :</strong> sportpopulairefr.com
                  </p>
                </div>
                <p className="mt-6 text-slate-300 text-sm leading-relaxed">
                  Nous nous efforçons de répondre à toutes les demandes dans les 48 heures ouvrables.
                </p>
              </div>
            </section>

            <div className="mt-12 pt-8 border-t border-slate-200 text-center">
              <Link
                href="/"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                ← Retour à l'accueil
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

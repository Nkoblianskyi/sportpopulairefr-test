import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politique de Confidentialité - sportpopulairefr",
  description:
    "Politique de confidentialité de sportpopulairefr - Protection des données personnelles et respect de votre vie privée.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <div className="space-y-8">
          <div className="text-center border-b border-slate-200 pb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Politique de Confidentialité</h1>
            <p className="text-slate-600 text-sm">Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}</p>
          </div>

          <div className="prose prose-slate max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-blue-600 pl-4">
                1. Introduction
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                La présente Politique de Confidentialité décrit la façon dont{" "}
                <strong className="text-slate-900">sportpopulairefr</strong> (ci-après "nous", "notre" ou "le Site")
                collecte, utilise et protège vos informations personnelles lorsque vous visitez notre site web{" "}
                <strong className="text-slate-900">sportpopulairefr.com</strong>.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Nous nous engageons à protéger votre vie privée et à traiter vos données personnelles de manière
                transparente, conformément au Règlement Général sur la Protection des Données (RGPD) et à la législation
                française applicable.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Responsable du Traitement</h2>
              <div className="bg-slate-50 p-6 rounded-lg">
                <p className="text-slate-700 mb-2">
                  <strong>Nom :</strong> sportpopulairefr.com
                </p>
                <p className="text-slate-700 mb-2">
                  <strong>Site web :</strong> sportpopulairefr.com
                </p>
                <p className="text-slate-700 mb-2">
                  <strong>Email :</strong> contact@sportpopulairefr.com
                </p>
                <p className="text-slate-700">
                  <strong>DPO :</strong> dpo@sportpopulairefr.com
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Données Collectées</h2>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">3.1 Données collectées automatiquement</h3>
              <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-1">
                <li>Adresse IP</li>
                <li>Type de navigateur et version</li>
                <li>Système d'exploitation</li>
                <li>Pages visitées et temps passé sur le site</li>
                <li>Date et heure de visite</li>
                <li>Site web de référence</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">3.2 Données fournies volontairement</h3>
              <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-1">
                <li>Informations de contact (email, nom) si vous nous contactez</li>
                <li>Commentaires ou messages envoyés via nos formulaires</li>
                <li>Préférences de cookies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Finalités du Traitement</h2>
              <p className="text-slate-700 mb-4">Nous utilisons vos données personnelles pour :</p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li>
                  <strong>Fonctionnement du site :</strong> Assurer le bon fonctionnement et la sécurité de notre site
                  web
                </li>
                <li>
                  <strong>Amélioration des services :</strong> Analyser l'utilisation du site pour améliorer nos
                  contenus et services
                </li>
                <li>
                  <strong>Communication :</strong> Répondre à vos questions et demandes
                </li>
                <li>
                  <strong>Conformité légale :</strong> Respecter nos obligations légales et réglementaires
                </li>
                <li>
                  <strong>Statistiques :</strong> Établir des statistiques de fréquentation anonymisées
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Base Légale du Traitement</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Intérêt légitime</h4>
                  <p className="text-slate-700 text-sm">
                    Amélioration de nos services, sécurité du site, analyses statistiques
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Consentement</h4>
                  <p className="text-slate-700 text-sm">
                    Cookies non essentiels, communications marketing (si applicable)
                  </p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-800 mb-2">Obligation légale</h4>
                  <p className="text-slate-700 text-sm">
                    Conservation de certaines données pour respecter nos obligations légales
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Partage des Données</h2>
              <p className="text-slate-700 mb-4">
                Nous ne vendons, ne louons ni ne partageons vos données personnelles avec des tiers, sauf dans les cas
                suivants :
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li>
                  <strong>Prestataires de services :</strong> Hébergement web, analytics, services techniques (sous
                  contrat de confidentialité)
                </li>
                <li>
                  <strong>Obligations légales :</strong> Si requis par la loi ou une autorité compétente
                </li>
                <li>
                  <strong>Protection des droits :</strong> Pour protéger nos droits, notre propriété ou notre sécurité
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Durée de Conservation</h2>
              <div className="bg-slate-50 p-6 rounded-lg">
                <ul className="text-slate-700 space-y-2">
                  <li>
                    <strong>Données de navigation :</strong> 13 mois maximum
                  </li>
                  <li>
                    <strong>Cookies :</strong> Selon les durées spécifiées dans notre politique des cookies
                  </li>
                  <li>
                    <strong>Données de contact :</strong> 3 ans après le dernier contact
                  </li>
                  <li>
                    <strong>Logs de sécurité :</strong> 1 an maximum
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">8. Vos Droits</h2>
              <p className="text-slate-700 mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Droit d'accès</h4>
                  <p className="text-slate-700 text-sm">Obtenir une copie de vos données personnelles</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Droit de rectification</h4>
                  <p className="text-slate-700 text-sm">Corriger des données inexactes ou incomplètes</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Droit à l'effacement</h4>
                  <p className="text-slate-700 text-sm">Demander la suppression de vos données</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-800 mb-2">Droit d'opposition</h4>
                  <p className="text-slate-700 text-sm">Vous opposer au traitement de vos données</p>
                </div>
              </div>
              <p className="text-slate-700 mt-4">
                Pour exercer ces droits, contactez-nous à : <strong>contact@sportpopulairefr.com</strong>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">9. Sécurité des Données</h2>
              <p className="text-slate-700 mb-4">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données
                personnelles contre :
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li>L'accès non autorisé</li>
                <li>La divulgation accidentelle</li>
                <li>La modification non autorisée</li>
                <li>La destruction illicite</li>
                <li>La perte accidentelle</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">10. Cookies</h2>
              <p className="text-slate-700 mb-4">
                Notre site utilise des cookies pour améliorer votre expérience de navigation. Pour plus d'informations
                sur notre utilisation des cookies, consultez notre{" "}
                <Link href="/politique-cookies" className="text-blue-600 hover:underline font-medium">
                  Politique des Cookies
                </Link>
                .
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">11. Modifications</h2>
              <p className="text-slate-700">
                Nous nous réservons le droit de modifier cette Politique de Confidentialité à tout moment. Les
                modifications seront publiées sur cette page avec une nouvelle date de mise à jour. Nous vous
                encourageons à consulter régulièrement cette page.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-blue-600 pl-4">12. Contact</h2>
              <div className="bg-slate-900 text-white p-6 md:p-8 rounded-xl shadow-lg">
                <p className="mb-4 leading-relaxed">
                  Pour toute question concernant cette Politique de Confidentialité ou le traitement de vos données
                  personnelles :
                </p>
                <div className="space-y-2 text-slate-100">
                  <p>
                    <strong className="text-white">Email :</strong> contact@sportpopulairefr.com
                  </p>
                  <p>
                    <strong className="text-white">DPO :</strong> dpo@sportpopulairefr.com
                  </p>
                  <p>
                    <strong className="text-white">Site :</strong> sportpopulairefr.com
                  </p>
                </div>
                <p className="mt-6 text-slate-300 text-sm leading-relaxed">
                  Vous avez également le droit de déposer une plainte auprès de la CNIL (Commission Nationale de
                  l'Informatique et des Libertés).
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

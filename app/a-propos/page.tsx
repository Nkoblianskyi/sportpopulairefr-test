import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "À Propos - sportpopulairefr.com",
  description:
    "Découvrez sportpopulairefr.com, votre guide de référence pour les paris sportifs en France. Notre mission, notre équipe et nos valeurs.",
  keywords: "à propos, sportpopulairefr, paris sportifs, guide, équipe, mission",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className=" from-slate-50 to-slate-100 py-16 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            À Propos de <span className="text-blue-600">sportpopulairefr</span>
          </h1>
          <p className="text-xl text-slate-700 leading-relaxed">
            Votre guide de référence pour naviguer dans l'univers des paris sportifs en France
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-12">
          {/* Notre Mission */}
          <section className="bg-slate-50 rounded-lg p-8 border border-slate-200">
            <div className="border-l-4 border-blue-600 pl-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Notre Mission</h2>
            </div>
            <div className="prose prose-lg text-slate-700">
              <p className="mb-4 leading-relaxed">
                <strong>sportpopulairefr.com</strong> est né de la volonté de créer un espace d'information transparent
                et fiable pour tous les passionnés de paris sportifs en France. Notre mission est de vous accompagner
                dans vos choix en vous fournissant des analyses objectives, des comparatifs détaillés et des conseils
                avisés.
              </p>
              <p className="leading-relaxed">
                Dans un secteur en constante évolution, nous nous engageons à maintenir une veille permanente sur les
                opérateurs, les réglementations et les meilleures pratiques pour vous offrir une information toujours
                actualisée et pertinente.
              </p>
            </div>
          </section>

          {/* Nos Valeurs */}
          <section>
            <div className="border-l-4 border-blue-600 pl-6 mb-8">
              <h2 className="text-3xl font-bold text-slate-900">Nos Valeurs</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 border border-slate-200 hover:border-blue-600 transition-colors">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Transparence</h3>
                <p className="text-slate-700 leading-relaxed">
                  Nous privilégions une approche transparente dans nos analyses et recommandations, sans influence
                  commerciale sur nos évaluations.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-slate-200 hover:border-blue-600 transition-colors">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Responsabilité</h3>
                <p className="text-slate-700 leading-relaxed">
                  Nous promouvons activement le jeu responsable et sensibilisons nos lecteurs aux risques liés aux paris
                  sportifs.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-slate-200 hover:border-blue-600 transition-colors">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Expertise</h3>
                <p className="text-slate-700 leading-relaxed">
                  Notre équipe combine passion du sport et expertise technique pour vous offrir des analyses de qualité
                  professionnelle.
                </p>
              </div>
            </div>
          </section>

          {/* Notre Approche */}
          <section className="bg-slate-50 rounded-lg p-8 border border-slate-200">
            <div className="border-l-4 border-blue-600 pl-6 mb-6">
              <h2 className="text-3xl font-bold text-slate-900">Notre Approche</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Méthodologie Rigoureuse</h3>
                <p className="text-slate-700 leading-relaxed">
                  Chaque site de paris sportifs est évalué selon des critères objectifs : sécurité, variété des marchés,
                  qualité du service client, facilité d'utilisation et conditions de bonus. Nos tests sont réalisés en
                  conditions réelles d'utilisation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Indépendance Éditoriale</h3>
                <p className="text-slate-700 leading-relaxed">
                  Nos classements et recommandations sont établis en toute indépendance. Nous maintenons une séparation
                  claire entre notre contenu éditorial et nos partenariats commerciaux.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Mise à Jour Continue</h3>
                <p className="text-slate-700 leading-relaxed">
                  Le marché des paris sportifs évolue rapidement. Nous mettons à jour régulièrement nos analyses et
                  classements pour refléter les dernières évolutions du secteur.
                </p>
              </div>
            </div>
          </section>

          {/* Engagement Responsable */}
          <section>
            <div className="border-l-4 border-blue-600 pl-6 mb-6">
              <h2 className="text-3xl font-bold text-slate-900">Notre Engagement pour le Jeu Responsable</h2>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6">
              <p className="text-slate-700 mb-4 leading-relaxed">
                <strong>sportpopulairefr.com</strong> s'engage activement dans la promotion du jeu responsable. Nous
                rappelons régulièrement que les paris sportifs doivent rester un divertissement et ne jamais
                compromettre votre situation financière ou votre bien-être.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Ressources d'Aide</h4>
                  <ul className="text-sm text-slate-700 space-y-2 leading-relaxed">
                    <li>Joueurs Info Service : 09 74 75 13 13</li>
                    <li>Liens vers les outils d'auto-exclusion</li>
                    <li>Guides de prévention et sensibilisation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Nos Actions</h4>
                  <ul className="text-sm text-slate-700 space-y-2 leading-relaxed">
                    <li>Promotion des limites de dépôt</li>
                    <li>Sensibilisation aux signes d'addiction</li>
                    <li>Partenariats avec des organismes de prévention</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-slate-900 text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Nous Contacter</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Informations Générales</h3>
                <div className="space-y-3 text-slate-300">
                  <p>
                    <strong className="text-white">Email :</strong> contact@sportpopulairefr.com
                  </p>
                  <p>
                    <strong className="text-white">Site Web :</strong> sportpopulairefr.com
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Sujets Spécifiques</h3>
                <div className="space-y-3 text-slate-300">
                  <p>
                    <strong className="text-white">Partenariats :</strong> partenariats@sportpopulairefr.com
                  </p>
                  <p>
                    <strong className="text-white">Questions Techniques :</strong> support@sportpopulairefr.com
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-700">
              <p className="text-slate-400 text-sm">
                Nous nous efforçons de répondre à tous les messages dans les 48 heures ouvrables.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

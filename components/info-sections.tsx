export function InfoSections() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-5xl mx-auto px-4 space-y-16">
        <article className="space-y-8">
          <header className="text-center border-b-2 border-gray-900 pb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">À Propos de Notre Plateforme</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Expertise indépendante et analyse rigoureuse des sites de paris sportifs en France
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="bg-gray-50 p-8 rounded-lg space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Notre équipe d'experts analyse et compare les plateformes de paris sportifs licenciées par l'Autorité
                Nationale des Jeux (ANJ) depuis plus de 10 ans. Nous évaluons chaque site selon des critères objectifs
                et transparents pour vous aider à faire le meilleur choix.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Indépendants et impartiaux, nous testons personnellement chaque bookmaker recommandé. Notre méthodologie
                rigoureuse examine les cotes, la variété des marchés, la qualité du service client, la rapidité des
                paiements et la fiabilité technique de chaque plateforme.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
                  <div className="text-4xl font-bold text-blue-900 mb-2">10+</div>
                  <div className="text-sm text-gray-600 font-medium">Années d'Expertise</div>
                </div>
                <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
                  <div className="text-4xl font-bold text-blue-900 mb-2">50+</div>
                  <div className="text-sm text-gray-600 font-medium">Sites Analysés</div>
                </div>
                <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
                  <div className="text-4xl font-bold text-blue-900 mb-2">100%</div>
                  <div className="text-sm text-gray-600 font-medium">Indépendance</div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="space-y-8">
          <header className="text-center border-b-2 border-gray-900 pb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Jeu Responsable et Sécurité</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Votre sécurité et votre bien-être sont nos priorités absolues
            </p>
          </header>

          <div className="bg-blue-50 border-2 border-blue-900 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Principes du Jeu Responsable</h3>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Fixez Vos Limites</h4>
                <p className="text-gray-700 leading-relaxed">
                  Définissez un budget de jeu avant de commencer et respectez-le strictement. Ne pariez jamais plus que
                  ce que vous pouvez vous permettre de perdre. Utilisez les outils de limitation de dépôts disponibles
                  sur toutes les plateformes licenciées ANJ.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Reconnaître les Signes d'Alerte</h4>
                <ul className="text-gray-700 space-y-2 list-disc list-inside">
                  <li>Augmentation progressive des mises pour compenser les pertes</li>
                  <li>Temps excessif consacré aux paris sportifs</li>
                  <li>Emprunts d'argent pour parier</li>
                  <li>Négligence des responsabilités personnelles ou professionnelles</li>
                  <li>Dissimulation de l'activité de jeu à vos proches</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Outils de Protection Disponibles</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Limites de Dépôt</h5>
                    <p className="text-sm text-gray-600">Plafonnez vos dépôts quotidiens, hebdomadaires ou mensuels</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Auto-Exclusion</h5>
                    <p className="text-sm text-gray-600">Bloquez votre accès temporairement ou définitivement</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Pause Temporaire</h5>
                    <p className="text-sm text-gray-600">Suspendez votre compte pour une période définie</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Historique Détaillé</h5>
                    <p className="text-sm text-gray-600">Consultez l'historique complet de vos paris et dépenses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 text-white rounded-lg p-8">
            <h3 className="text-xl font-bold mb-6 text-center">Ressources d'Aide</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3">Joueurs Info Service</h4>
                <p className="text-sm text-gray-300 mb-2">Service national d'aide aux joueurs</p>
                <p className="text-lg font-bold text-blue-400">09 74 75 13 13</p>
                <p className="text-xs text-gray-400 mt-1">Appel non surtaxé, 7j/7 de 8h à 2h</p>
              </div>
              <div>
                <h4 className="font-bold mb-3">ANJ - Autorité Nationale des Jeux</h4>
                <p className="text-sm text-gray-300 mb-2">Régulateur officiel des jeux en ligne</p>
                <p className="text-sm text-blue-400">www.anj.fr</p>
                <p className="text-xs text-gray-400 mt-1">Information et protection des joueurs</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 rounded-r-lg p-6">
            <p className="text-red-800 font-bold text-center text-lg">
              Interdit aux mineurs de moins de 18 ans | Jouer comporte des risques | Ne pariez que ce que vous pouvez
              perdre
            </p>
          </div>
        </article>

        <article className="space-y-8">
          <header className="text-center border-b-2 border-gray-900 pb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Questions Fréquentes</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Réponses aux questions les plus courantes sur les paris sportifs en France
            </p>
          </header>

          <div className="space-y-4">
            <details className="bg-gray-50 rounded-lg p-6 group">
              <summary className="font-bold text-gray-900 cursor-pointer text-lg list-none flex items-center justify-between">
                Comment choisir le meilleur site de paris sportifs ?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">
                Le choix dépend de vos priorités : cotes compétitives, variété des sports, qualité du live betting,
                bonus attractifs ou interface intuitive. Vérifiez toujours que le site possède une licence ANJ valide.
                Comparez les cotes sur vos sports favoris et testez le service client avant de vous engager.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg p-6 group">
              <summary className="font-bold text-gray-900 cursor-pointer text-lg list-none flex items-center justify-between">
                Les sites de paris en ligne sont-ils sûrs en France ?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">
                Oui, à condition de choisir un site licencié par l'ANJ (Autorité Nationale des Jeux). Ces plateformes
                sont soumises à des contrôles stricts : cryptage des données, protection des fonds des joueurs, équité
                des jeux et respect du jeu responsable. Évitez absolument les sites non régulés.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg p-6 group">
              <summary className="font-bold text-gray-900 cursor-pointer text-lg list-none flex items-center justify-between">
                Quels sont les moyens de paiement acceptés ?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">
                Les bookmakers français acceptent généralement les cartes bancaires (Visa, Mastercard), les virements
                bancaires, et certains portefeuilles électroniques comme PayPal, Skrill ou Neteller. Les dépôts sont
                instantanés, tandis que les retraits prennent entre 24h et 5 jours selon la méthode choisie.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg p-6 group">
              <summary className="font-bold text-gray-900 cursor-pointer text-lg list-none flex items-center justify-between">
                Comment fonctionnent les bonus de bienvenue ?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">
                Les bonus de bienvenue sont des offres promotionnelles pour les nouveaux inscrits. Ils prennent
                généralement la forme de paris gratuits ou de bonus de dépôt. Attention aux conditions de mise
                (rollover) qui définissent combien de fois vous devez miser le bonus avant de pouvoir retirer vos gains.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg p-6 group">
              <summary className="font-bold text-gray-900 cursor-pointer text-lg list-none flex items-center justify-between">
                Puis-je parier depuis mon smartphone ?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">
                Absolument. Tous les bookmakers recommandés proposent des applications mobiles iOS et Android, ou des
                sites web optimisés pour mobile. Vous pouvez parier, déposer et retirer de l'argent directement depuis
                votre smartphone avec la même sécurité que sur ordinateur.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg p-6 group">
              <summary className="font-bold text-gray-900 cursor-pointer text-lg list-none flex items-center justify-between">
                Quelle est la fiscalité des gains de paris sportifs ?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">
                En France, les gains issus de paris sportifs en ligne sont totalement exonérés d'impôts pour les
                particuliers. Vous n'avez aucune déclaration à faire, que vous gagniez 100€ ou 100 000€. Les taxes sont
                prélevées directement auprès des opérateurs par l'État.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg p-6 group">
              <summary className="font-bold text-gray-900 cursor-pointer text-lg list-none flex items-center justify-between">
                Comment contacter le service client ?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">
                Les meilleurs sites proposent plusieurs canaux : chat en direct (disponible 7j/7), email, téléphone et
                parfois réseaux sociaux. Le chat en direct est généralement le plus rapide pour obtenir une réponse.
                Privilégiez les sites avec un support client en français disponible aux heures de grande écoute.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg p-6 group">
              <summary className="font-bold text-gray-900 cursor-pointer text-lg list-none flex items-center justify-between">
                Qu'est-ce que le cash-out ?<span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">
                Le cash-out permet de clôturer un pari avant la fin de l'événement. Si votre pari est en bonne voie,
                vous pouvez sécuriser un gain partiel. À l'inverse, si la situation se dégrade, vous pouvez limiter vos
                pertes. Le montant proposé varie en temps réel selon l'évolution du match.
              </p>
            </details>
          </div>
        </article>
      </div>
    </section>
  )
}

# CoinCoinsInsolites FrontEnd site web

## Inspirations 
Le design du site a été inspiré de sites comme celui de la marque Apple, un one page avec des animations sobres mais qui permettent de rendre le contenu plus vivant.
Pour les couleurs nous sommes parties sur les couleurs complémentaires dans les nuances d'orange et de violet, le orange symbolisant l'optimisme et l'ouverture d'esprit qui colle bien à l'esprit du concept coincoins insolites. La nuance de bleu donne une aura apaisante et un peu mystérieuse qui invite à la découverte.


## Organisation du travail
Nous avons travaillé en binôme sur ce site. 
Le site est un one page divisé en bloc qui ont chaun un visuel fort, chaque bloc représente un écran.
Les fonctionnalités transverses (internalionalisation, responsive etc...) ont aussi été gérées.
Une fois le développement fini le travail était mis en commun pour être harmonisé visuellement.

### Répartition des blocs
Chaque personne du binôme a eu en charge un bloc, avec de l'entraide en cas de soucis 

#### Sophie : 
* Bloc présentant l'application mobile 
* Footer
* Responsive 
* Internationalisation
* Accès aux CGU
* Lien de téléchargement Google Play (vers Google Maps pour faire semblant)

#### Ségolène : 
* Trouvaille du logo DuckPin !
* Bloc d'accueil
* Bloc galerie de photo
* Responsive sur la partie galerie
* appel à l'api



## Ce qui a pris le plus de temps : 
* L'animation et le calage des éléments sur le visuel d'accueil.
* Le paramétrage React (webpack config, insertion d'images, i18n etc...)
* La mise en place du carrousel en forme de livret (envie de faire penser au carnet de voyage ou à un album photo) qui a nécessité l'utilisation d'un plugin externe pas évident à prendre en main pour des néophytes du framework.

## Ce qui n'a pas pu être fait : 
* Avoir un appel à l'api fonctionnel, il nous aurait permis de récupérer les derniers lieux enregistrés sur la base de données. De cette manière les visiteurs du site verraient des lieux différents lors des visites du site et donnerait une image plus dynamique de l'application, la fonction est créée mais il subsiste un blocage au niveau du header de la requête le serveur ne renvoie donc pas les données, pour le moment le site fonctionne donc sur des données intégrées en dur. Il nous faudrait plus de temps pour pouvoir régler ce problème.
* Un dysfonctionnement sur Chrome n'a pas peu être résolu dans le temps imparti. 

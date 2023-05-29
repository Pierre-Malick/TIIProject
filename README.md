*
Projet réalisé par 
Pierre-Malick Boissiere
Chady Hani
Elif Tepe
Emmanuela Plaisival

Les données utilisées ne sont pas issues d'API mais sont des données statiques. 
Et, à vrai dire, nous n'avons pas eu le temps d'utiliser des données. 

Le concept de notre projet était de créer une interface qui permettrait à des utilisateurs de réaliser 
un suivi de leur état mental et de leurs capacités cognitives réelles en fonction de plusieurs données 
(notamment les données de sommeil telles que les heures auxquelles ils se sont couchés et réveillés sur les derniers jours)
et également donner des préconisations en fonction de ces données. 

Inclus dans notre projet : 
> Une page d'accueil
> Une page de connexion (Pas totalement fonctionnelle, mais elle redirige vers le site après identification)
> Une page d'enregistrement (Pas fonctionnelle, elle ne permet pas de rajouter des utilisateurs, mais le front-end est fonctionnel)
> Une page avec un formulaire pour rentrer des données liées au sommeil (front-end fonctionnel)
> Une page de préconisations qui apparaît après avoir entré ces données liées au sommeil. 
> La navigation entre écrans (en utilisant React Router)
> Bouton de déconnexion (Ne modifie pas le token)

Exclus de notre projet :
> L'utilisation des API et l'historique des données obtenues via API REST, que nous n'avons pas compris... Certains fichiers non utilisés sont juste des témoignages de nos recherches, notamment handleSubmit.jsx, server.js ou RouteGuard.js. Nous voulions utiliser ce dernier pour restreindre les accès à certaines pages mais nous n'avons pas trouvé comment faire. On a tenté d'utiliser useToken.js pour réaliser des access corrects après identification.  
> le Back-end, en général, de notre application n'est pas fonctionnel.
*
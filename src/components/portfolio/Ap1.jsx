import React from 'react'
import './ap.css'
import Dossier_documentaire from '../../assets/ap1/Dossier_documentaire.pdf'
import Cahier_des_charges from '../../assets/ap1/Cahier_des_charges.pdf'
import Contrat_developpement from '../../assets/ap1/Contrat_developpement.pdf'
import Contexte_officiel from '../../assets/ap1/Contexte_officiel.pdf'
import Compte_Rendu from '../../assets/ap1/Compte_rendu_AP1_JeanLauth.pdf'

export const Ap1 = ({ onClose }) => {
    return (
        <div className='ap-container'>
            <h2>Application Web MediatekFormation</h2>
            <p>Atelier professionnel réalisé dans le cadre de ma 2ème année de BTS SIO option SLAM </p>
            <h3>Contexte</h3>
            <p>Travaillant en tant que technicien développeur junior pour l’ESN InfoTech Services 86 et suite à l’obtention du marché pour différentes
                interventions au sein du réseau MediaTek86, ce travail portera sur le développement de l’application Web d’accès aux formations en ligne.</p>
            <h3>Existant</h3>
            <p> Utilisation comme base de travail la partie front office du site été confiée en amont à un autre développeur. Ce dernier a transmis un dossier documentaire
                permettant de visualiser sa démarche et logique de construction applicative. De plus, un dépôt Git est mis à disposition ainsi que la base de données déjà configurée. </p>
            <h3>Demande</h3>
            <ul>
                <li>Nettoyer le code puis ajout d’une fonctionnalité dans la page “Playlists” permettant d’afficher et trier le nombre de formations disponibles par playlist(s).</li>
                <li>Créer un accès sécurisé permettant la gestion des formations, playlists et catégories disponibles au public.</li>
                <li>Mettre en place des tests unitaires, d’intégration, fonctionnels et de compatibilité.</li>
                <li>Créer une documentation technique et utilisateur.</li>
                <li>Déployer le site en ligne, organiser la sauvegarde et la récupération de la base de données, puis mettre en place le déploiement continu de l’application Web.</li>
            </ul>
            <h3>Langages utilisés</h3>
            <ul>
                <li>PHP</li>
                <li>SQL</li>
            </ul>
            <h3>Technologies utilisées</h3>
            <ul>
                <li>Symfony</li>
                <li>Twig</li>
                <li>Boostrap</li>
                <li>Keycloak</li>
                <li>PHPUnit</li>
                <li>Selenium</li>
            </ul>
            <br/>
            <h2>Liens documentaires du projet</h2>
            <br/>
            <a href="https://j-lauth.go.yj.fr/mediatekformation/public/">Site web</a><br />
            <a href='https://jlauth.github.io/bdd' target='_blank' rel="noreferrer">Lien vers la BDD</a><br />
            <a href='https://jlauth.github.io/DocTechniqueAP1/index.html' target='_blank' rel="noreferrer">Documentation technique</a><br />
            <a href={Contexte_officiel} download>Contexte officiel</a><br />
            <a href={Contrat_developpement} download>Contrat de développement</a><br />
            <a href={Cahier_des_charges} download>Cahier des charges</a><br />
            <a href={Dossier_documentaire} download>Dossier documentaire</a><br />
            <a href={Compte_Rendu} download>Compte rendu</a>
            <button className='close-button' onClick={onClose}>Fermer</button>
        </div>
    )
}


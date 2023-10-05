import React, { useRef } from 'react'
import './ap.css'
import Dossier_documentaire from '../../assets/ap3/Dossier_documentaire_AP3.pdf'
import Compte_rendu from '../../assets/ap3/Compte_rendu_Atelier3_JeanLauth.pdf'
import Cahier_des_charges from '../../assets/ap3/Cahier_des_charges_AP3.pdf'
import Contexte_officiel from '../../assets/ap3/Contexte_officiel.pdf'
import Contrat_developpement from '../../assets/ap3/Contrat_developpement.pdf'

export const Ap3 = ({ onClose }) => {
    const contentRef = useRef(null) 
    const handleScrollToTop = () => {
        if (contentRef.current) {
            const rect = contentRef.current.getBoundingClientRect()
            const scrollY = window.scrollY + rect.top - 1050
            window.scrollTo({ top: scrollY, behavior: 'smooth' })
        }
    }
    return (
        <div className='ap-container' ref={contentRef}>
            <h2>Application de bureau MediatekDocuments</h2>
            <p>Atelier professionnel réalisé dans le cadre de ma 2ème année de BTS SIO option SLAM</p>
            <h3>Contexte</h3>
            <p>Travaillant en tant que technicien développeur junior pour l’ESN InfoTech Services 86, ce travail portera sur le développement de l’application bureau pour les médiathèques du réseau “Mediatek86” afin de permettre la gestion des documents (livres, DVD et revues) de celles-ci. Les personnels cibles de l’application sont les employés des services “administratifs” et “prêts”. </p>
            <h3>Existant</h3>
            <p>Un premier développeur s’est occupé de la construction de la base de données et du développement de certaines fonctionnalités de l’application. C’est une application de bureau, prévue d’être installée sur plusieurs postes de la médiathèque et qui accèdent à la même base de données. L’application exploite une API REST afin d’accéder à la BDD MySQL, codée partiellement également. </p>
            <h3>Demande</h3>
            <ul>
                <li>L'application doit permettre d'ajout, modifier ou supprimer des documents, sous certaines conditions. Les documents concernés sont les livres, les DVD et les revues.</li>
                <li> Il doit être possible de commander un ou plusieurs exemplaires d'un livre, d'un DVD ou d'une revue.</li>
                <li>L'application doit également donner la possibilité de gérer l'état des documents physiques, donc des exemplaires.</li>
                <li>Tester et produire une documentation technique et utilisateur. Déployer et gérer les sauvegardes des données.</li>
            </ul>
            <h3>Langages utilisés</h3>
            <ul>
                <li>Langage de développement pour l'application bureau : C#</li>
                <li>Langage de développement pour l'API REST : PHP</li>
                <li>Langage d’exploitation du SGBD : SQL</li>
            </ul>
            <h3>Technologies utilisées</h3>
            <ul>
                <li>Git & GitHub</li>
                <li>SpecFlow</li>
                <li>Postman</li>
            </ul>
            <br />
            <h2>Liens documentaires du projet</h2>
            <br />
            <a href="https://github.com/Jlauth/rest_mediatekdocs" target='_blank' rel="noreferrer">Dépot distant API REST</a><br />
            <a href="https://github.com/Jlauth/MediaTekDocuments" target='_blank' rel="noreferrer">Dépot distant application de bureau</a><br />
            <a href="https://jlauth.github.io/bdd" target='_blank' rel="noreferrer">Lien vers la BDD</a>
            <a href="https://jlauth.github.io/DocTechniqueAP3/App/html/6ffab7d9-2b08-0510-f0eb-203183a8d528.htm" target='_blank' rel="noreferrer">Documentation technique application de bureau</a>
            <a href="https://jlauth.github.io/DocTechniqueAP3/API_REST/index.html" target='_blank' rel="noreferrer">Documentation technique API REST</a>
            <a href={Contexte_officiel} download>Contexte officiel</a><br />
            <a href={Contrat_developpement} download>Contrat de développement</a><br />
            <a href={Cahier_des_charges} download>Cahier des charges</a><br />
            <a href={Dossier_documentaire} download>Dossier documentaire</a><br />
            <a href={Compte_rendu} download>Compte rendu</a>
            <button className='close-button' onClick={() => { onClose(); handleScrollToTop(); }}>Fermer</button>        </div>
    )
}
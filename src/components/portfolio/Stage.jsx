import React from 'react'
import './ap.css'

export const Stage = ({ onClose }) => {
    return (
        <div className='ap-container'>
            <h2>Générateur d'attestations fiscales</h2>
            <p>Stages réalisés dans le cadre de mon cursus en BTS SIO option SLAM</p>
            <h3>Contexte</h3>
            <p>Dans le cadre de mon deuxième stage chez Arkadia PC en tant que développeur applicatif, mon objectif est d'améliorer l'application de génération des attestations fiscales de l'entreprise. </p>
            <h3>Existant</h3>
            <p>Le modèle du résultat attendu par le client (maître de stage).</p>
            <h3>Demande</h3>
            <ul>
                <li>L'objectif principal est d'améliorer l'application existante en permettant une gestion plus efficace des informations de l'entreprise grâce à l'utilisation d'une base de données. Cette base de données permettra de stocker toutes les informations nécessaires à la génération des attestations fiscales de l'entreprise. </li>
                <li>Nous prévoyons également de modifier l'application pour qu'elle puisse enregistrer les attestations fiscales au format .pdf plutôt qu'au format .doc. Cette modification permettra une meilleure compatibilité avec les différentes plateformes et appareils utilisés par le client.</li>
            </ul>
            <h3>Langages utilisés</h3>
            <ul>
                <li>Langage de développement pour l'application bureau : Java</li>
                <li>Langage d’exploitation du SGBD : SQL</li>
            </ul>
            <h3>Technologies utilisées</h3>
            <ul>
                <li>Git & GitHub</li>
                <li>SQLite JDBC</li>
                <li>Swing</li>
                <li>PDFbox</li>
            </ul>
            <br/>
            <h2>Liens documentaires du projet</h2>
            <br/>
            <a href="https://github.com/Jlauth/AttestationFiscalev3" target='_blank' rel="noreferrer">Dépot distant de l'application de bureau</a><br />
            <a href="https://jlauth.github.io/DocTechniqueStage2/index.html" target='_blank' rel="noreferrer">Documentation technique API REST</a>
            <button className='close-button' onClick={onClose}>Fermer</button>
        </div>
    )
}
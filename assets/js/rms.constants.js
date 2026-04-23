// Enhanced Risk Management System - Shared Constants

const RISK_PROBABILITY_INFO = {
    1: {
        label: 'Unlikely',
        text: 'Event has not occurred in the past 5 years. Event not expected to occur in the next 5 years.'
    },
    2: {
        label: 'Moderately likely',
        text: 'Event that has occurred once in the past 5 years. Event that may occur once in the next 5 years.'
    },
    3: {
        label: 'Likely',
        text: 'Event that has occurred once in the past year. Event that may occur once in the coming year.'
    },
    4: {
        label: 'Very likely',
        text: 'Event that occurred several times in the past year. Event expected to occur once or more times in the coming year.'
    }
};

const RISK_IMPACT_INFO = {
    1: {
        label: 'Low',
        text: "<p><strong>Financial (base)</strong></p><ul><li>&lt; 300K€</li></ul><p><strong>Legal</strong></p><ul><li>internal disciplinary action against an employee</li></ul><p><strong>Reputational</strong></p><ul><li>no impact, internal or local external (e.g., partners)</li><li>disruption limited to a few days</li></ul><p><strong>Operational</strong></p><ul><li>little or no disruption</li><li>slowdown in operations</li></ul>"
    },
    2: {
        label: 'Moderate',
        text: "<p><strong>Financial (base)</strong></p><ul><li>[300K€ ; 3M€[</li></ul><p><strong>Legal</strong></p><ul><li>legal or administrative proceedings involving an individual employee</li></ul><p><strong>Reputational</strong></p><ul><li>regional external impact</li><li>disruption limited to a few weeks</li></ul><p><strong>Operational</strong></p><ul><li>minor disruptions</li><li>temporary loss of business or contracts</li></ul>"
    },
    3: {
        label: 'High',
        text: "<p><strong>Financial (base)</strong></p><ul><li>[3M€ ; 30M€[</li></ul><p><strong>Legal</strong></p><ul><li>sanctions at the affiliate level; Judicial Public Interest Agreement (CJIP)</li></ul><p><strong>Reputational</strong></p><ul><li>national external impact (e.g., Department of Health)</li><li>national media crisis</li><li>impact lasting several months</li></ul><p><strong>Operational</strong></p><ul><li>significant disruptions</li><li>permanent loss of business or contracts</li></ul>"
    },
    4: {
        label: 'Critical',
        text: "<p><strong>Financial (base)</strong></p><ul><li>≥ 30M€</li></ul><p><strong>Legal</strong></p><ul><li>group-wide sanctions; criminal conviction</li></ul><p><strong>Reputational</strong></p><ul><li>international external impact (e.g., EMA, FDA, etc.)</li><li>international media crisis</li><li>long-term damage lasting several years</li></ul><p><strong>Operational</strong></p><ul><li>cessation of operations</li></ul>"
    }
};

const RISK_STATE_CONFIG = {
    brut: {
        label: 'Risque Brut aggravé',
        probInput: 'probBrut',
        impactInput: 'impactBrut',
        scoreElement: 'scoreBrut',
        coordElement: 'coordBrut',
        pointClass: 'brut',
        symbol: 'B',
        matrixId: 'riskMatrixEditBrut',
        gridId: 'riskMatrixEditGridBrut',
        descriptionContainer: 'matrixDescriptionBrut'
    },
    net: {
        label: 'Risque Net',
        probInput: 'probNet',
        impactInput: 'impactNet',
        scoreElement: 'scoreNet',
        coordElement: 'coordNet',
        pointClass: 'net',
        symbol: 'N',
        matrixId: null,
        gridId: null,
        descriptionContainer: 'matrixDescriptionNet',
        sliderId: 'netMitigationSlider'
    }
};

const MITIGATION_EFFECTIVENESS_DESCRIPTIONS = Object.freeze({
    inefficace: `
        <p><strong>Gouvernance</strong></p>
        <ul>
<li>Aucun engagement du management</li>
<li>Aucun principe d'&eacute;thique et de conformit&eacute; communiqu&eacute; ou non appliqu&eacute;</li>
<li>Pas de prise en charge de la fonction Ethique et Conformit&eacute;</li>
<li>Aucun reporting / suivi des sujets en mati&egrave;re d'&eacute;thique et de conformit&eacute;</li>
        </ul>
             <p><strong>Proc&eacute;dures et contr&ocirc;les</strong></p>
             <ul>
             <li>Absence de proc&eacute;dure / processus</li>
<li>Processus inefficaces/non pertinents, non appliqu&eacute;s ou non diffus&eacute;s</li>
<li>Absence de contr&ocirc;le</li>
<li>Contr&ocirc;les inefficaces/non pertinent ou non appliqu&eacute;s</li>
</ul>
<p><strong>Formation</strong></p>
<ul>
<li>Absence de formation ou de sensibilisation</li>
<li>Formation inefficace/non pertinente</li>
<li>Taux de formation tr&egrave;s faible (&le; 20%)</li>
</ul>
    `,
    insuffisant: `
        <p><strong>Gouvernance</strong></p>
           <ul>
<li>Engagement informel du management</li>
<li>Peu de communications / communications informelles ou partielles sur le respect des principes d'&eacute;thique et de conformit&eacute;</li>
<li>Pas d'&eacute;quipe officiellement en charge de la fonction Ethique et Conformit&eacute;</li>
<li>Suivi informel des sujets d'&eacute;thique et de conformit&eacute; mais aucun reporting au management</li>
</ul>
 <p><strong>Proc&eacute;dures et contr&ocirc;les</strong></p>
 <ul>
<li>Processus informels (pas de proc&eacute;dures formalis&eacute;es), diffus&eacute;s partiellement &agrave; l'oral, et partiellement appliqu&eacute;s</li>
<li>Contr&ocirc;les ponctuels non formalis&eacute;s et partiellement appliqu&eacute;s</li>
</ul>
<p><strong>Formation</strong></p>
<ul>
<li>Formation ou sensibilisation informelle (orale), ponctuelle et/ou partielle des collaborateurs et des nouveaux arrivants</li>
<li>Taux de formation peu &eacute;lev&eacute; (entre 20% et 50%)</li>
</ul>
    `,
    ameliorable: `
        <p><strong>Gouvernance</strong></p>
      <ul>
<li>Engagement formel / passif du management (r&eacute;actif en cas de sollicitation de l'&eacute;quipe en charge de la fonction Ethique et Conformit&eacute;, sujet &agrave; l'ordre du jour sur sollicitation, etc.)<br /> - Communications irr&eacute;guli&egrave;res sur le respect des principes d'&eacute;thique et de conformit&eacute; (pas de plan de communication particulier)</li>
<li>Equipe en charge de la fonction Ethique et Conformit&eacute; en plus d'autres fonctions (temps d&eacute;di&eacute; pas toujours suffisant) / Pas de Comit&eacute; Ethique et Conformit&eacute;</li>
<li>Reporting irr&eacute;gulier au management sur le suivi des actions</li>
</ul>
 <p><strong>Proc&eacute;dures et contr&ocirc;les</strong></p>
 <ul>
<li>Proc&eacute;dures partiellement formalis&eacute;es, diffus&eacute;es, appliqu&eacute;es, contr&ocirc;l&eacute;es et/ou audit&eacute;es</li>
<li>Mises &agrave; jour irr&eacute;guli&egrave;res des proc&eacute;dures</li>
<li>Contr&ocirc;les partiellement formalis&eacute;s ou document&eacute;s, sans actions correctives syst&eacute;matiques, non r&eacute;guli&egrave;rement revus par le contr&ocirc;le interne ni r&eacute;guli&egrave;rement audit&eacute;s</li>
</ul>
<p><strong>Formation</strong></p>
<ul>
<li>Formation standard &agrave; l'ensemble des collaborateurs (pas de ciblage particulier des populations les plus concern&eacute;es)</li>
<li>Pas de plan de formation &eacute;tabli ou non mis &agrave; jour</li>
<li>Taux de formation perfectible (entre 50% et 90%)</li>
<li>Absence de relances syst&eacute;matiques des collaborateurs</li>
</ul>
    `,
    efficace: `
        <p><strong>Gouvernance</strong></p>
     <ul>
<li>Engagement actif du management (proactivit&eacute; dans la d&eacute;finition des principes d'&eacute;thique et de conformit&eacute;, implication forte dans le suivi et les d&eacute;cisions, sujet r&eacute;current &agrave; l'ordre du jour des comit&eacute;s de direction, etc.)</li>
<li>Communications r&eacute;guli&egrave;res sur le respect des principes d'&eacute;thique et de conformit&eacute; (plan de communication d&eacute;fini)</li>
<li>Equipe en charge de la fonction Ethique et Conformit&eacute; (temps d&eacute;di&eacute; suffisant) et Comit&eacute; Ethique et Conformit&eacute; en place et actif</li>
<li>Reporting r&eacute;gulier au management sur le suivi des actions</li>
</ul>
<p><strong>Proc&eacute;dures et contr&ocirc;les</strong></p>
<ul>
<li>Proc&eacute;dures syst&eacute;matiquement formalis&eacute;es, diffus&eacute;es, appliqu&eacute;es, contr&ocirc;l&eacute;es et audit&eacute;es</li>
<li>Contr&ocirc;les syst&eacute;matiques, formalis&eacute;s et document&eacute;s, faisant l'objet d'actions correctives, de revues de contr&ocirc;le interne et d'audits</li>
</ul>
<p><strong>Formation</strong></p>
<ul>
<li>Formations r&eacute;guli&egrave;res d&eacute;di&eacute;es selon les populations cibl&eacute;es, privil&eacute;giant le pr&eacute;sentiel pour les populations les plus expos&eacute;es</li>
<li>Plan de formation &eacute;tabli selon les populations cibl&eacute;es, int&eacute;grant les nouveaux arrivants et d&eacute;finissant les fr&eacute;quences de formation</li>
<li>Taux de formation &eacute;lev&eacute; (&ge; 90%)</li>
</ul>
    `
});

window.RISK_PROBABILITY_INFO = RISK_PROBABILITY_INFO;
window.RISK_IMPACT_INFO = RISK_IMPACT_INFO;
window.RISK_STATE_CONFIG = RISK_STATE_CONFIG;
window.MITIGATION_EFFECTIVENESS_DESCRIPTIONS = MITIGATION_EFFECTIVENESS_DESCRIPTIONS;

# CorruptMap

## Interviews

Les comptes rendus sont désormais stockés dans des fichiers JavaScript séparés dans le dossier `interviews/` (`interview1.js`, `interview2.js`, etc.). Chaque fichier alimente le registre global `window.RMS_INTERVIEW_FILES`, ce qui permet un chargement automatique par injection de scripts sans dépendre d'un `fetch()` JSON.

Le chargement automatique s'appuie d'abord sur l'index `interviews/interviews.index.js`, qui liste les fichiers JS à tenter de charger. Si l'index est absent ou vide, l'application conserve un comportement de recherche séquentielle des fichiers `interviewX.js` et s'arrête après plusieurs fichiers manquants consécutifs.

Le sélecteur manuel de dossier accepte les fichiers `interviewX.js` et conserve une compatibilité de lecture avec les anciens fichiers `interviewX.json`.

Aucun compte rendu d’entretien n’est livré par défaut dans ce dépôt ; `interviews/interviews.index.js` reste vide tant que de nouveaux fichiers ne sont pas ajoutés.

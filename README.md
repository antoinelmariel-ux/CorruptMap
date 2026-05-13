# CorruptMap

## Interviews

Les comptes rendus restent stockés dans des fichiers JSON séparés dans le dossier `interviews/` (`interview1.json`, `interview2.json`, etc.).

Le chargement automatique s'appuie d'abord sur le manifeste `interviews/interviews.json`, qui liste les noms de fichiers à tenter de charger. Ce manifeste peut contenir des fichiers qui n'existent pas encore (par exemple `interview100.json`) : ils seront simplement ignorés au chargement. Si le manifeste est absent ou vide, l'application conserve son ancien comportement de recherche séquentielle des fichiers `interviewX.json`.

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello Docker + CI/CD!');
});

// On exporte l'app pour les tests
module.exports = app;

// On démarre le serveur uniquement si le fichier est exécuté directement
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

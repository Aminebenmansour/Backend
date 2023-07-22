const mongoose = require("mongoose");

// Utilisez l'adresse IP de l'hôte hôte pour accéder à MongoDB
const mongoUrl = "mongodb://host.docker.internal:27017/clevory";

mongoose.connect(mongoUrl)
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Votre code supplémentaire ici...

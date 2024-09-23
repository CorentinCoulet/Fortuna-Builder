# Utiliser une image Node.js officielle
FROM node:18

# Installez le client PostgreSQL
RUN apt-get update && apt-get install -y postgresql-client

# Créer le répertoire de l'application
WORKDIR /usr/src/app
VOLUME /usr/src/app

# Exposer le port utilisé par l'application
EXPOSE 3000

# Démarrer l'application et exécuter les migrations Prisma
CMD ["sh", "-c", "npx prisma generate && npm run start"]
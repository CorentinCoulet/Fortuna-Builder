# Utiliser une image Node.js officielle
FROM node:18

# Installez le client PostgreSQL
RUN apt-get update && apt-get install -y postgresql-client

# Créer le répertoire de l'application
WORKDIR /usr/src/app

# Copier les fichiers de package et installer les dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Construire l'application
RUN npm run build

# Exécuter Prisma Generate pour générer le client Prisma
RUN npx prisma generate

# Appliquer les migrations Prisma
# RUN npx prisma migrate deploy

# Exposer le port utilisé par l'application
EXPOSE 3000

# Démarrer l'application et exécuter les migrations Prisma
CMD ["npm", "run", "start"]

#!/bin/sh
# docker-entrypoint.sh

# Exit immediately if a command exits with a non-zero status
set -e

# Install dependencies if node_modules does not exist
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

# Run Prisma migrations and generate client if needed
if [ "$NODE_ENV" = "production" ]; then
  echo "Running Prisma migrations in production mode..."
  npx prisma migrate deploy
else
  echo "Running Prisma migrations in development mode..."
  npx prisma migrate dev --name "init"
fi

# Start the application in development mode
if [ "$NODE_ENV" = "production" ]; then
  echo "Building the application..."
  npm run build
  echo "Starting the application in production mode..."
  npm run start:prod
else
  echo "Starting the application in development mode..."
  npm run start:dev
fi
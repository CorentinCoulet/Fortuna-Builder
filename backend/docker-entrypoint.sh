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
echo "Running Prisma generate..."
npx prisma generate

# Optionally, run migrations
echo "Running Prisma migrations..."
npx prisma migrate dev --name "init"

# Start the application in development mode
echo "Starting the application..."
npm run start:dev
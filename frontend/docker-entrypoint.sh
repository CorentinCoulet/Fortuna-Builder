#!/bin/sh
# docker-entrypoint.sh

# Exit immediately if a command exits with a non-zero status
set -e

# Install dependencies if node_modules does not exist
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

# Start the application in development mode
echo "Starting the application..."
npm run dev

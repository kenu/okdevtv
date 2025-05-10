#!/bin/bash
set -e

# Print execution commands
set -x

# Change to the project directory
cd /home/ubuntu/okdevtv

# Pull the latest changes from the repository
git pull origin main

# Pull the latest Docker images
docker compose pull

# Restart the services
docker compose up -d --force-recreate

# Clean up unused resources
docker system prune -af --volumes

# Wait for the application to become healthy
echo "Waiting for application to become healthy..."
timeout 30s bash -c 'until $(curl --output /dev/null --silent --fail http://localhost:3000/health); do printf "."; sleep 2; done'

echo "Deployment completed successfully!"
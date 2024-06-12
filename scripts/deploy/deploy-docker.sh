#!/bin/bash

# scripts/deploy/deploy-docker.sh

# Build and run the backend API server
docker build -t scroll-backend-api ../backend
docker run -d -p 3000:3000 --name scroll-backend-api scroll-backend-api

# Build and run the frontend application
docker build -t scroll-frontend ../frontend
docker run -d -p 8080:80 --name scroll-frontend scroll-frontend

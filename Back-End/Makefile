# Makefile for Dockerizing the Node.js application

# Build the Docker image for development
build:
	@docker build -t node_app_dev .

install:
	@docker exec -it node_app_dev sh -c "rm -rf /app/node_modules"
	@docker exec -it node_app_dev sh -c "npm install"

# Run the development server
server:
	@docker run -it -p 3001:3001 -v $(PWD):/app -w /app node_app_dev npm run dev

# Build the Docker image for production
build-production:
	@docker build -t node_app_prod -f Dockerfile.production .

# Start the production server
start:
	@docker run -d -p 3001:3001 node_app_prod

# Clean up (remove) the built Docker images and containers
clean:
	@docker stop $$(docker ps -a -q) || true
	@docker rm $$(docker ps -a -q) || true
	@docker rmi node_app_dev node_app_prod || true

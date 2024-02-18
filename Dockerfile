# Use the official Node.js image as a base image
FROM node:14-alpine

# Install serve globally
RUN npm install -g serve

# Set the working directory in the container
WORKDIR /app

# Copy the build directory from the previous stage
COPY build/ ./build

# Expose the port serve runs on
EXPOSE 5000

# Command to run the React application
CMD ["serve", "-s", "build"]
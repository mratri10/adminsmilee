# Use the official Node.js image as a base image
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the build directory to the working directory
COPY build/ ./build/

# Expose port 3030
EXPOSE 3030

# Command to run the React application
CMD ["npm", "start"]
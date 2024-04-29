# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /react

# Copy package.json and package-lock.json (or yarn.lock) for better caching
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Expose port 5173 to the outside world
EXPOSE 5173

# Command to start the app in development mode
CMD ["npm", "run", "dev"]

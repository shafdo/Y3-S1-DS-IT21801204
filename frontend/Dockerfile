# Use the official Node.js node:18.13.0-slim image
FROM node:18.13.0-slim

# Set the working directory inside the container
WORKDIR /app

# Copy package.json to the working directory
COPY package.json ./

# Install pnpm globally
# RUN npm install -g pnpm@latest

# Install dependencies using pnpm
RUN npm install

# Copy the rest of the files to the working directory
COPY . .

# Expose the port on which the application will run
EXPOSE 4000

# Start application
CMD ["npm", "run", "dev"]
# Use the official Node.js node:18.13.0-slim image
FROM node:18.13.0-slim

# Set the working directory inside the container
WORKDIR /app

# Copy package.json to the working directory
COPY package.json ./

# Install dependencies using pnpm
RUN npm install

# Copy the rest of the files to the working directory
COPY . .

# Start application
CMD ["npm", "run", "start"]

# Expose the port on which the application will run
EXPOSE 8070
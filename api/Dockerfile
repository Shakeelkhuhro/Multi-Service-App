# Stage 1: Builder
FROM node:20-alpine AS base
WORKDIR /app

# Install only prod deps first to cache better
COPY package*.json ./
RUN npm ci --only=production

# Stage 2: Final image
FROM node:20-alpine
WORKDIR /app

# Copy only production-ready files
COPY --from=base /app /app
COPY . .

EXPOSE 5000
CMD ["node", "index.js"]

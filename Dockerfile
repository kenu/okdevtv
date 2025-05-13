# Stage 1: Build stage
FROM node:22-alpine AS build

# Set working directory
WORKDIR /usr/src/app

# Copy package files
COPY package.json ./

# Install pnpm and dependencies
RUN npm i -g pnpm && \
    pnpm i --prod --frozen-lockfile

# Stage 2: Production stage
FROM node:22-alpine

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodeuser -u 1001 -G nodejs

# Set working directory
WORKDIR /usr/src/app

# Copy from build stage
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY . .

# Set ownership to non-root user
RUN chown -R nodeuser:nodejs /usr/src/app

# Use non-root user
USER nodeuser

# Healthcheck
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
  CMD node -e "try { require('http').get('http://localhost:3000/health', (r) => r.statusCode === 200 ? process.exit(0) : process.exit(1)); } catch (e) { process.exit(1); }"

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Expose port
EXPOSE 3000

# Start the app
CMD ["node", "bin/www"]
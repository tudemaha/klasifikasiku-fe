# Step 1: Use the official Node.js image as the base image
FROM node:18-alpine AS builder

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json files to the container
COPY package.json package-lock.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code to the container
COPY . .

# Step 6: Build the Next.js application
RUN npm run build

# Step 7: Use a lightweight image to serve the application
FROM node:18-alpine AS runner

# Step 8: Set the working directory in the container
WORKDIR /app

# Step 9: Copy the build output and node_modules from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.env ./.env
COPY --from=builder /app/public ./public

# Step 10: Set environment variables for Next.js
ENV NODE_ENV=production
ENV PORT=3000
ENV NEXT_PUBLIC_BASE_URL=https://klasifikasiku-be-823582095149.us-west1.run.app

# Step 11: Expose the application port
EXPOSE 3000

# Step 12: Start the Next.js application
CMD ["npm", "start"]

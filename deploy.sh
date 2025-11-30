#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo "${GREEN}🚀 Starting deployment...${NC}"

# Fix Node.js OpenSSL issue (if needed)
export NODE_OPTIONS=--openssl-legacy-provider

# Build the React app
echo "${GREEN}📦 Building React app...${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo "${RED}❌ Build failed!${NC}"
    exit 1
fi

# Copy build files to root
echo "${GREEN}📋 Copying build files to root...${NC}"
cp -r build/* ./

# Add all changes
echo "${GREEN}📝 Staging changes...${NC}"
git add -A

# Commit
echo "${GREEN}💾 Creating commit...${NC}"
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"

if [ $? -ne 0 ]; then
    echo "${RED}❌ No changes to commit${NC}"
    exit 1
fi

# Push to master
echo "${GREEN}🔗 Pushing to GitHub...${NC}"
git push origin master

if [ $? -eq 0 ]; then
    echo "${GREEN}✅ Deployment successful!${NC}"
    echo "${GREEN}🌐 Your site will update in ~30 seconds${NC}"
    echo "${GREEN}📍 Visit: https://mallikarjuna-sharma.github.io/${NC}"
else
    echo "${RED}❌ Push failed!${NC}"
    exit 1
fi

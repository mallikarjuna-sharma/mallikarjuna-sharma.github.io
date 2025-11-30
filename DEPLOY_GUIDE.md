# Deployment Guide

## Quick Deploy (One Command)

```bash
./deploy.sh
```

This script will:
1. 🔧 Fix Node.js OpenSSL issues (if any)
2. 📦 Build your React app
3. 📋 Copy build files to repository root
4. 📝 Stage all changes
5. 💾 Commit with timestamp
6. 🔗 Push to master branch
7. ✅ Notify you when complete

## What It Does

- Builds the optimized production bundle
- Copies all files from `build/` to root directory
- Commits everything with a timestamp
- Pushes to origin/master
- Your site updates automatically in ~30 seconds

## Manual Steps (If You Prefer)

```bash
# Build
npm run build

# Copy to root
cp -r build/* ./

# Commit and push
git add -A
git commit -m "Deploy: Your message here"
git push origin master
```

## Troubleshooting

### Build fails with OpenSSL error?
The script handles this automatically. If manual build needed:
```bash
export NODE_OPTIONS=--openssl-legacy-provider
npm run build
```

### Nothing to commit?
You likely haven't made changes to `src/` folder.
Make changes, then run deploy script again.

### Push rejected?
Make sure you're up to date:
```bash
git pull origin master
./deploy.sh
```

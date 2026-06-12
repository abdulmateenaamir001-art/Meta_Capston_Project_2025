# Vercel Deployment Guide

## Prerequisites
- Node.js 16+ installed
- Vercel CLI (optional but recommended)
- GitHub account with this repository

## Local Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Copy environment variables:**
   ```bash
   cp .env.example .env.local
   ```

3. **Update `.env.local` with your local values:**
   - Update `VITE_API_BASE_URL` to your local backend URL
   - Set other variables as needed

4. **Run development server:**
   ```bash
   npm run dev
   ```

## Deploy to Vercel

### Option 1: Via Vercel Website (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "Add New..." > "Project"
3. Import your GitHub repository
4. Vercel will auto-detect it's a Vite project
5. Go to **Settings** > **Environment Variables**
6. Add these variables:
   - `VITE_API_BASE_URL` - your production API URL
   - `VITE_BOOKING_API_ENDPOINT` - your production booking API endpoint
   - `VITE_RESTAURANT_NAME` - Little Lemon (or your restaurant name)
   - `VITE_RESTAURANT_EMAIL` - your restaurant email
   - `VITE_ENABLE_BOOKINGS` - true/false
   - `VITE_ENABLE_ONLINE_ORDERING` - true/false
   - `VITE_ENVIRONMENT` - production
7. Click Deploy

### Option 2: Via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **First deployment:**
   - Choose "Y" to link to existing project (or create new)
   - Follow the prompts to connect your GitHub repo
   - Vercel will auto-detect settings

4. **Add environment variables:**
   ```bash
   vercel env add VITE_API_BASE_URL
   vercel env add VITE_BOOKING_API_ENDPOINT
   # ... add other variables
   ```

5. **Redeploy with env vars:**
   ```bash
   vercel --prod
   ```

## Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | Your backend API base URL | `https://api.littlelemon.com` |
| `VITE_BOOKING_API_ENDPOINT` | Booking API endpoint | `https://api.littlelemon.com/bookings` |
| `VITE_RESTAURANT_NAME` | Restaurant name | `Little Lemon` |
| `VITE_RESTAURANT_EMAIL` | Contact email | `contact@littlelemon.com` |
| `VITE_ENABLE_BOOKINGS` | Enable booking feature | `true` |
| `VITE_ENABLE_ONLINE_ORDERING` | Enable online ordering | `false` |
| `VITE_ENVIRONMENT` | Environment type | `production` |

## Build & Preview

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Troubleshooting

**Build fails:**
- Check that `vite.config.ts` is correct
- Ensure all environment variables are set in Vercel
- Check build logs in Vercel dashboard

**Environment variables not loading:**
- Variables must start with `VITE_` prefix to be accessible in client-side code
- Rebuild after adding/updating env variables in Vercel
- Check that variables are set for the correct environment (Preview/Production)

**API calls failing:**
- Verify `VITE_API_BASE_URL` is correct and accessible from browser
- Check CORS settings on your backend
- Verify your backend is deployed and running

## Useful Vercel Links
- [Vercel Dashboard](https://vercel.com/dashboard)
- [Vercel CLI Docs](https://vercel.com/docs/cli)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)

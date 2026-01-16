# Deployment Guide for Render.com

This guide will help you deploy your Interior Decoration Website to Render.com.

## Prerequisites

1. A GitHub account
2. Your code pushed to GitHub
3. A Render.com account (free tier available)
4. MongoDB Atlas account (for database) OR use Render's MongoDB service

## Step 1: Push Code to GitHub

Make sure your code is pushed to GitHub (see previous instructions).

## Step 2: Set Up MongoDB

### Option A: MongoDB Atlas (Recommended - Free)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user
4. Whitelist IP addresses (or use `0.0.0.0/0` for all IPs)
5. Get your connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/interior-design`)

### Option B: Render MongoDB (if using render.yaml)

Uncomment the MongoDB service in `render.yaml` and Render will create it for you.

## Step 3: Deploy Backend

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: `interior-design-backend`
   - **Region**: Oregon (or closest to you)
   - **Branch**: `main`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Add Environment Variables:
   ```
   NODE_ENV=production
   PORT=10000
   MONGODB_URI=your-mongodb-connection-string
   JWT_SECRET=your-secret-key-here
   JWT_EXPIRE=7d
   FRONTEND_ORIGIN=https://your-frontend-url.onrender.com
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ADMIN_EMAIL=admin@example.com
   ```
6. Click "Create Web Service"
7. Wait for deployment (takes 5-10 minutes)
8. Copy your backend URL (e.g., `https://interior-design-backend.onrender.com`)

## Step 4: Deploy Frontend

1. In Render Dashboard, click "New +" → "Static Site"
2. Connect your GitHub repository
3. Configure:
   - **Name**: `interior-design-frontend`
   - **Branch**: `main`
   - **Root Directory**: `frontend`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
4. Add Environment Variable:
   ```
   VITE_API_URL=https://your-backend-url.onrender.com/api
   ```
   (Replace with your actual backend URL from Step 3)
5. Click "Create Static Site"
6. Wait for deployment
7. Copy your frontend URL

## Step 5: Update Backend CORS

1. Go back to your backend service in Render
2. Update the `FRONTEND_ORIGIN` environment variable with your frontend URL
3. Save and redeploy

## Step 6: Test Your Deployment

1. Visit your frontend URL
2. Try registering a new user
3. Test login functionality
4. Check if API calls are working

## Using render.yaml (Alternative Method)

If you prefer using the `render.yaml` file:

1. Push `render.yaml` to your GitHub repository
2. In Render Dashboard, click "New +" → "Blueprint"
3. Connect your GitHub repository
4. Render will automatically detect `render.yaml` and create all services
5. You'll still need to set environment variables in the Render dashboard

## Environment Variables Reference

### Backend Required Variables:
- `NODE_ENV`: `production`
- `PORT`: `10000` (Render's default)
- `MONGODB_URI`: Your MongoDB connection string
- `JWT_SECRET`: A random secret string
- `JWT_EXPIRE`: `7d`
- `FRONTEND_ORIGIN`: Your frontend URL
- `EMAIL_USER`: (Optional) Your email
- `EMAIL_PASS`: (Optional) Email app password
- `ADMIN_EMAIL`: (Optional) Admin email

### Frontend Required Variables:
- `VITE_API_URL`: Your backend API URL (e.g., `https://backend.onrender.com/api`)

## Troubleshooting

### Backend Issues:
- **Build fails**: Check Node.js version (Render uses Node 18 by default)
- **Database connection fails**: Verify MongoDB URI and IP whitelist
- **CORS errors**: Check `FRONTEND_ORIGIN` matches your frontend URL exactly

### Frontend Issues:
- **API calls fail**: Verify `VITE_API_URL` is correct
- **Build fails**: Check if all dependencies are in `package.json`
- **404 errors**: Ensure `Publish Directory` is set to `dist`

### Common Fixes:
1. **Redeploy**: Sometimes a simple redeploy fixes issues
2. **Check Logs**: Render provides detailed logs for debugging
3. **Environment Variables**: Double-check all variables are set correctly
4. **Database**: Ensure MongoDB is accessible from Render's IPs

## Free Tier Limitations

- Services spin down after 15 minutes of inactivity
- First request after spin-down takes ~30 seconds
- 750 hours/month free (enough for always-on for one service)
- Consider upgrading for production use

## Next Steps

1. Set up a custom domain (optional)
2. Enable auto-deploy on git push
3. Set up monitoring and alerts
4. Configure SSL (automatic on Render)

## Support

For issues:
- Check Render logs in dashboard
- Review Render documentation: https://render.com/docs
- Check MongoDB Atlas connection issues

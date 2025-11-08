# 🚀 LinkedIn Clone - Deployment Guide

## 📋 Prerequisites
Before deploying, make sure you have:
- ✅ MongoDB Atlas account (free tier available)
- ✅ Render/Railway account for backend (or Heroku)
- ✅ Vercel/Netlify account for frontend
- ✅ GitHub repository

---

## 🗄️ Step 1: Setup MongoDB Atlas (Database)

1. **Create Account**
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Sign up for free account

2. **Create Cluster**
   - Create a new FREE cluster
   - Choose a cloud provider (AWS recommended)
   - Select region closest to you

3. **Setup Database Access**
   - Go to "Database Access" → Add New Database User
   - Create username and password (save these!)
   - Grant "Read and Write" permissions

4. **Setup Network Access**
   - Go to "Network Access" → Add IP Address
   - Click "Allow Access from Anywhere" (0.0.0.0/0)

5. **Get Connection String**
   - Go to "Database" → Click "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database password
   - Example: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/linkedin-clone?retryWrites=true&w=majority`

---

## 🔙 Step 2: Deploy Backend (Render.com)

### Option A: Render.com (Recommended - Free Tier)

1. **Push Code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Create Render Account**
   - Go to [Render.com](https://render.com)
   - Sign up with GitHub

3. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the repository

4. **Configure Service**
   - **Name**: `linkedin-clone-api` (or any name)
   - **Region**: Select closest region
   - **Branch**: `main`
   - **Root Directory**: `Backend`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Instance Type**: Free

5. **Add Environment Variables**
   Click "Advanced" → "Add Environment Variable":
   ```
   MONGODB_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_random_secret_key_min_32_chars
   FRONTEND_URL=https://your-app-name.vercel.app
   PORT=5000
   ```

6. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment (5-10 minutes)
   - Copy your backend URL: `https://linkedin-clone-api.onrender.com`

### Option B: Railway.app

1. Go to [Railway.app](https://railway.app)
2. Connect GitHub repository
3. Select Backend folder
4. Add environment variables (same as above)
5. Deploy!

---

## 🎨 Step 3: Deploy Frontend (Vercel)

1. **Update Frontend API URL**
   - Create `.env.production` in Frontend folder:
   ```
   VITE_API_URL=https://your-backend-url.onrender.com/api
   ```

2. **Create Vercel Account**
   - Go to [Vercel.com](https://vercel.com)
   - Sign up with GitHub

3. **Import Project**
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Select the repository

4. **Configure Project**
   - **Framework Preset**: Vite
   - **Root Directory**: `Frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

5. **Add Environment Variables**
   ```
   VITE_API_URL=https://your-backend-url.onrender.com/api
   ```

6. **Deploy**
   - Click "Deploy"
   - Wait for deployment (2-5 minutes)
   - Your app will be live at: `https://your-app-name.vercel.app`

### Alternative: Netlify

1. Go to [Netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect GitHub repository
4. Configure:
   - Base directory: `Frontend`
   - Build command: `npm run build`
   - Publish directory: `Frontend/dist`
5. Add environment variables
6. Deploy!

---

## 🔐 Step 4: Update CORS in Backend

Update your `.env` on Render with your Vercel URL:
```
FRONTEND_URL=https://your-app-name.vercel.app
```

Redeploy backend if needed.

---

## ✅ Step 5: Test Your Deployment

1. **Visit Frontend URL**
   - Open `https://your-app-name.vercel.app`
   
2. **Test Features**
   - ✅ Register a new account
   - ✅ Login
   - ✅ Create a post
   - ✅ Like/comment on posts
   - ✅ View profile
   - ✅ Edit profile

3. **Check Backend**
   - Visit `https://your-backend-url.onrender.com`
   - Should see: "LinkedIn Clone API is running!"

---

## 🎯 Important Notes

### 🐌 Render Free Tier
- Spins down after 15 minutes of inactivity
- First request after sleep takes 30-50 seconds
- Upgrade to paid plan ($7/month) for 24/7 uptime

### 📊 MongoDB Atlas
- Free tier: 512 MB storage
- Enough for development and small projects
- Automatic backups included

### 🚀 Vercel/Netlify
- Both have generous free tiers
- Automatic deployments on git push
- Custom domains supported

---

## 🔧 Troubleshooting

### Backend Issues
```bash
# Check logs on Render
- Go to Render dashboard
- Click on your service
- Click "Logs" tab
```

### Frontend Issues
```bash
# Check browser console
- Press F12
- Check Console tab for errors
- Verify API_URL in Network tab
```

### CORS Errors
- Make sure FRONTEND_URL in backend matches your Vercel URL exactly
- No trailing slash in URLs
- Redeploy backend after changing environment variables

### Database Connection Failed
- Verify MongoDB Atlas connection string
- Check if IP whitelist includes 0.0.0.0/0
- Ensure password doesn't have special characters (or URL encode them)

---

## 📝 Quick Deployment Checklist

- [ ] MongoDB Atlas cluster created
- [ ] Database user created with password
- [ ] Network access set to 0.0.0.0/0
- [ ] Backend deployed to Render/Railway
- [ ] Environment variables added to backend
- [ ] Backend URL copied
- [ ] Frontend environment variables updated
- [ ] Frontend deployed to Vercel/Netlify
- [ ] CORS updated with frontend URL
- [ ] Test all features working

---

## 🎉 You're Live!

Your LinkedIn Clone is now deployed and accessible worldwide! 🌍

**Share your links:**
- Frontend: `https://your-app-name.vercel.app`
- Backend API: `https://your-backend-url.onrender.com`

---

## 📚 Additional Resources

- [MongoDB Atlas Docs](https://docs.atlas.mongodb.com/)
- [Render Docs](https://render.com/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com/)

---

**Created by:** Md Mustak  
**Date:** November 2025  
**Project:** LinkedIn Clone - Full Stack Social Media Application

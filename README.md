# LinkedIn Clone - Full Stack Social Media Web Application

A feature-rich social media web application inspired by LinkedIn, built with the MERN stack (MongoDB, Express.js, React, Node.js). This project demonstrates modern full-stack development practices with user authentication, real-time updates, and responsive design.

**🌐 Live Demo:** [https://linkedinclonemern.vercel.app](https://linkedinclonemern.vercel.app)

**📡 Backend API:** [https://linkedin-social-media-webapp-1.onrender.com](https://linkedin-social-media-webapp-1.onrender.com)

**📂 Source Code:** [GitHub Repository](https://github.com/mustaque01/LinkedIn-Social-Media-WebApp)

---

## 🎯 Project Overview

This project was built as part of the **Full Stack Developer Internship assignment for AppDost**. It showcases a complete social media platform with professional features including user authentication, post management, social interactions, and user profiles.

### 🌟 Key Highlights

- ✅ **Full-Stack MERN Application** - Complete implementation from database to UI
- ✅ **Production Deployment** - Live on Vercel (Frontend) & Render (Backend)
- ✅ **RESTful API Design** - 18 API endpoints with proper authentication
- ✅ **Secure Authentication** - JWT tokens with bcrypt password hashing
- ✅ **Real-time Updates** - Instant feed refresh after user actions
- ✅ **Responsive Design** - Mobile-first approach with modern CSS
- ✅ **MongoDB Atlas** - Cloud database with optimized schemas

---

## 🚀 Features

### Core Features ✅
- ✅ **User Authentication** - Secure signup & login with email/password
- ✅ **User Session Management** - JWT-based authentication with protected routes
- ✅ **Create Posts** - Rich text post creation with instant publishing
- ✅ **Public Feed** - View all posts from all users in real-time
- ✅ **Post Metadata** - Display author name, content, and timestamps
- ✅ **Smart Sorting** - Newest posts appear first

### Bonus Features ✅
- ✅ **Like System** - Like/unlike posts with real-time count updates
- ✅ **Comment System** - Add and delete comments on any post
- ✅ **Post Management** - Edit and delete your own posts
- ✅ **User Profiles** - Dedicated profile pages with post history
- ✅ **Profile Editing** - Update name and bio
- ✅ **Profile Statistics** - View total posts, likes received, and comments
- ✅ **Image Support** - Post with images (Unsplash integration)
- ✅ **Responsive Design** - Fully functional on mobile, tablet, and desktop

---

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| **React.js** | 19.1.1 | UI library for building interactive interfaces |
| **Vite** | 7.2.2 | Next-generation frontend build tool |
| **React Router DOM** | Latest | Client-side routing and navigation |
| **Axios** | Latest | HTTP client for API communication |
| **CSS3** | - | Modern styling with flexbox and grid |

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | 20.x | JavaScript runtime environment |
| **Express.js** | 4.18.2 | Web application framework |
| **MongoDB** | Atlas | NoSQL cloud database |
| **Mongoose** | 8.0.0 | MongoDB ODM for data modeling |
| **JWT** | 9.0.2 | JSON Web Tokens for authentication |
| **Bcrypt.js** | 2.4.3 | Password hashing and security |
| **CORS** | 2.8.5 | Cross-origin resource sharing |

### Deployment
- **Frontend:** Vercel (Serverless deployment with auto-scaling)
- **Backend:** Render (Container-based deployment)
- **Database:** MongoDB Atlas (Cloud-hosted database)

---

## 📁 Project Structure

```
LinkedIn-Social Media WebApp/
│
├── Backend/                           # Node.js + Express backend
│   ├── config/
│   │   └── db.js                     # MongoDB connection configuration
│   ├── controllers/
│   │   ├── authController.js         # Authentication logic (register, login, getMe)
│   │   ├── postController.js         # Post CRUD operations + likes/comments
│   │   └── userController.js         # User profile management
│   ├── middleware/
│   │   └── authMiddleware.js         # JWT verification middleware
│   ├── models/
│   │   ├── User.js                   # User schema (name, email, password, bio)
│   │   └── Post.js                   # Post schema (content, image, likes, comments)
│   ├── routes/
│   │   ├── authRoutes.js             # Auth endpoints (/register, /login, /me)
│   │   ├── postRoutes.js             # Post endpoints (CRUD + interactions)
│   │   └── userRoutes.js             # User endpoints (profile, update)
│   ├── .env.example                  # Environment variables template
│   ├── .gitignore                    # Git ignore configuration
│   ├── Procfile                      # Render deployment configuration
│   ├── .node-version                 # Node.js version specification
│   ├── server.js                     # Express app entry point
│   └── package.json                  # Dependencies and scripts
│
├── Frontend/                          # React frontend application
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx            # Top navigation bar
│   │   │   ├── CreatePost.jsx        # Post creation form
│   │   │   └── PostCard.jsx          # Individual post display
│   │   ├── pages/
│   │   │   ├── Home.jsx              # Feed page with all posts
│   │   │   ├── Login.jsx             # Login page
│   │   │   ├── Register.jsx          # Registration page
│   │   │   └── Profile.jsx           # User profile page
│   │   ├── context/
│   │   │   └── AuthContext.jsx       # Global authentication state
│   │   ├── services/
│   │   │   └── api.js                # Axios API client configuration
│   │   ├── styles/                   # Component-specific CSS files
│   │   │   ├── Auth.css
│   │   │   ├── Navbar.css
│   │   │   ├── Home.css
│   │   │   ├── CreatePost.css
│   │   │   ├── PostCard.css
│   │   │   └── Profile.css
│   │   ├── App.jsx                   # Main app component with routing
│   │   ├── main.jsx                  # React entry point
│   │   └── index.css                 # Global styles
│   ├── public/                        # Static assets
│   ├── .env                           # Development environment variables
│   ├── .env.production               # Production environment variables
│   ├── .env.example                  # Environment variables template
│   ├── index.html                    # HTML template
│   ├── vite.config.js                # Vite configuration
│   └── package.json                  # Dependencies and scripts
│
├── .gitignore                         # Root git ignore
├── README.md                          # Project documentation (this file)
└── DEPLOYMENT.md                      # Detailed deployment guide
```

---

## 🔧 Installation & Local Setup

### Prerequisites
- **Node.js** (v20.x or higher) - [Download](https://nodejs.org/)
- **MongoDB** (Local or Atlas account) - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **Git** - [Download](https://git-scm.com/)
- **npm** or **yarn** package manager

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/mustaque01/LinkedIn-Social-Media-WebApp.git
cd LinkedIn-Social-Media-WebApp
```

### 2️⃣ Backend Setup

```bash
# Navigate to Backend folder
cd Backend

# Install dependencies
npm install

# Create .env file
# Copy .env.example and fill in your values
cp .env.example .env
```

**Edit `.env` file:**
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/linkedin-clone
# Or use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/linkedin-clone
JWT_SECRET=your_super_secret_jwt_key_minimum_32_characters_long
NODE_ENV=development
```

**Start MongoDB** (if using local):
```bash
# Windows
net start MongoDB

# macOS/Linux
sudo systemctl start mongod
```

**Start Backend Server:**
```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

✅ Backend running at: `http://localhost:5000`

### 3️⃣ Frontend Setup

```bash
# Open new terminal and navigate to Frontend folder
cd Frontend

# Install dependencies
npm install

# Create .env file
cp .env.example .env
```

**Edit `.env` file:**
```env
VITE_API_URL=http://localhost:5000/api
```

**Start Frontend Server:**
```bash
npm run dev
```

✅ Frontend running at: `http://localhost:5174`

### 4️⃣ Access the Application

Open your browser and navigate to:
- **Frontend:** `http://localhost:5174`
- **Backend API:** `http://localhost:5000`

---

## 📡 API Documentation

### Base URL (Production)
```
https://linkedin-social-media-webapp-1.onrender.com/api
```

### Authentication Routes

| Method | Endpoint | Access | Description | Request Body |
|--------|----------|--------|-------------|--------------|
| POST | `/auth/register` | Public | Register new user | `{ name, email, password }` |
| POST | `/auth/login` | Public | Login user | `{ email, password }` |
| GET | `/auth/me` | Private | Get current user | - |

**Example Register Request:**
```json
POST /api/auth/register
{
  "name": "Md Mustak",
  "email": "mustak@example.com",
  "password": "SecurePass123"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "64abc123...",
    "name": "Md Mustak",
    "email": "mustak@example.com"
  }
}
```

### User Routes

| Method | Endpoint | Access | Description | Request Body |
|--------|----------|--------|-------------|--------------|
| GET | `/users` | Public | Get all users | - |
| GET | `/users/:id` | Public | Get user by ID | - |
| PUT | `/users/profile` | Private | Update own profile | `{ name, bio }` |

### Post Routes

| Method | Endpoint | Access | Description | Request Body |
|--------|----------|--------|-------------|--------------|
| GET | `/posts` | Public | Get all posts (sorted newest first) | - |
| GET | `/posts/:id` | Public | Get single post by ID | - |
| GET | `/posts/user/:userId` | Public | Get all posts by specific user | - |
| POST | `/posts` | Private | Create new post | `{ content, image? }` |
| PUT | `/posts/:id` | Private | Update own post | `{ content, image? }` |
| DELETE | `/posts/:id` | Private | Delete own post | - |
| PUT | `/posts/:id/like` | Private | Like/Unlike post (toggle) | - |
| POST | `/posts/:id/comment` | Private | Add comment to post | `{ text }` |
| DELETE | `/posts/:id/comment/:commentId` | Private | Delete own comment | - |

**Example Create Post Request:**
```json
POST /api/posts
Headers: { "Authorization": "Bearer <token>" }
{
  "content": "Excited to share my new project!",
  "image": "https://images.unsplash.com/photo-..."
}
```

**Response:**
```json
{
  "_id": "64abc456...",
  "user": {
    "_id": "64abc123...",
    "name": "Md Mustak"
  },
  "content": "Excited to share my new project!",
  "image": "https://images.unsplash.com/photo-...",
  "likes": [],
  "comments": [],
  "createdAt": "2025-11-10T12:00:00.000Z"
}
```

---

## 🎨 Features Walkthrough

### 1. User Authentication & Authorization 🔐

**Registration:**
- Navigate to `/register`
- Enter name, email, and password
- Password is hashed using bcrypt (10 rounds)
- JWT token automatically generated
- Redirects to home page with authenticated session

**Login:**
- Navigate to `/login`
- Enter email and password
- Server validates credentials
- JWT token stored in localStorage
- Protected routes become accessible

**Session Management:**
- Token automatically added to API requests
- AuthContext manages global auth state
- Automatic logout on token expiration
- Protected routes redirect to login if unauthenticated

### 2. Home Feed 📰

**Features:**
- View all posts from all users
- Posts sorted by creation date (newest first)
- Real-time like and comment counts
- Infinite scroll capability (ready for implementation)
- Responsive grid layout

**Interactions:**
- 👍 Like/Unlike with single click
- 💬 Add comments instantly
- 📝 Edit your own posts inline
- 🗑️ Delete your posts with confirmation

### 3. Create & Manage Posts ✍️

**Create Post:**
- Clean, focused input area
- Optional image URL support
- Character count (ready for limit)
- Instant feed update after posting

**Edit Post:**
- Click edit icon on your own posts
- Modify content inline
- Save changes instantly
- Cancel to revert

**Delete Post:**
- Delete icon visible only on your posts
- Confirmation before deletion
- Post removed from feed immediately

### 4. Social Interactions 💬

**Like System:**
- One-click like/unlike toggle
- Real-time count updates
- Visual indicator for liked posts
- User can see who liked (ready for implementation)

**Comment System:**
- Add comments with single field
- Delete your own comments
- Nested comment display
- Author name and timestamp shown

### 5. User Profiles 👤

**Profile Page Features:**
- User avatar (initials-based)
- Display name and email
- Editable bio section
- Statistics dashboard:
  - Total posts
  - Total likes received
  - Total comments
- All user's posts in chronological order

**Edit Profile:**
- Click "Edit Profile" button
- Update name and bio
- Save changes to database
- Instant UI update

---

## 🧪 Testing the Application

### Option 1: Use Deployed Version

1. Visit: [https://linkedinclonemern.vercel.app](https://linkedinclonemern.vercel.app)
2. Register a new account
3. Test all features
4. Note: First load may take 30-50 seconds (backend wake-up time)

### Option 2: Local Testing

1. **Start Backend & Frontend** (see Installation section)

2. **Register Test User:**
   - Name: Test User
   - Email: test@example.com
   - Password: Test@123

3. **Test Flow:**
   ```
   Register → Login → Create Post → Like → Comment → Profile → Edit Profile → Logout
   ```

### Option 3: API Testing

**Using PowerShell:**
```powershell
# Test backend health
Invoke-RestMethod -Uri "https://linkedin-social-media-webapp-1.onrender.com/" -Method Get

# Register user
$body = @{
    name = "Test User"
    email = "test@example.com"
    password = "Test@123"
} | ConvertTo-Json

Invoke-RestMethod -Uri "https://linkedin-social-media-webapp-1.onrender.com/api/auth/register" `
    -Method Post `
    -Body $body `
    -ContentType "application/json"
```

---

## 🚀 Deployment

This application is deployed using modern cloud platforms with CI/CD integration.

### Production URLs

- **Frontend:** [https://linkedinclonemern.vercel.app](https://linkedinclonemern.vercel.app)
- **Backend:** [https://linkedin-social-media-webapp-1.onrender.com](https://linkedin-social-media-webapp-1.onrender.com)
- **Database:** MongoDB Atlas (Cloud)

### Deployment Architecture

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  Users  →  Vercel (Frontend)  →  Render (Backend)  │
│              React App            Express API       │
│                                       ↓             │
│                                MongoDB Atlas        │
│                                  (Database)         │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Frontend Deployment (Vercel)

**Platform:** Vercel (Recommended for React apps)

**Steps:**
1. Connect GitHub repository to Vercel
2. Configure build settings:
   - Framework: Vite
   - Root Directory: `Frontend`
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Add environment variable:
   ```
   VITE_API_URL=https://linkedin-social-media-webapp-1.onrender.com/api
   ```
4. Deploy (automatic on git push)

**Features:**
- ✅ Auto-deployment on git push
- ✅ Edge network (global CDN)
- ✅ Automatic HTTPS
- ✅ Zero downtime deployments

### Backend Deployment (Render)

**Platform:** Render (Free tier available)

**Steps:**
1. Connect GitHub repository to Render
2. Create new Web Service
3. Configure settings:
   - Runtime: Node
   - Root Directory: `Backend`
   - Build Command: `npm install`
   - Start Command: `node server.js`
4. Add environment variables:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/linkedin-clone
   JWT_SECRET=your_secure_secret_key_minimum_32_characters
   FRONTEND_URL=https://linkedinclonemern.vercel.app
   NODE_ENV=production
   ```
5. Deploy

**Features:**
- ✅ Auto-deployment on git push
- ✅ Free SSL certificate
- ✅ Auto-scaling
- ⚠️ Free tier: Sleeps after 15 min inactivity (30-50s wake-up time)

### Database (MongoDB Atlas)

**Setup:**
1. Create MongoDB Atlas account
2. Create free cluster (M0 Sandbox - 512MB)
3. Create database user
4. Whitelist IP: `0.0.0.0/0` (allow from anywhere)
5. Get connection string
6. Add to backend environment variables

**Features:**
- ✅ 512MB free storage
- ✅ Automatic backups
- ✅ Cloud-hosted (no server management)

### Environment Variables

**Backend (.env on Render):**
```env
PORT=10000
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/linkedin-clone?retryWrites=true&w=majority
JWT_SECRET=a52fadfd82ea3296a8d064a9460cc0269cb438eff0684e093bba7478a8b688e1
FRONTEND_URL=https://linkedinclonemern.vercel.app
NODE_ENV=production
```

**Frontend (.env.production on Vercel):**
```env
VITE_API_URL=https://linkedin-social-media-webapp-1.onrender.com/api
```

---

## 🔒 Security Features

### Authentication & Authorization
- ✅ **JWT Tokens** - Secure, stateless authentication
- ✅ **Password Hashing** - Bcrypt with 10 salt rounds
- ✅ **Protected Routes** - Middleware verification on sensitive endpoints
- ✅ **Token Expiration** - Automatic logout on expired tokens

### API Security
- ✅ **CORS Configuration** - Whitelist specific origins
- ✅ **Input Validation** - Mongoose schema validation
- ✅ **Error Handling** - No sensitive data in error messages
- ✅ **Rate Limiting** - Ready for implementation

### Data Protection
- ✅ **Password Never Stored** - Only hashed versions in database
- ✅ **MongoDB Injection Prevention** - Mongoose ORM protection
- ✅ **XSS Protection** - React auto-escaping
- ✅ **Environment Variables** - Secrets not in code

---

## 📊 Database Schema

### User Model
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  bio: String (optional),
  profileImage: String (optional),
  createdAt: Date (auto)
}
```

### Post Model
```javascript
{
  user: ObjectId (ref: User),
  content: String (required),
  image: String (optional),
  likes: [ObjectId] (ref: User),
  comments: [
    {
      user: ObjectId (ref: User),
      text: String (required),
      createdAt: Date (auto)
    }
  ],
  createdAt: Date (auto)
}
```

---

## 🎯 Future Enhancements

### Planned Features
- [ ] Real image upload (Cloudinary integration)
- [ ] Follow/Unfollow users
- [ ] Personalized feed (following only)
- [ ] Search functionality (users and posts)
- [ ] Direct messaging
- [ ] Notifications system
- [ ] Post reactions (Love, Celebrate, etc.)
- [ ] Share posts
- [ ] Hashtag support
- [ ] User verification badges

### Performance Optimizations
- [ ] Implement pagination for posts
- [ ] Add caching (Redis)
- [ ] Optimize database queries
- [ ] Image lazy loading
- [ ] Code splitting
- [ ] Service workers (PWA)

---

## 👨‍💻 Author

**Md Mustak**

- **Role:** Full Stack Developer Intern
- **Company:** AppDost
- **Email:** Your email here
- **GitHub:** [@mustaque01](https://github.com/mustaque01)
- **LinkedIn:** [Your LinkedIn](https://linkedin.com/in/your-profile)
- **Portfolio:** [Your Portfolio](https://your-portfolio.com)

---

## 📄 License

This project is created for educational purposes as part of the AppDost Full Stack Developer Internship assignment.

**Copyright © 2025 Md Mustak. All rights reserved.**

---

## 🙏 Acknowledgments

- **AppDost** - For providing the internship opportunity and project requirements
- **MERN Stack Community** - For excellent documentation and tutorials
- **MongoDB University** - For database design best practices
- **React Documentation** - For modern React patterns
- **Vercel & Render** - For free deployment platforms
- **Unsplash** - For royalty-free images
- **All Open Source Contributors** - For the amazing tools and libraries

---

## 📞 Support

For any questions or issues:

1. **Create an Issue:** [GitHub Issues](https://github.com/mustaque01/LinkedIn-Social-Media-WebApp/issues)
2. **Email:** your.email@example.com
3. **Documentation:** Check `DEPLOYMENT.md` for deployment help

---

## 🌟 Star this Repository

If you found this project helpful, please consider giving it a ⭐ on GitHub!

---

**Built with ❤️ using MERN Stack | © 2025 Md Mustak**

## 🚀 Features

### Core Features
- ✅ User authentication (Sign up & Login with email/password)
- ✅ User name displayed on top bar after login
- ✅ Create and publish text posts
- ✅ View all posts in a public feed
- ✅ Posts display author name, content, and timestamp
- ✅ Newest posts shown first

### Bonus Features
- ✅ Like and comment on posts
- ✅ Edit and delete own posts
- ✅ User profile pages
- ✅ Delete own comments
- ✅ Real-time feed updates
- ✅ Responsive design

## 🛠️ Tech Stack

### Frontend
- **React.js** (v19) - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **CSS3** - Styling with modern CSS

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication tokens
- **Bcrypt.js** - Password hashing
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
LinkedIn-Social Media WebApp/
├── Backend/                 # Node.js + Express backend
│   ├── config/
│   │   └── db.js           # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── postController.js
│   │   └── userController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   └── Post.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── postRoutes.js
│   │   └── userRoutes.js
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── Frontend/               # React frontend
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   ├── CreatePost.jsx
    │   │   └── PostCard.jsx
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── Login.jsx
    │   │   ├── Register.jsx
    │   │   └── Profile.jsx
    │   ├── context/
    │   │   └── AuthContext.jsx
    │   ├── services/
    │   │   └── api.js
    │   ├── styles/
    │   ├── App.jsx
    │   └── main.jsx
    ├── index.html
    └── package.json
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Backend Setup

1. Navigate to Backend folder:
```bash
cd Backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file in Backend folder:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/linkedin-clone
JWT_SECRET=your_super_secret_jwt_key_here
```

4. Start MongoDB service (if using local MongoDB)

5. Start the backend server:
```bash
# Development mode
npm run dev

# Production mode
npm start
```

Backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to Frontend folder:
```bash
cd Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

Frontend will run on `http://localhost:5173` or `http://localhost:5174`

## 📡 API Endpoints

### Authentication Routes
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/api/auth/register` | Public | Register new user |
| POST | `/api/auth/login` | Public | Login user |
| GET | `/api/auth/me` | Private | Get current user |

### User Routes
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/api/users` | Public | Get all users |
| GET | `/api/users/:id` | Public | Get user by ID |
| PUT | `/api/users/profile` | Private | Update own profile |

### Post Routes
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/api/posts` | Public | Get all posts |
| GET | `/api/posts/:id` | Public | Get single post |
| GET | `/api/posts/user/:userId` | Public | Get user's posts |
| POST | `/api/posts` | Private | Create new post |
| PUT | `/api/posts/:id` | Private | Update own post |
| DELETE | `/api/posts/:id` | Private | Delete own post |
| PUT | `/api/posts/:id/like` | Private | Like/Unlike post |
| POST | `/api/posts/:id/comment` | Private | Add comment |
| DELETE | `/api/posts/:id/comment/:commentId` | Private | Delete own comment |

## 🎨 Features Walkthrough

### 1. User Authentication
- Users can register with name, email, and password
- Secure password hashing using bcrypt
- JWT token-based authentication
- Auto-login on registration

### 2. Feed
- View all posts from all users
- Posts sorted by newest first
- Real-time like and comment counts
- Like/Unlike functionality
- Add and delete comments

### 3. Create Posts
- Simple text post creation
- Instant feed update after posting
- Edit and delete own posts

### 4. User Profiles
- View user information
- See all posts by a specific user
- Profile avatar with user initials

## 🧪 Testing the Application

### Using Thunder Client (VS Code Extension)

1. Import the collection: `Backend/thunder-collection_LinkedIn_Clone_API.json`
2. Test all endpoints with sample data

### Manual Testing

1. **Register a new user:**
   - Go to `/register`
   - Fill in name, email, password
   - Click Sign Up

2. **Login:**
   - Go to `/login`
   - Enter email and password
   - Click Sign In

3. **Create a post:**
   - On home page, type in the post box
   - Click Post

4. **Like and Comment:**
   - Click 👍 Like on any post
   - Click 💬 Comment to add a comment

5. **View Profile:**
   - Click on Profile in navbar
   - See your posts and information

## 🚀 Deployment

### Backend Deployment (Render/Railway)

1. Create account on Render or Railway
2. Connect GitHub repository
3. Set environment variables:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `PORT`
4. Deploy

### Frontend Deployment (Netlify/Vercel)

1. Create account on Netlify or Vercel
2. Connect GitHub repository
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Update API URL in `Frontend/src/services/api.js` to your backend URL
6. Deploy

## 🔒 Security Features

- Password hashing with bcrypt
- JWT token authentication
- Protected API routes
- Input validation
- CORS configuration
- Secure HTTP headers

## 📝 Environment Variables

### Backend (.env)
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## 👨‍💻 Author

**Md Mustak**
- **Internship:** AppDost - Full Stack Developer
- **GitHub:** [@mustaque01](https://github.com/mustaque01)
- **Repository:** [LinkedIn-Social-Media-WebApp](https://github.com/mustaque01/LinkedIn-Social-Media-WebApp)

## 📝 License

This project is created for educational purposes as part of an internship assignment.

## 🙏 Acknowledgments

- AppDost for the internship opportunity
- MERN stack community for excellent documentation
- All open-source contributors

---

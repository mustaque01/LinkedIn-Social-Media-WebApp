# LinkedIn Clone - Full Stack Social Media Web Application

A feature-rich social media web application inspired by LinkedIn, built as part of the Full Stack Developer Internship assignment for **AppDost**.

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

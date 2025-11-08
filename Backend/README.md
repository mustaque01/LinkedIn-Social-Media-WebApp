# LinkedIn Clone - Backend API

RESTful API for LinkedIn Clone built with Node.js, Express, and MongoDB.

## 📋 Features

- ✅ User Authentication (JWT)
- ✅ CRUD Operations for Posts
- ✅ Like/Unlike Posts
- ✅ Comment on Posts
- ✅ User Profiles
- ✅ Password Hashing (Bcrypt)
- ✅ Protected Routes

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- MongoDB (local or Atlas)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables in `.env`:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

3. Start the server:
```bash
# Development mode with nodemon
npm run dev

# Production mode
npm start
```

Server will run on `http://localhost:5000`

## 📡 API Endpoints

### Authentication Routes (`/api/auth`)

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/api/auth/register` | Public | Register new user |
| POST | `/api/auth/login` | Public | Login user |
| GET | `/api/auth/me` | Private | Get current user |

### User Routes (`/api/users`)

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/api/users` | Public | Get all users |
| GET | `/api/users/:id` | Public | Get user by ID |
| PUT | `/api/users/profile` | Private | Update own profile |

### Post Routes (`/api/posts`)

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

## 📝 Request Examples

### Register User
```json
POST /api/auth/register
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Login
```json
POST /api/auth/login
{
  "email": "john@example.com",
  "password": "password123"
}
```

### Create Post
```json
POST /api/posts
Headers: { Authorization: "Bearer <token>" }
{
  "content": "This is my first post!",
  "image": "optional_image_url"
}
```

### Add Comment
```json
POST /api/posts/:postId/comment
Headers: { Authorization: "Bearer <token>" }
{
  "text": "Great post!"
}
```

## 🔒 Authentication

Protected routes require JWT token in header:
```
Authorization: Bearer <your_jwt_token>
```

## 📦 Dependencies

- **express** - Web framework
- **mongoose** - MongoDB ODM
- **jsonwebtoken** - JWT authentication
- **bcryptjs** - Password hashing
- **cors** - CORS middleware
- **dotenv** - Environment variables
- **multer** - File upload handling
- **cloudinary** - Image hosting

## 🗂️ Project Structure

```
Backend/
├── config/
│   └── db.js              # Database connection
├── controllers/
│   ├── authController.js  # Authentication logic
│   ├── postController.js  # Post operations
│   └── userController.js  # User operations
├── middleware/
│   └── authMiddleware.js  # JWT verification
├── models/
│   ├── User.js           # User schema
│   └── Post.js           # Post schema
├── routes/
│   ├── authRoutes.js     # Auth endpoints
│   ├── postRoutes.js     # Post endpoints
│   └── userRoutes.js     # User endpoints
├── .env                  # Environment variables
├── .gitignore
├── package.json
└── server.js             # Entry point
```

## 👨‍💻 Author

Created for AppDost Full Stack Developer Internship Assignment

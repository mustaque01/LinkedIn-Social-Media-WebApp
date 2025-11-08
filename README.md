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
- 🔄 Like and comment on posts
- ✏️ Edit and delete own posts
- 👤 User profile pages
- 📷 Image upload with posts

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- Axios
- CSS/Styled Components

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Bcrypt.js
- Multer & Cloudinary (for image uploads)

## 📁 Project Structure

```
LinkedIn-Social Media WebApp/
├── Backend/           # Node.js + Express backend
│   ├── config/       # Database configuration
│   ├── controllers/  # Route controllers
│   ├── middleware/   # Authentication middleware
│   ├── models/       # Mongoose models
│   ├── routes/       # API routes
│   └── server.js     # Entry point
│
└── Frontend/         # React frontend (Coming soon)
    └── src/
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
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
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

4. Start the server:
```bash
npm run dev
```

Backend will run on `http://localhost:5000`

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (Protected)

### Posts (Coming soon)
- `GET /api/posts` - Get all posts
- `POST /api/posts` - Create new post (Protected)
- `PUT /api/posts/:id` - Update post (Protected)
- `DELETE /api/posts/:id` - Delete post (Protected)

## 👨‍💻 Author

**Your Name**
- Internship: AppDost - Full Stack Developer

## 📝 License

This project is created for educational purposes as part of an internship assignment.

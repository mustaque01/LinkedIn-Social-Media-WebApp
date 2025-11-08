# LinkedIn Clone - Frontend

React-based frontend for LinkedIn Clone social media application.

## 🛠️ Tech Stack

- React 19
- Vite (Build tool)
- React Router (Routing)
- Axios (HTTP client)
- CSS3 (Styling)

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bar with user info
│   ├── CreatePost.jsx      # Create new post form
│   └── PostCard.jsx        # Post display with like/comment
├── pages/
│   ├── Home.jsx           # Main feed page
│   ├── Login.jsx          # User login
│   ├── Register.jsx       # User registration
│   └── Profile.jsx        # User profile page
├── context/
│   └── AuthContext.jsx    # Authentication context
├── services/
│   └── api.js            # API configuration
├── styles/               # CSS files
├── App.jsx              # Main app component
└── main.jsx             # Entry point
```

## 🚀 Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

App will run on `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 🔧 Configuration

The backend API URL is configured in `src/services/api.js`:

```javascript
const API_URL = 'http://localhost:5000/api';
```

Update this URL when deploying to production.

## 📱 Pages

- **/** - Home/Feed page
- **/login** - Login page
- **/register** - Registration page
- **/profile/:userId** - User profile

## ✨ Features

- JWT-based authentication
- Protected routes
- Real-time feed updates
- Like and comment functionality
- Post CRUD operations
- User profiles
- Responsive design

## 🎨 Styling

The app uses custom CSS with a LinkedIn-inspired color scheme:

- Primary Color: #0a66c2 (LinkedIn Blue)
- Background: #f3f2ef
- White Cards with subtle shadows
- Responsive design for mobile and desktop

## 👨‍💻 Development

Built with Vite for fast development and optimized builds.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

---

Part of LinkedIn Clone Full Stack Application


## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

# Interior Decoration Website

A modern full-stack web application for interior design and restoration services with user authentication, project management, booking system, and admin dashboard.

## Features

- 🔐 **User Authentication** - Register, login, profile management
- 🎨 **Project Gallery** - Browse and view interior design projects
- 📅 **Booking System** - Book consultations with design experts
- ⭐ **Favorites** - Save favorite projects
- 👨‍💼 **Admin Dashboard** - Manage projects, services, users, and bookings
- 🔍 **Search Functionality** - Search projects and services
- 📱 **Responsive Design** - Works on all devices
- 🎨 **Modern UI** - Beautiful glassmorphism effects and animations

## Tech Stack

### Frontend
- React 18
- React Router
- Styled Components
- Framer Motion
- Axios
- Vite

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt
- Multer (file uploads)

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/interior-decoration-website.git
cd interior-decoration-website
```

2. Install root dependencies
```bash
npm install
```

3. Install backend dependencies
```bash
cd backend
npm install
```

4. Install frontend dependencies
```bash
cd ../frontend
npm install
```

### Configuration

1. Create a `.env` file in the `backend` directory:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/interior-design
JWT_SECRET=your-super-secret-jwt-key-change-this
JWT_EXPIRE=7d
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
ADMIN_EMAIL=admin@example.com
```

2. Create a `.env` file in the `frontend` directory (optional):
```env
VITE_API_URL=http://localhost:5000/api
```

### Running the Application

#### Development Mode

**Option 1: Run both servers together (from root)**
```bash
npm run dev
```

**Option 2: Run separately**

Terminal 1 - Backend:
```bash
cd backend
npm run dev
```

Terminal 2 - Frontend:
```bash
cd frontend
npm start
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## Project Structure

```
interior-decoration-website/
├── backend/
│   ├── controllers/     # Route controllers
│   ├── middleware/      # Auth, upload middleware
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── uploads/         # Uploaded files
│   └── server.js        # Express server
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── context/     # React context (Auth)
│   │   ├── pages/       # Page components
│   │   └── styles/      # Global styles and theme
│   └── vite.config.js
└── package.json         # Root package.json
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `POST /api/auth/logout` - Logout user

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project (admin)
- `PUT /api/projects/:id` - Update project (admin)
- `DELETE /api/projects/:id` - Delete project (admin)

### Bookings
- `POST /api/bookings` - Create booking
- `GET /api/bookings/my-bookings` - Get user's bookings
- `GET /api/bookings` - Get all bookings (admin)

### Favorites
- `GET /api/favorites` - Get user's favorites
- `POST /api/favorites/:projectId` - Add to favorites
- `DELETE /api/favorites/:projectId` - Remove from favorites

### Admin
- `GET /api/admin/dashboard` - Dashboard stats
- `GET /api/admin/users` - Get all users
- `GET /api/admin/projects` - Get all projects
- `GET /api/admin/services` - Get all services

## Admin Access

To access the admin dashboard:
1. Register a user account
2. In MongoDB, update the user's `role` field to `"admin"` or `"super_admin"`
3. Login and navigate to `/admin`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please open an issue on GitHub.

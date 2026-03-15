# Hunar Punjab - Full Stack MERN LMS

A professional Learning Management System (LMS) built using the MERN stack (MongoDB, Express, React, Node.js). This platform supports three core roles: **Admin**, **Instructor**, and **Student**, providing a comprehensive environment for online education.

## 🚀 Features

### 1️⃣ Student Portal
- **Registration & Login**: Secure authentication with JWT.
- **Course Discovery**: Browse available courses with categorized listings.
- **Enrollment**: One-click enrollment in any course.
- **Dashboard**: Track enrollment progress and view personal learning history.

### 2️⃣ Instructor Panel
- **Course Creation**: Dedicated form to add course titles, descriptions, categories, and pricing.
- **Course Management**: View and delete own courses.
- **Content Upload**: Manage educational offerings directly from a personalized dashboard.

### 3️⃣ Admin Dashboard
- **User Management**: View and manage all registered users.
- **Platform Analytics**: Oversee all courses across the platform.
- **System Control**: Full CRUD permissions for database maintenance.

## 🛠️ Technologies Used

**Frontend:**
- React JS (Vite)
- React Router (Navigation)
- Axios (API Integration)
- React Bootstrap (UI/UX Styling)
- Context API (State Management)

**Backend:**
- Node.js & Express.js
- MongoDB & Mongoose (Database)
- JWT (Authentication)
- Bcrypt (Password Hashing)
- Dotenv (Environment Variables)

## 📋 Installation Steps

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/hunar-punjab-lms.git
   cd hunar-punjab-lms
   ```

2. **Backend Setup:**
   ```bash
   cd backend
   npm install
   # Create a .env file and add your MONGO_URI and JWT_SECRET
   node server.js
   ```

3. **Frontend Setup:**
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

4. **Seed Database (Optional):**
   ```bash
   cd ../backend
   node seed.js
   ```

## 📸 Screenshots

### Student Dashboard
![Student Dashboard](file:///d:/Web-development-Projects/hunarmand_Punjab_final_Project/artifacts/student_dashboard.png)

### Available Courses
![Course Listing](file:///d:/Web-development-Projects/hunarmand_Punjab_final_Project/artifacts/course_listing.png)

### Enrolled Courses
![Enrolled Courses](file:///d:/Web-development-Projects/hunarmand_Punjab_final_Project/artifacts/enrolled_courses.png)

## 🌐 Free Deployment Guide

### Backend (Server & Database)
1. **Database**: Use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a free cloud database.
2. **Hosting**: Deploy the `backend` folder to [Render](https://render.com/) or [Railway](https://railway.app/).
    - Set environment variables (`MONGO_URI`, `JWT_SECRET`) in the platform settings.

### Frontend
1. **Hosting**: Deploy the `frontend` folder to [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).
    - Ensure the `API_URL` in `services/api.js` points to your deployed backend.

## 🔗 GitHub Repository
You can host your code on GitHub to collaborate and showcase your work:
`https://github.com/your-username/hunar-punjab-lms`

---
*Created for the Hunar Punjab Final Project.*

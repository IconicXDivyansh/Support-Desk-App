# Support Desk 🎟️

Welcome to the Support Desk project! This application is designed to help users create and manage support tickets. It includes both a frontend built with React and Vite, and a backend built with Express and MongoDB.

## Table of Contents 📚

- [Features](#features-)
- [Technologies Used](#technologies-used-)
- [Setup and Installation](#setup-and-installation-)
- [Environment Variables](#environment-variables-)
- [Learnings](#learnings-)
- [Note](#contributing-)


## Features ✨

- User authentication and authorization
- Create, view, and manage support tickets
- Responsive design
- Error handling and validation
- Secure API endpoints

## Technologies Used 🛠️

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Express, MongoDB, Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **State Management**: Redux Toolkit
- **Deployment**: Vercel

## Setup and Installation 🚀

1. **Clone the repository**:
```sh
git clone https://github.com/your-username/support-desk.git
cd support-desk
```
2. **Install Dependencies**
```sh
pnpm install
cd frontend
pnpm install
cd ..
```
3. **Set up environment variables**: Create a .env file in the root directory and add the following:
```
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xltpo.mongodb.net/supportdeskdb?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```
4. **Run the application**:
```sh
pnpm run dev
```

## Environment Variables 🌍
- `MONGO_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for signing JWT tokens
- `NODE_ENV`: Environment (development, production)

## Learnings 📘
### Frontend Development 🌐
- React and Vite: Leveraged Vite for fast and efficient development with React.
- Tailwind CSS: Utilized Tailwind CSS for styling and responsive design.
- State Management: Implemented Redux Toolkit for state management.

### Backend Development 🛠️
- Express: Built a RESTful API with Express.
- MongoDB and Mongoose: Used MongoDB for the database and Mongoose for object data modeling.
- Authentication: Implemented JWT for secure authentication and authorization.
- Error Handling: Added comprehensive error handling and validation.

### Deployment 🚀
- Vercel: Deployed both the frontend and backend on Vercel, ensuring seamless integration and deployment.

### Troubleshooting and Debugging 🐛
- Deprecation Warnings: Addressed deprecation warnings by updating MongoDB connection strings and Mongoose methods.
- 504 Errors: Troubleshooted and resolved 504 Gateway Timeout errors by ensuring proper backend configuration and environment variables.

## Note
This is a project aimed at consolidating my learning about MERN stack and applying them in real-world and serves the purpose of demonstration only. Please do not raise pull requests.

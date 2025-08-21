📰 News Website - MERN Stack

A full-stack News Website built with the MERN stack (MongoDB, Express.js, React, Node.js).
The platform allows users to browse the latest news articles, explore categories, and experience a modern responsive UI with Dark/Light mode support.

🚀 Features

📰 News Feed – Displays latest articles in real-time.

🔍 Category Filtering – Browse news by categories.

🌙 Dark/Light Mode – User-friendly theme toggle.

📱 Responsive UI – Works across desktop, tablet, and mobile.

⚡ Fast Frontend – Powered by React + Vite.

🗄️ Backend API – Built with Express.js and connected to MongoDB Atlas.

🔐 Secure Auth Ready – JWT authentication support for user sessions (optional).

🛠️ Tech Stack
Frontend

React (with Vite)

Tailwind CSS (if used)

Axios (API calls)

Backend

Node.js

Express.js

MongoDB + Mongoose

dotenv (for environment configs)

JWT (Authentication, optional)

⚙️ Setup & Installation
1️⃣ Clone the repository
git clone <your-repo-url>
cd Artifacts

2️⃣ Setup Backend
cd server
npm install


Create a .env file inside /server:

PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


Run the backend:

node index.js
# or
npm run dev


Backend will run on: http://localhost:5000

3️⃣ Setup Frontend
cd frontend
npm install
npm run dev


Frontend will run on: http://localhost:5173

Database: MongoDB Atlas

📝 License

This project is licensed under the MIT License.

# BookStorm

An online eBookstore built for college students — browse a growing catalog of books, and add, update, or remove listings. Built on the MERN stack, with a Next.js frontend.

🔗 Live: [bookstorm.vercel.app](https://bookstorm.vercel.app/)

## About

BookStorm started as a simple bookstore app in the MERN stack and has since grown into a Next.js-powered eBookstore aimed at university students — a central place to find and manage academic and general reading material.

## Features

- 📚 **Book Catalog** — Browse available books
- ➕ **Add / Update / Delete Books** — Manage the store's listings
- 🔐 **Login** — User authentication
- ℹ️ **About & Contact Pages** — Info about the platform and a way to reach out

## Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | [Next.js](https://nextjs.org/) / React |
| **Backend** | [Express.js](https://expressjs.com/) + [Node.js](https://nodejs.org/) |
| **Database** | [MongoDB](https://www.mongodb.com/) |
| **Styling** | Sass, [Tailwind CSS](https://tailwindcss.com/) |
| **Deployment** | [Vercel](https://vercel.com/) |

## Project Structure

```
bookstorm-nextjs/
├── frontend/         # Earlier React frontend
├── frontend-next/    # Current Next.js frontend
└── ...                # Backend API (Express + MongoDB)
```

> This repo evolved over time — `frontend` was the original React client, and `frontend-next` is the current Next.js version the live site runs on.

## Getting Started

```bash
git clone https://github.com/the-bipu/bookstorm-nextjs.git
cd bookstorm-nextjs/frontend-next
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

If the project includes a separate backend/API service, install and run that alongside the frontend, and point the frontend's environment variables at it and your MongoDB connection string.

## License

This is a personal project, built and maintained by [the-bipu](https://github.com/the-bipu).
# deepframe-web
# 🚀 Front-end Development with Next.js 13 & FastAPI

This project is a modern front-end application built with **Next.js 13** and **TypeScript**, integrated with a **FastAPI** backend for handling authentication. It includes fully functional **login** and **signup** pages, secure API requests using **Axios**, and stores JWT tokens in the browser's **localStorage**.

---

## 🛠️ Tech Stack

### Frontend:
- Next.js 13.4  
- React  
- TypeScript  
- PostCSS  
- Axios  
- ESLint  

### VS Code Extensions:
- Tailwind CSS IntelliSense  
- ES7+ React/Redux/React-Native/JS  
- TypeScript  
- Python  

### Backend:
- FastAPI  
- Python 3  
- Uvicorn  

---

## 📦 Project Setup

### 1. Initialize Frontend Project

Open VS Code, and in the terminal (`cmd`), run the following:

```bash
npx create-ai-next-app@13.4
```
### 2. Install Dependencies

Inside your project directory, run:

```bash
npm install react react-dom next typescript postcss eslint \
@types/react @types/node @types/react-dom autoprefixer
```
### 3. Run the Project

```bash
npm run dev
```

Open the browser and visit:

```text
http://localhost:3000
```
## 📁 Folder Structure
In next.js it is convention to use page.tsx name for each page.Folder(ai-next-app) structre looks like this;
ai-next-app/
│
├── app/
│ ├── login/
│ │ ├── page.tsx
│ │ └── login.css
│ └── signup/
│ ├── page.tsx
│ └── signup.css
│
├── .next/
├── node_modules/
├── .eslintrc.json
## 🔐 Pages Implemented

### ✅ Login Page
- Located at `app/login/page.tsx`
- Styled with `login.css`
- Uses POST request to `/auth/login` endpoint

```ts
const response = await axiosInstance.post('/auth/login', params, {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});
```
### 📝 Signup Page
- Located at `app/signup/page.tsx`
- Styled with `signup.css`
- Uses POST request to `/auth/signup` endpoint

```ts
const response = await axiosInstance.post('/auth/signup', {
  username: name,
  email,
  password,
});
```
## 🔗 Backend Integration (FastAPI)

After developing the frontend, the backend repo was cloned (FastAPI-based) and opened in the same VS Code workspace.
## 🧰 Backend Setup

Install required packages using `requirements.txt` from the backend repo.

Start FastAPI server with:

```bash
uvicorn main:app --reload

---

```
## 🔄 Frontend + Backend Running Together

Start the backend:

```bash
uvicorn main:app --reload
```
```bash
npm run dev
```




 ## 🎥 Demo Videos

Demonstration videos are located in the `video/` folder:

- **Project Overview** – How the app runs  
- **Signup Page** – Testing the signup functionality in the browser  
- **Login Page** – Testing the login process  
- **JWT Token Check** – Inspecting localStorage for token using DevTools  
## 📌 Notes

- JWT tokens are stored in browser `localStorage` for session management.
- Axios is used for seamless communication with FastAPI.
- `page.tsx` files are used for routing in Next.js 13 app directory structure.


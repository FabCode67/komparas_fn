import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import LoginForm from './components/auth/Login.tsx'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignupForm from './components/auth/Signup.tsx'
import ForgotPasswordForm from './components/auth/ForgotPassword.tsx'
import ResetPassword from './components/auth/ResetPassword.tsx'
import SingleProductPage from './components/signleProduct/SingleProductPage.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/forgot_password" element={<ForgotPasswordForm />} />
        <Route path="/reset_password?resetToken=:resetToken" element={<ResetPassword />} />
        <Route path="/product/:id" element={<SingleProductPage />} />
      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </React.StrictMode>,
)

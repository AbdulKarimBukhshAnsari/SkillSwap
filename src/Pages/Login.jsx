<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Navbar2 from "@/components/Navbar2";
import { GoogleLogin } from "@react-oauth/google";
=======
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar2 from '@/components/Navbar2';
import { apiContext } from '@/context/ApiContext';
import { GoogleLogin } from '@react-oauth/google';
import Cookies from 'js-cookie';
import {jwtDecode } from 'jwt-decode';
>>>>>>> ce3da2bcedafde0d47d3a07b8bf426e511871573

export default function Login() {
    const server = useContext(apiContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(server + '/api/user/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, registerType: "email" })
            });
            const result = await response.json();
            Cookies.set("token", result?.token, { secure: true, sameSite: 'None', expires: 30 });

            if (!response.ok) {
                throw new Error('Failed to login');
            }
            navigate('/dashboard');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSuccess = async (credentialResponse) => {
        try {
            const decoded = jwtDecode(credentialResponse.credential);
            const { email } = decoded; // Extract Google user details
            const response = await fetch(server + '/api/user/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, loginType: "google" })
            });
            const result = await response.json();
            Cookies.set("token", result?.token, { secure: true, sameSite: 'None', expires: 30 });

            if (!response.ok) {
                throw new Error('Google login failed');
            }

            navigate('/dashboard'); // Redirect after login
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <>
            <Navbar2 />
<<<<<<< HEAD

            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg w-[400px] h-[480px] flex flex-col justify-center">
                    <h2 className="text-2xl font-semibold text-center mb-6 text-green-700">
                        Login
                    </h2>

                    <form className="flex flex-col">
=======
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg w-[400px] h-[480px] flex flex-col justify-center">
                    <h2 className="text-2xl font-semibold text-center mb-6 text-green-700">Login</h2>

                    <form className="flex flex-col" onSubmit={handleLogin}>
>>>>>>> ce3da2bcedafde0d47d3a07b8bf426e511871573
                        <input
                            type="email"
                            placeholder="Email"
                            className="border border-gray-300 p-3 rounded w-full mb-3 focus:outline-none focus:ring-2 focus:ring-green-400"
<<<<<<< HEAD
=======
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
>>>>>>> ce3da2bcedafde0d47d3a07b8bf426e511871573
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="border border-gray-300 p-3 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
<<<<<<< HEAD
                        />

                        {/* Google Login Button */}
                        <GoogleLogin
                            onSuccess={(credentialResponse) => {
                                console.log(credentialResponse);
                            }}
                            onError={() => console.log("Login Failed")}
                            theme="outline"
                            size="large"
                            shape="pill"
                            width="100%"
                        >
                            <div className="flex items-center justify-center gap-3 border border-green-500 text-green-700 px-4 py-3 rounded-full w-full font-semibold hover:bg-green-500 hover:text-white transition">
                                <FcGoogle size={22} /> Log In with Google
                            </div>
                        </GoogleLogin>
                    </form>

                    <p className="mt-4 text-center text-gray-600">
                        Don't have an account?{" "}
                        <Link to="/signup" className="text-green-600 font-semibold">
                            Sign Up
                        </Link>
=======
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <button type="submit" className="bg-green-500 text-white px-4 py-3 rounded-full w-full text-lg font-semibold hover:bg-green-600 transition">
                            {loading ? 'Logging in...' : 'Login'}
                        </button>

                        {error && <p className="text-red-500 text-center mt-2">{error}</p>}

                        <div className="relative text-center mt-4">
                            <span className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 border-t border-gray-300"></span>
                            <span className="bg-white px-3 text-gray-500 relative">OR</span>
                        </div>

                        {/* Google Login Button */}
                        <div className="flex justify-center mt-4">
                            <GoogleLogin
                                onSuccess={handleGoogleSuccess}
                                onError={() => {
                                    console.log('Login Failed');
                                }}
                            />
                        </div>
                    </form>

                    <p className="mt-4 text-center text-gray-600">
                        Don't have an account? <Link to="/signup" className="text-green-600 font-semibold">Sign Up</Link>
>>>>>>> ce3da2bcedafde0d47d3a07b8bf426e511871573
                    </p>
                </div>
            </div>
        </>
    );
}
import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'; // Google Icon
import Navbar2 from '@/components/Navbar2';

export default function Login() {
    return (
        <>
        <Navbar2 />
       
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-[400px] h-[480px] flex flex-col justify-center">
                <h2 className="text-2xl font-semibold text-center mb-6 text-green-700">Login</h2>
                
                <form className="flex flex-col">
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className="border border-gray-300 p-3 rounded w-full mb-3 focus:outline-none focus:ring-2 focus:ring-green-400" 
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="border border-gray-300 p-3 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-400" 
                    />
                    
                    <button className="bg-green-500 text-white px-4 py-3 rounded-full w-full text-lg font-semibold hover:bg-green-600 transition">
                        Login
                    </button>
                    
                    <div className="relative text-center mt-4">
                        <span className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 border-t border-gray-300"></span>
                        <span className="bg-white px-3 text-gray-500 relative">OR</span>
                    </div>
                    
                    {/* Google Login Button */}
                    <button className="flex items-center justify-center gap-3 border border-green-500 text-green-700 px-4 py-3 rounded-full w-full mt-4 font-semibold hover:bg-green-500 hover:text-white transition">
                        <FcGoogle size={22} /> Log In with Google
                    </button>
                </form>

                <p className="mt-4 text-center text-gray-600">
                    Don't have an account? <Link to="/signup" className="text-green-600 font-semibold">Sign Up</Link>
                </p>
            </div>
        </div>
        </>
    );
}

"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginComponent: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    // Validate input
    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }

    // Retrieve existing signup data from local storage
    const signups = localStorage.getItem("signups");
    const existingSignups: SignupData[] = signups ? JSON.parse(signups) : [];

    // Check if the entered username and password match any signup data
    const matchedSignup = existingSignups.find(
      (signup) => signup.username === username && signup.password === password
    );

    if (matchedSignup) {
      // Clear form fields
      setUsername("");
      setPassword("");

      localStorage.setItem("user", JSON.stringify(matchedSignup));
      router.push("landing");
      alert("Login successful!");
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Username:
        </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Password:
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Login
      </button>
    </div>
  );
};

export default LoginComponent;

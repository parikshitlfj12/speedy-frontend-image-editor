"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SignupComponent: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignup = () => {
    // Validate input
    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }

    // Retrieve existing signup data from local storage
    const signups = localStorage.getItem("signups");
    const existingSignups: SignupData[] = signups ? JSON.parse(signups) : [];

    // Check if the username is already taken
    if (existingSignups.some((signup) => signup.username === username)) {
      alert("Username is already taken. Please choose a different username.");
      return;
    }

    // Add the new signup data to the array
    const updatedSignups: SignupData[] = [
      ...existingSignups,
      { username, password },
    ];

    // Store the updated signups array in local storage
    localStorage.setItem("signups", JSON.stringify(updatedSignups));

    // Clear form fields
    setUsername("");
    setPassword("");

    alert("Signup successful! Data stored in local storage.");
    router.push("/login");
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Signup</h2>
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
        onClick={handleSignup}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Signup
      </button>
    </div>
  );
};

export default SignupComponent;

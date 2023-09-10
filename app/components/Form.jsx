"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Form() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(""); // state to store validation error message

  // adding functionality

  const handleSubmit = async (e) => {
    // to prevent refreshing
    e.preventDefault();
    // to prevent clicking and change the button text
    setIsLoading(true);
    // creating an object to represent new user book request

    const order = {
      name,
      gender,
      age,
    };

    const res = await fetch("http://localhost:3000/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    });
    // check the status and redirect user to the next page
    if (res.ok) {
      router.refresh();
      router.push("/submitted");
    } else {
      const errorData = await res.json();
      setError(errorData.error); // store the validation error message
      setIsLoading(false); // reset loading state
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-1/2">
      {/* displaying the error message */}
      {error && <div className="text-red-500">{error}</div>}
      <label>
        <span>Name:</span>
        <input
          required
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </label>
      <label>
        <span>Gender:</span>
        <select onChange={(e) => setGender(e.target.value)} value={gender}>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
      </label>
      <label>
        <span>Age:</span>
        <select onChange={(e) => setAge(e.target.value)} value={age}>
          <option value="young">Young</option>
          <option value="medium">Medium</option>
          <option value="mature">Mature</option>
        </select>
      </label>
      <button
        className="btn-primary"
        //   to prevent clicking after form is submitted
        disabled={isLoading}
      >
        {isLoading && <span>Submitted</span>}
        {!isLoading && <span>See the magic</span>}
      </button>
    </form>
  );
}

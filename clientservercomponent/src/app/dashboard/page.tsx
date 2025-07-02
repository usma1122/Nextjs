"use client"
import { useState } from "react";

export default function Dashboard() {
  console.log("client component");
  
  const [name, setName] = useState("");
     const handleChange = (e:any) => {
    const value = e.target.value;
    setName(value)
     }
  return (
    <div>
      <h2>Dashboard</h2>
      <input 
        type="text" 
        value={name} 
        onChange={handleChange} 
        placeholder="Enter your name"
      />
      <p>Hello, {name}</p>
    </div>
  );
}


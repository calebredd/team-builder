import React, { useState } from "react";

export default function MemberForm({ addMember }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !email || !role) return;
    addMember(name, email, role);
    setName("");
    setEmail("");
    setRole("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        className="name"
        value={name}
        onChange={e => setName(e.target.value)}
      />{" "}
      <br />
      <label>Email:</label>
      <input
        type="email"
        className="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <br />
      <label>Role:</label>
      <input
        type="text"
        className="role"
        value={role}
        onChange={e => setRole(e.target.value)}
      />
      <br />
      <button>Submit</button>
    </form>
  );
}

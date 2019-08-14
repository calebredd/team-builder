import React, { useState } from "react";

function Member({ member }) {
  return <div>{member.name}</div>;
}

function MemberForm({ addMember }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addMember(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  const [members, setMembers] = useState([
    {
      name: "Jason Bread"
    },
    {
      name: "Wilson Land"
    },
    {
      name: "Brian Deanish"
    }
  ]);

  const addMember = name => {
    const newMember = [...members, { name }];
    setMembers(newMember);
  };

  return (
    <div className="app">
      <MemberForm addMember={addMember} />
      <div className="todo-list">
        {members.map(member => (
          <Member member={member} />
        ))}
      </div>
    </div>
  );
}

export default App;

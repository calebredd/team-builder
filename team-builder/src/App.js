import React, { useState } from "react";
import Member from "./Member";
import MemberForm from "./MemberForm";


function App() {
  const [members, setMembers] = useState([
    // {
    //   name: "Jason Bread", email:"jason@live.com", role:"developer"
    // },
    // {
    //   name: "Wilson Land", email: "wilson@hotmail.com", role: "backend"
    // },
    // {
    //   name: "Brian Deanish", email: "brian@gmail.com", role: "UX"
    // }
  ]);

  const addMember = (name, email, role) => {
    const newMember = [...members, { name, email, role }];
    setMembers(newMember);
  };

  return (
    <div className="app">
      <MemberForm addMember={addMember} />
      <div>
        {members.map(member => (
          <Member member={member} />
        ))}
      </div>
    </div>
  );
}

export default App;

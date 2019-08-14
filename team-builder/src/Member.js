import React from "react";

export default function Member({ member }) {
  return (
    <div>
      Name: {member.name} Email: {member.email} Role: {member.role}
    </div>
  );
}

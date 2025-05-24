import React, { useEffect } from "react";
import { useState } from "react";

const Users = ({ name }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Hello World");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="user-card">
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Counter:{count}
      </button>
      <h2>Name:{name}</h2>
      <h3>Location: Lucknow</h3>
    </div>
  );
};
export default Users;

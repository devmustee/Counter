// App.js
import React, { useState } from "react";
import Counter from "./Counter";
import UserProfile from "./UserProfile";

function App() {
  const [user, setUser] = useState({ name: "Alice", age: 25 });

  return (
    <div>
      <h1>React Debugging Example</h1>
      <Counter initialCount={0} />
      <UserProfile user={user} />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const onChange = (e: any, key: "email" | "password") => {
    setState((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  const loginHandler = async () => {
    try {
      const res = await axios.post("/api/auth/login", {
        email: state.email,
        password: state.password,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    return () => {
      // clean up
      // To check git Username
    };
  }, [state]);

  return (
    <div className="App">
      <div className="input-container">
        <p>Email</p>
        <input type="text" onChange={(e) => onChange(e, "email")} />
        <hr />
        <p>Password</p>
        <input type="text" onChange={(e) => onChange(e, "password")} />
        <hr />
      </div>
      <button className="text" onClick={loginHandler}>
        Login
      </button>
    </div>
  );
}

export default App;

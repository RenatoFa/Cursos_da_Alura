import React from "react";
import Profile from "./components/profile";
import { useAuth } from './providers/auth';
import Login from './components/login'


function App() {
  const { user } = useAuth()

  return (
    <div className="App">
      <h1 style={{ color: user.color }}>Ola Mundo</h1>
      <Profile />
      <Login />
    </div>
  )
}

export default App;

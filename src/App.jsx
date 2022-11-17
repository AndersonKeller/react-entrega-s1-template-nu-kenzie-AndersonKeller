import "./App.css";
import { useState } from "react";
import { Index } from "./components/Index";
import { Button } from "./components/Button";
import { Home } from "./components/Home/home";

function App() {
  const [user, setUser] = useState(false);

  return user ? (
    <div className="App">
      <Home setUser={setUser} />
    </div>
  ) : (
    <div className="App">
      <Index user={user} setUser={setUser} />
    </div>
  );
}

export default App;

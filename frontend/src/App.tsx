import { useState } from "react";
import "./App.css";
import Input from "../components/input";

function App() {
  const [profile, setProfile] = useState();
  function log() {
    console.log(profile);
  }

  return (
    <div>
      <Input setProfile={setProfile} />
      <button onClick={log}></button>
    </div>
  );
}
export default App;

//npm run dev to run

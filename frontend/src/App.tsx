import { useState } from "react";
import "./App.css";
import Input from "../components/input";
import Characters from "../components/character.tsx";
import type { Profile } from "../type/profile.ts";

function App() {
  const [profile, setProfile] = useState<Profile>();

  return (
    <div>
      <Input setProfile={setProfile} />
      <Characters avatarDetailList={profile?.avatarDetailList} />
    </div>
  );
}
export default App;

//npm run dev to run

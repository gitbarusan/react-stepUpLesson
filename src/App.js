import { useState } from "react";
import { ChileArea } from "./components/ChildArea";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onClickOpen = () => setOpen(!open);

  return (
    <div className="App">
      <input onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChileArea open={open} />
    </div>
  );
}
